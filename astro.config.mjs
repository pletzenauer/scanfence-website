import { defineConfig } from 'astro/config';
import { existsSync, readFileSync } from 'node:fs';
import sitemap from '@astrojs/sitemap';

const LOCALES = ['en', 'zh', 'es', 'ar', 'pt', 'id', 'fr', 'ja', 'ru', 'de'];

// Per-URL lastmod map written during static-path generation by `recordLastmod`
// (src/lib/lastmod-store.ts). serialize() runs at the end of the build, so the
// file is fully populated by then.
const LASTMOD_PATH = '.astro/lastmod.json';
function loadLastmodMap() {
  if (!existsSync(LASTMOD_PATH)) return {};
  try { return JSON.parse(readFileSync(LASTMOD_PATH, 'utf-8')); } catch { return {}; }
}

const lastmodForUrl = (url, map) => {
  const path = url.replace(/^https?:\/\/[^/]+/, '');
  // Direct match (English URLs we stamped).
  if (map[path]) return map[path];
  // Locale variants share lastmod with their English source.
  const m = path.match(/^\/[a-z]{2}(\/.*)$/);
  if (m && map[m[1]]) return map[m[1]];
  return null;
};

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
    (() => {
      // Lazy-load the map at the moment serialize() first runs (it isn't
      // populated yet at config-module load — getStaticPaths writes it during
      // the page build phase, before the sitemap integration finalizes).
      let lastmodMap = null;
      return sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      // Build-time fallback. serialize() below overrides with per-URL dates
      // recorded from WP `modified` fields when available.
      lastmod: new Date(),
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en',
          zh: 'zh-CN',
          es: 'es',
          ar: 'ar',
          pt: 'pt-BR',
          id: 'id',
          fr: 'fr',
          ja: 'ja',
          ru: 'ru',
          de: 'de',
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
        // Per-URL lastmod: blog posts and WP pages use post.modified /
        // page.modified; everything else falls back to build time.
        if (lastmodMap === null) lastmodMap = loadLastmodMap();
        const stamp = lastmodForUrl(item.url, lastmodMap);
        if (stamp) item.lastmod = stamp;
        return item;
      },
      });
    })(),
  ],
});
