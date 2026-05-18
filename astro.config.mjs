import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const LOCALES = ['en', 'zh', 'es', 'ar', 'pt', 'id', 'fr', 'ja', 'ru', 'de'];

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
        return item;
      },
    }),
  ],
});
