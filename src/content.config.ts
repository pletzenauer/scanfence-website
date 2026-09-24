import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Help docs, one folder per locale: src/content/docs/<locale>/<slug>.md.
// English is the source; the other locales are translations of it.
const docs = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/docs' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    eyebrow: z.string().optional(),
  }),
});

export const collections = { docs };
