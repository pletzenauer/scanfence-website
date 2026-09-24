/**
 * Help docs at /documentation/ (and /<locale>/documentation/). Pages live in
 * src/content/docs/<locale>/<slug>.md; English is the source and any page
 * missing in a locale falls back to it.
 *
 * DOCS_NAV is the reading order: the sidebar, the previous/next links and
 * the search index all follow it. Group labels are UI strings (docs.group.*),
 * page titles come from each page's frontmatter.
 */
import { getCollection, type CollectionEntry } from 'astro:content';
import { DEFAULT_LOCALE, type Locale } from '../i18n/config';
import { localizedUrl } from '../i18n/t';

export interface DocGroup { key: string; slugs: string[] }

export const DOCS_NAV: DocGroup[] = [
  { key: 'gettingStarted', slugs: ['', 'quick-start', 'plans-and-limits'] },
  { key: 'qrCodes', slugs: ['create-qr-codes', 'manage-qr-codes', 'time-based-rules', 'scan-limits', 'bulk-upload'] },
  { key: 'location', slugs: ['geofences', 'multi-location', 'scanning'] },
  { key: 'insights', slugs: ['dashboard', 'analytics', 'audit-log'] },
  { key: 'teamAccount', slugs: ['team', 'account-settings', 'troubleshooting'] },
];

export const ALL_SLUGS = DOCS_NAV.flatMap(g => g.slugs);

export const docHref = (slug: string, locale: Locale) =>
  localizedUrl(slug ? `/documentation/${slug}/` : '/documentation/', locale);

const fileSlug = (slug: string) => slug || 'index';

export type DocEntry = CollectionEntry<'docs'>;

/** Every page for `locale`, keyed by nav slug, with English filling gaps. */
export async function docsFor(locale: Locale): Promise<Map<string, DocEntry & { translated: boolean }>> {
  const all = await getCollection('docs');
  // Key by file path, not id: the glob loader shortens "en/index" to "en".
  const byId = new Map(all.map(e => [(e.filePath ?? '').replace(/^.*src\/content\/docs\//, '').replace(/\.md$/, ''), e]));
  const out = new Map<string, DocEntry & { translated: boolean }>();
  for (const slug of ALL_SLUGS) {
    const own = byId.get(`${locale}/${fileSlug(slug)}`);
    const en = byId.get(`${DEFAULT_LOCALE}/${fileSlug(slug)}`);
    const entry = own ?? en;
    if (!entry) throw new Error(`docs: no page for "${fileSlug(slug)}" in ${locale} or ${DEFAULT_LOCALE}`);
    out.set(slug, { ...entry, translated: !!own || locale === DEFAULT_LOCALE });
  }
  return out;
}

/**
 * The Markdown is written with English site paths (/documentation/…,
 * /pricing/). Point them at the reader's locale.
 */
export async function localizeDocLinks(html: string, locale: Locale): Promise<string> {
  if (locale === DEFAULT_LOCALE) return html;
  // Anchors are English heading slugs; translated headings get other slugs.
  // Translations keep the heading order, so map them by position.
  const [en, own] = await Promise.all([docsFor(DEFAULT_LOCALE), docsFor(locale)]);
  const hs = (e: DocEntry) => (e.rendered?.metadata?.headings ?? []) as { slug: string }[];
  html = html.replace(/href="\/documentation\/([a-z-]*)\/?#([^"]+)"/g, (m, slug: string, anchor: string) => {
    const from = hs(en.get(slug)!), to = hs(own.get(slug)!);
    const i = from.findIndex(h => h.slug === anchor);
    return i >= 0 && to[i] ? `href="/documentation/${slug}${slug ? '/' : ''}#${to[i].slug}"` : m;
  });
  return html.replace(/href="\/(documentation|pricing)\//g, `href="/${locale}/$1/`);
}

export function neighbours(slug: string) {
  const i = ALL_SLUGS.indexOf(slug);
  return {
    group: DOCS_NAV.find(g => g.slugs.includes(slug))?.key,
    prev: i > 0 ? ALL_SLUGS[i - 1] : undefined,
    next: i >= 0 && i < ALL_SLUGS.length - 1 ? ALL_SLUGS[i + 1] : undefined,
  };
}

/** Search index entries for one locale. */
export async function searchIndex(locale: Locale, groupLabel: (key: string) => string) {
  const pages = await docsFor(locale);
  return DOCS_NAV.flatMap(g =>
    g.slugs.map(slug => {
      const e = pages.get(slug)!;
      const text = (e.body ?? '')
        .replace(/<[^>]+>/g, ' ')
        .replace(/[#*_`>|[\]()-]+/g, ' ')
        .replace(/\s+/g, ' ')
        .trim();
      return {
        href: docHref(slug, locale),
        title: e.data.title,
        group: groupLabel(g.key),
        headings: (e.rendered?.metadata?.headings ?? [])
          .filter((h: { depth: number }) => h.depth <= 3)
          .map(({ slug, text }: { slug: string; text: string }) => ({ slug, text })),
        text: `${e.data.description} ${text}`,
      };
    }),
  );
}
