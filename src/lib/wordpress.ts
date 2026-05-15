const WP_API = import.meta.env.WP_API_URL || 'https://cms.scanfence.com/wp-json/wp/v2';

export interface WPPost {
  id: number;
  slug: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  content: { rendered: string };
  date: string;
  categories: number[];
  featured_media: number;
  yoast_head_json?: {
    title?: string;
    description?: string;
    canonical?: string;
    og_image?: Array<{ url: string }>;
    schema?: object;
  };
}

export interface WPPage {
  id: number;
  slug: string;
  title: { rendered: string };
  content: { rendered: string };
  yoast_head_json?: {
    title?: string;
    description?: string;
    canonical?: string;
    og_image?: Array<{ url: string }>;
    schema?: object;
  };
}

export interface WPCategory {
  id: number;
  name: string;
  slug: string;
  count: number;
}

export interface WPMedia {
  id: number;
  source_url: string;
  alt_text: string;
}

async function fetchAPI<T>(endpoint: string): Promise<T> {
  const res = await fetch(`${WP_API}${endpoint}`);
  if (!res.ok) throw new Error(`WP API error: ${res.status} ${endpoint}`);
  return res.json();
}

export async function getPosts(page = 1, perPage = 12): Promise<{ posts: WPPost[]; totalPages: number }> {
  const res = await fetch(`${WP_API}/posts?page=${page}&per_page=${perPage}&_embed`);
  if (!res.ok) throw new Error(`WP API error: ${res.status}`);
  const posts = await res.json();
  const totalPages = parseInt(res.headers.get('X-WP-TotalPages') || '1');
  return { posts, totalPages };
}

export async function getAllPosts(): Promise<WPPost[]> {
  const all: WPPost[] = [];
  let page = 1;
  let totalPages = 1;
  do {
    const res = await fetch(`${WP_API}/posts?page=${page}&per_page=100&_embed`);
    if (!res.ok) break;
    const posts = await res.json();
    all.push(...posts);
    totalPages = parseInt(res.headers.get('X-WP-TotalPages') || '1');
    page++;
  } while (page <= totalPages);
  return all;
}

export async function getPost(slug: string): Promise<WPPost | null> {
  const posts = await fetchAPI<WPPost[]>(`/posts?slug=${slug}&_embed`);
  return posts[0] || null;
}

export async function getPages(): Promise<WPPage[]> {
  return fetchAPI<WPPage[]>('/pages?per_page=100&_embed');
}

export async function getPage(slug: string): Promise<WPPage | null> {
  const pages = await fetchAPI<WPPage[]>(`/pages?slug=${slug}&_embed`);
  return pages[0] || null;
}

export async function getCategories(): Promise<WPCategory[]> {
  return fetchAPI<WPCategory[]>('/categories?per_page=100');
}

export async function getPostsByCategory(categoryId: number, page = 1, perPage = 12): Promise<{ posts: WPPost[]; totalPages: number }> {
  const res = await fetch(`${WP_API}/posts?categories=${categoryId}&page=${page}&per_page=${perPage}&_embed`);
  if (!res.ok) throw new Error(`WP API error: ${res.status}`);
  const posts = await res.json();
  const totalPages = parseInt(res.headers.get('X-WP-TotalPages') || '1');
  return { posts, totalPages };
}

export async function getMedia(id: number): Promise<WPMedia | null> {
  if (!id) return null;
  try {
    return await fetchAPI<WPMedia>(`/media/${id}`);
  } catch {
    return null;
  }
}

export function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, '').trim();
}

const ROOT_SLUG_ALLOWLIST = new Set([
  '', 'pricing', 'features', 'faq', 'documentation', 'contact', 'blog',
  'about-raphael', 'support', 'datenschutzerklaerung', 'terms-and-conditions',
  'category', 'assets', 'wp-content', 'wp-admin', 'wp-login.php',
]);

const LEGACY_PATH_REDIRECTS: Record<string, string> = {
  '/privacy-policy': '/datenschutzerklaerung/',
  '/privacy-policy/': '/datenschutzerklaerung/',
  '/privacy/': '/datenschutzerklaerung/',
  '/terms/': '/terms-and-conditions/',
  '/terms-of-service/': '/terms-and-conditions/',
};

export function rewriteWPLinks(html: string, knownPostSlugs: Set<string>): string {
  return html.replace(
    /(\bhref=["'])((?:https?:\/\/(?:www\.)?scanfence\.com)?)\/([^"'#?\s]*?)\/?(["'#?])/gi,
    (match, prefix, origin, path, suffix) => {
      if (!path) return match;
      const legacyKey = `/${path}/`;
      if (LEGACY_PATH_REDIRECTS[legacyKey]) {
        return `${prefix}${LEGACY_PATH_REDIRECTS[legacyKey]}${suffix}`;
      }
      const bareKey = `/${path}`;
      if (LEGACY_PATH_REDIRECTS[bareKey]) {
        return `${prefix}${LEGACY_PATH_REDIRECTS[bareKey]}${suffix}`;
      }
      if (path.includes('/')) return match;
      const firstSeg = path.split('/')[0];
      if (ROOT_SLUG_ALLOWLIST.has(firstSeg)) return match;
      if (knownPostSlugs.has(firstSeg)) {
        return `${prefix}/blog/${firstSeg}/${suffix}`;
      }
      return match;
    }
  );
}

export function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}
