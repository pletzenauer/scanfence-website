import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const LOCALES = ['en', 'zh', 'es', 'ar', 'pt', 'id', 'fr', 'ja', 'ru', 'de', 'nl', 'hi'];

// Keep in sync with INDEXED_LOCALES in src/i18n/config.ts, which carries the
// rationale. Astro's config is .mjs and cannot import the .ts module, so the
// list is restated here; the assertion below fails the build if they drift.
const INDEXED_LOCALES = ['en', 'de', 'nl'];
const NOINDEX_LOCALES = LOCALES.filter(l => !INDEXED_LOCALES.includes(l));

/** URLs under a noindexed locale prefix must not appear in the sitemap —
 *  submitting a `noindex` URL is a direct contradiction and Search Console
 *  reports it as "Submitted URL marked 'noindex'". */
const isNoindexedLocaleUrl = url =>
  NOINDEX_LOCALES.some(l => url.startsWith(`https://scanfence.com/${l}/`));

// Fail the build if the duplicated list above drifts from the source of truth.
// A silent drift would either leak noindexed locales back into the sitemap or
// drop indexable ones out of it, and neither is visible without a crawl.
{
  const src = readFileSync(
    fileURLToPath(new URL('./src/i18n/config.ts', import.meta.url)),
    'utf8',
  );
  const match = src.match(/export const INDEXED_LOCALES = \[([^\]]*)\]/);
  if (!match) {
    throw new Error(
      'astro.config.mjs: could not find INDEXED_LOCALES in src/i18n/config.ts. ' +
        'If it was renamed, update this assertion and the local copy.',
    );
  }
  const fromSource = [...match[1].matchAll(/'([a-z-]+)'/g)].map(m => m[1]);
  const a = JSON.stringify(fromSource);
  const b = JSON.stringify(INDEXED_LOCALES);
  if (a !== b) {
    throw new Error(
      `astro.config.mjs: INDEXED_LOCALES drifted. src/i18n/config.ts has ${a}, ` +
        `astro.config.mjs has ${b}. Make them match.`,
    );
  }
}

export default defineConfig({
  site: 'https://scanfence.com',
  trailingSlash: 'always',
  compressHTML: true,
  i18n: {
    defaultLocale: 'en',
    locales: LOCALES,
    routing: {
      prefixDefaultLocale: false,
      redirectToDefaultLocale: false,
    },
  },
  build: {
    format: 'directory',
    inlineStylesheets: 'always',
  },
  vite: {
    build: { cssMinify: 'lightningcss' },
  },
  integrations: [
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      // No global `lastmod`. It was `new Date()`, which stamped every one of
      // the 1,092 URLs with the build time on every deploy — asserting that
      // the whole site changed whenever any part of it did. Google discounts
      // lastmod it can't corroborate, so an absent value beats a false one.
      filter: page => !isNoindexedLocaleUrl(page),
      i18n: {
        defaultLocale: 'en',
        // Only indexable locales get hreflang entries here, matching
        // alternatesFor() in src/i18n/t.ts.
        locales: {
          en: 'en',
          de: 'de',
          nl: 'nl',
        },
      },
      serialize(item) {
        if (item.url === 'https://scanfence.com/') {
          item.priority = 1.0;
        } else if (
          item.url === 'https://scanfence.com/pricing/' ||
          item.url === 'https://scanfence.com/features/' ||
          item.url === 'https://scanfence.com/contact/'
        ) {
          item.priority = 0.9;
        } else if (item.url.includes('/blog/')) {
          item.priority = 0.6;
        } else if (item.url.includes('/category/')) {
          item.priority = 0.4;
        }
        return item;
      },
    }),
  ],
});
