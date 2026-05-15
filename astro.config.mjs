import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://scanfence.com',
  trailingSlash: 'always',
  build: {
    format: 'directory',
  },
  integrations: [
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
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
