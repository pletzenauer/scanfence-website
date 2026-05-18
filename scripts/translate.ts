#!/usr/bin/env tsx
/**
 * AI translation runner for scanfence.com.
 *
 *   ANTHROPIC_API_KEY=sk-ant-...  npm run translate
 *
 * Reads src/i18n/locales/en.json (UI strings) and the live WordPress REST API
 * (pages + posts) and writes one translated JSON file per locale into:
 *   - src/i18n/locales/{locale}.json            (UI strings)
 *   - src/i18n/cache/wp-pages/{locale}/{slug}.json
 *   - src/i18n/cache/wp-posts/{locale}/{slug}.json
 *
 * Idempotent: each cache file stores a sourceHash; if the current source
 * matches, that file is skipped (no API call).
 */
import 'dotenv/config';
import Anthropic from '@anthropic-ai/sdk';
import { createHash } from 'node:crypto';
import { mkdirSync, readFileSync, writeFileSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const ROOT = join(__dirname, '..');

// ---- locale config (mirrors src/i18n/config.ts) ----
const DEFAULT_LOCALE = 'en' as const;
const LOCALES = ['en', 'zh', 'es', 'ar', 'pt', 'id', 'fr', 'ja', 'ru', 'de'] as const;
type Locale = (typeof LOCALES)[number];
const NON_DEFAULT: Locale[] = LOCALES.filter(l => l !== DEFAULT_LOCALE) as Locale[];

const LOCALE_PROMPTS: Record<Locale, string> = {
  en: 'English (US, neutral business tone).',
  zh: 'Simplified Chinese (zh-CN, mainland conventions). Keep Western digits in prices, code, and version numbers.',
  es: 'Neutral international Spanish, avoid strong regionalisms.',
  ar: 'Modern Standard Arabic. Output HTML stays in source order — browser handles right-to-left via dir="rtl" on the page. Use Western digits in prices, dates, code, and version numbers.',
  pt: 'Brazilian Portuguese (pt-BR).',
  id: 'Bahasa Indonesia, modern business register.',
  fr: 'Metropolitan French (fr-FR).',
  ja: 'Japanese, standard です/ます polite register for marketing copy.',
  ru: 'Russian, modern neutral business register.',
  de: 'German, Sie-form (formal), neutral business tone.',
};

const WP_API = process.env.WP_API_URL || 'https://cms.scanfence.com/wp-json/wp/v2';
const MODEL = process.env.TRANSLATE_MODEL || 'claude-opus-4-7';

// ---- argv parsing ----
const argv = new Set(process.argv.slice(2));
const ONLY_UI = argv.has('--ui');
const ONLY_WP = argv.has('--wp');
const FORCE = argv.has('--force');
const LIMIT_WP = parseInt(process.env.TRANSLATE_LIMIT || '0', 10) || 0;
const ONLY_LOCALES: Locale[] = (() => {
  const arg = [...argv].find(a => a.startsWith('--locale='));
  if (!arg) return NON_DEFAULT;
  const codes = arg.slice('--locale='.length).split(',').filter(Boolean);
  return codes.filter((c): c is Locale => (NON_DEFAULT as readonly string[]).includes(c));
})();

if (!process.env.ANTHROPIC_API_KEY) {
  console.error('ANTHROPIC_API_KEY is not set. Add it to .env and re-run.');
  process.exit(1);
}

const client = new Anthropic();

// ---- helpers ----
function sha(input: string): string {
  return createHash('sha256').update(input).digest('hex').slice(0, 16);
}
function ensureDir(path: string) {
  mkdirSync(path, { recursive: true });
}
function readJSON<T>(path: string): T {
  return JSON.parse(readFileSync(path, 'utf8')) as T;
}
function writeJSON(path: string, data: unknown) {
  ensureDir(dirname(path));
  writeFileSync(path, JSON.stringify(data, null, 2) + '\n', 'utf8');
}
function decodeEntities(s: string): string {
  return s.replace(/&amp;/g, '&').replace(/&#8217;/g, '’').replace(/&#8211;/g, '–').replace(/&#8220;/g, '“').replace(/&#8221;/g, '”').replace(/&hellip;/g, '…');
}

const SYSTEM_PROMPT_BASE = `You are a senior marketing translator for a B2B SaaS product called ScanFence.

ScanFence sells dynamic QR codes with GPS geofencing and time-based routing.
The brand voice is direct, confident, technical, and slightly editorial — short sentences,
no hype, no exclamation marks. Translations must preserve that tone.

Hard rules:
1. ALWAYS keep the brand name "ScanFence" untranslated and in Latin script,
   even in Chinese / Arabic / Japanese / Russian / Korean copy.
2. Keep proper nouns and short ALL-CAPS technical labels (e.g. "EU · IRELAND",
   "SOC-2 TYPE II", "P50 · 117MS", "GPS · GEOFENCED", "QR · DYNAMIC") untranslated.
3. Keep email addresses, URLs, code samples, version numbers (v2.4.1), and price
   numbers (29, 79, 199, €0.0008) exactly as they appear in the source.
4. Preserve the placeholder syntax {var} verbatim — do not translate inside the braces.
5. Preserve punctuation cues that act as glyphs: arrows ("→", "←"), em dashes,
   middle dots ("·"). Keep them in place.
6. For HTML translation:
   - Output the EXACT same HTML structure (same tags, same attributes, same order).
   - Only translate text nodes, and the values of alt, title, aria-label attributes.
   - Do NOT translate values of class, id, href, src, data-*, style, type, name, role.
   - Do NOT add or remove tags. Do NOT escape entities you didn't add.
7. Respond ONLY with the requested JSON. No surrounding prose, no markdown fences.`;

interface BatchUI {
  kind: 'ui';
  locale: Locale;
  source: Record<string, string>;
  cachedTranslations?: Record<string, string>;
}

interface BatchHTML {
  kind: 'wp';
  locale: Locale;
  fields: {
    title?: string;
    content?: string;
    excerpt?: string;
    yoastTitle?: string;
    yoastDescription?: string;
  };
}

let totalInputTokens = 0;
let totalOutputTokens = 0;
let apiCalls = 0;

async function callClaude(systemBlocks: Anthropic.TextBlockParam[], userMessage: string, maxTokens = 16000): Promise<string> {
  apiCalls += 1;
  const resp = await client.messages.create({
    model: MODEL,
    max_tokens: maxTokens,
    system: systemBlocks,
    messages: [{ role: 'user', content: userMessage }],
  });
  const usage: any = resp.usage as any;
  totalInputTokens += (usage?.input_tokens ?? 0);
  totalOutputTokens += (usage?.output_tokens ?? 0);
  if (usage?.cache_read_input_tokens) totalInputTokens += usage.cache_read_input_tokens;
  const text = resp.content
    .map(c => (c.type === 'text' ? c.text : ''))
    .join('')
    .trim();
  return text;
}

function buildSystemBlocks(locale: Locale): Anthropic.TextBlockParam[] {
  return [
    { type: 'text', text: SYSTEM_PROMPT_BASE, cache_control: { type: 'ephemeral' } },
    { type: 'text', text: `Target locale: ${locale}. ${LOCALE_PROMPTS[locale]}` },
  ];
}

function stripJsonFence(s: string): string {
  return s.replace(/^```(?:json)?\s*/i, '').replace(/```\s*$/i, '').trim();
}

// ---- UI string translation ----
async function translateUI(locale: Locale, sourceCatalog: Record<string, string>): Promise<Record<string, string>> {
  const existingPath = join(ROOT, 'src/i18n/locales', `${locale}.json`);
  const existing = existsSync(existingPath) ? readJSON<Record<string, string>>(existingPath) : {};

  // Identify keys that need translation: missing OR source changed (we re-translate ALL on --force).
  const toTranslate: Record<string, string> = {};
  if (FORCE) {
    Object.assign(toTranslate, sourceCatalog);
  } else {
    for (const [k, v] of Object.entries(sourceCatalog)) {
      if (!existing[k] || existing[k].trim() === '' || existing[k] === v) {
        // missing, empty, or still identical to English
        toTranslate[k] = v;
      }
    }
  }

  if (Object.keys(toTranslate).length === 0) {
    console.log(`  [ui:${locale}] cache hit (${Object.keys(sourceCatalog).length} keys, no changes)`);
    return existing;
  }

  console.log(`  [ui:${locale}] translating ${Object.keys(toTranslate).length} of ${Object.keys(sourceCatalog).length} keys`);

  const systemBlocks = buildSystemBlocks(locale);
  const userMessage = `Translate the VALUES of this JSON object into ${locale}.
Keys MUST stay identical. Preserve all hard rules from the system prompt.
Return ONLY the translated JSON object, no commentary.

${JSON.stringify(toTranslate, null, 2)}`;

  const raw = await callClaude(systemBlocks, userMessage, 16000);
  let translated: Record<string, string>;
  try {
    translated = JSON.parse(stripJsonFence(raw));
  } catch (err) {
    console.error(`  [ui:${locale}] JSON parse failed. Raw response:`, raw.slice(0, 500));
    throw err;
  }

  // Merge: keep existing translations for keys not in toTranslate, layer new ones on top.
  const merged: Record<string, string> = { ...existing };
  for (const k of Object.keys(sourceCatalog)) {
    if (translated[k] !== undefined) merged[k] = translated[k];
    else if (merged[k] === undefined) merged[k] = sourceCatalog[k]; // last-resort EN fallback
  }
  return merged;
}

// ---- WP HTML translation ----
async function translateWPBatch(locale: Locale, fields: BatchHTML['fields']): Promise<Required<Pick<BatchHTML['fields'], 'title'>> & BatchHTML['fields']> {
  const systemBlocks = buildSystemBlocks(locale);
  const payload: Record<string, string | undefined> = {};
  for (const [k, v] of Object.entries(fields)) {
    if (v !== undefined && v !== null && v !== '') payload[k] = v;
  }
  const userMessage = `Translate each VALUE of this JSON object into ${locale}.
The "content" and "excerpt" values are HTML — follow the HTML rules in the system prompt.
The "title", "yoastTitle", and "yoastDescription" values are plain text.
Return ONLY the translated JSON object, keys identical to the input.

${JSON.stringify(payload, null, 2)}`;

  const raw = await callClaude(systemBlocks, userMessage, 32000);
  let translated: any;
  try {
    translated = JSON.parse(stripJsonFence(raw));
  } catch (err) {
    console.error(`  [wp:${locale}] JSON parse failed. Raw response head:`, raw.slice(0, 500));
    throw err;
  }
  return { title: payload.title || '', ...translated };
}

// ---- WP fetchers ----
interface WPPage {
  id: number;
  slug: string;
  title: { rendered: string };
  content: { rendered: string };
  yoast_head_json?: { title?: string; description?: string };
}
interface WPPost extends WPPage {
  excerpt: { rendered: string };
  date: string;
}

async function fetchAllPages(): Promise<WPPage[]> {
  const res = await fetch(`${WP_API}/pages?per_page=100`);
  if (!res.ok) throw new Error(`WP /pages failed: ${res.status}`);
  return (await res.json()) as WPPage[];
}
async function fetchAllPosts(): Promise<WPPost[]> {
  const all: WPPost[] = [];
  let page = 1;
  for (;;) {
    const res = await fetch(`${WP_API}/posts?per_page=100&page=${page}`);
    if (!res.ok) break;
    const batch = (await res.json()) as WPPost[];
    all.push(...batch);
    const totalPages = parseInt(res.headers.get('X-WP-TotalPages') || '1', 10);
    if (page >= totalPages) break;
    page++;
  }
  return all;
}

// ---- main ----
async function main() {
  console.log(`scanfence translation runner — model: ${MODEL}`);
  console.log(`Target locales: ${ONLY_LOCALES.join(', ')}`);
  if (FORCE) console.log('FORCE mode: ignoring cache hashes');
  if (LIMIT_WP) console.log(`LIMIT_WP=${LIMIT_WP}: capping per (locale × wp-bucket)`);

  // Step 1: UI strings
  if (!ONLY_WP) {
    console.log('\n--- UI strings ---');
    const sourceCatalog = readJSON<Record<string, string>>(join(ROOT, 'src/i18n/locales/en.json'));
    for (const loc of ONLY_LOCALES) {
      const translated = await translateUI(loc, sourceCatalog);
      writeJSON(join(ROOT, 'src/i18n/locales', `${loc}.json`), translated);
    }
  }

  // Step 2: WordPress pages and posts
  if (!ONLY_UI) {
    console.log('\n--- WordPress content ---');
    let pages: WPPage[] = [];
    let posts: WPPost[] = [];
    try {
      [pages, posts] = await Promise.all([fetchAllPages(), fetchAllPosts()]);
    } catch (err) {
      console.warn(`WordPress fetch failed (${(err as Error).message}). Skipping WP translation.`);
    }
    console.log(`Fetched ${pages.length} pages, ${posts.length} posts from WP.`);

    const EXCLUDED = new Set(['homepage', 'blog', 'sample-page', 'contact', 'pricing']);
    const wpPages = pages.filter(p => !EXCLUDED.has(p.slug));

    for (const loc of ONLY_LOCALES) {
      let pageCount = 0;
      let pageSkipped = 0;
      const pagesIter = LIMIT_WP ? wpPages.slice(0, LIMIT_WP) : wpPages;
      for (const p of pagesIter) {
        const sourceHash = sha(p.content.rendered + p.title.rendered);
        const out = join(ROOT, 'src/i18n/cache/wp-pages', loc, `${p.slug}.json`);
        if (!FORCE && existsSync(out)) {
          const prev = readJSON<{ sourceHash: string }>(out);
          if (prev.sourceHash === sourceHash) { pageSkipped++; continue; }
        }
        const translated = await translateWPBatch(loc, {
          title: decodeEntities(p.title.rendered),
          content: p.content.rendered,
          yoastTitle: p.yoast_head_json?.title,
          yoastDescription: p.yoast_head_json?.description,
        });
        writeJSON(out, {
          sourceHash,
          translatedAt: new Date().toISOString(),
          title: translated.title,
          content: translated.content ?? p.content.rendered,
          yoastTitle: translated.yoastTitle,
          yoastDescription: translated.yoastDescription,
        });
        pageCount++;
        process.stdout.write(`  [wp-page:${loc}] ${p.slug} ✓\n`);
      }

      let postCount = 0;
      let postSkipped = 0;
      const postsIter = LIMIT_WP ? posts.slice(0, LIMIT_WP) : posts;
      for (const post of postsIter) {
        const sourceHash = sha(post.content.rendered + post.title.rendered + post.excerpt.rendered);
        const out = join(ROOT, 'src/i18n/cache/wp-posts', loc, `${post.slug}.json`);
        if (!FORCE && existsSync(out)) {
          const prev = readJSON<{ sourceHash: string }>(out);
          if (prev.sourceHash === sourceHash) { postSkipped++; continue; }
        }
        const translated = await translateWPBatch(loc, {
          title: decodeEntities(post.title.rendered),
          content: post.content.rendered,
          excerpt: post.excerpt.rendered,
          yoastTitle: post.yoast_head_json?.title,
          yoastDescription: post.yoast_head_json?.description,
        });
        writeJSON(out, {
          sourceHash,
          translatedAt: new Date().toISOString(),
          title: translated.title,
          content: translated.content ?? post.content.rendered,
          excerpt: translated.excerpt ?? post.excerpt.rendered,
          yoastTitle: translated.yoastTitle,
          yoastDescription: translated.yoastDescription,
        });
        postCount++;
        process.stdout.write(`  [wp-post:${loc}] ${post.slug} ✓\n`);
      }
      console.log(`  [${loc}] pages: +${pageCount} new, ${pageSkipped} cache hits | posts: +${postCount} new, ${postSkipped} cache hits`);
    }
  }

  console.log('\n--- Summary ---');
  console.log(`API calls:     ${apiCalls}`);
  console.log(`Input tokens:  ${totalInputTokens.toLocaleString()}`);
  console.log(`Output tokens: ${totalOutputTokens.toLocaleString()}`);
  console.log('Done.');
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
