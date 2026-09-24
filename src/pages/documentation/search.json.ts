import type { APIRoute } from 'astro';
import { DOCS_NAV, docHref } from '../../lib/docs';

// Search index for the help sidebar, built from the same Markdown files the
// pages come from. Plain text only, trimmed of markup and image tags.
const pages = import.meta.glob<{
  frontmatter: { title: string; description: string };
  getHeadings: () => { depth: number; slug: string; text: string }[];
  rawContent: () => string;
}>('./*.md', { eager: true });

export const GET: APIRoute = () => {
  const entries = DOCS_NAV.flatMap(group =>
    group.items.map(item => {
      const mod = pages[`./${item.slug || 'index'}.md`];
      if (!mod) throw new Error(`docs nav points at missing page: ${item.slug || 'index'}.md`);
      const text = mod
        .rawContent()
        .replace(/<[^>]+>/g, ' ')
        .replace(/[#*_`>|[\]()-]+/g, ' ')
        .replace(/\s+/g, ' ')
        .trim();
      return {
        href: docHref(item.slug),
        title: mod.frontmatter.title,
        group: group.label,
        headings: mod.getHeadings().filter(h => h.depth <= 3).map(({ slug, text }) => ({ slug, text })),
        text: `${mod.frontmatter.description} ${text}`,
      };
    }),
  );
  return new Response(JSON.stringify(entries), {
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
  });
};
