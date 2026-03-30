# Headless WordPress + Astro SSG Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Convert scanfence-website from a static HTML page to an Astro SSG project that pulls all content from WordPress REST API, matching app.scanfence.com's design system.

**Architecture:** Astro fetches posts/pages from WordPress REST API at build time, generates static HTML. Deployed via Docker on Hetzner VPS (46.225.12.180) behind Caddy. WordPress webhook triggers rebuild on content save.

**Tech Stack:** Astro 5, TypeScript, @astrojs/sitemap, Docker (multi-stage), Caddy

---

### Task 1: Scaffold Astro project

**Files:**
- Create: `package.json`
- Create: `astro.config.mjs`
- Create: `tsconfig.json`
- Create: `.gitignore` (update existing)
- Move: `assets/` → `public/assets/`
- Delete: `css/`, `js/`, `index.html` (replaced by Astro)

**Step 1: Initialize Astro project in current directory**

Run: `npm create astro@latest . -- --template minimal --no-install --typescript strict`

If interactive prompt blocks, manually create the files instead:

```json
// package.json
{
  "name": "scanfence-website",
  "type": "module",
  "scripts": {
    "dev": "astro dev",
    "build": "astro build",
    "preview": "astro preview"
  },
  "dependencies": {
    "astro": "^5.0.0",
    "@astrojs/sitemap": "^3.0.0"
  }
}
```

```js
// astro.config.mjs
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://scanfence.com',
  integrations: [sitemap()],
});
```

```json
// tsconfig.json
{
  "extends": "astro/tsconfigs/strict",
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    }
  }
}
```

**Step 2: Update .gitignore**

Append to existing `.gitignore`:
```
dist/
.astro/
```

**Step 3: Move assets to public/**

Run: `mkdir -p public && mv assets public/`

**Step 4: Remove old static files**

Run: `rm -rf css js index.html`

**Step 5: Create src directory structure**

Run: `mkdir -p src/{layouts,components,lib,styles,pages/blog,pages/category}`

**Step 6: Install dependencies**

Run: `npm install`

**Step 7: Verify Astro runs**

Run: `npm run dev`
Expected: Astro dev server starts on localhost:4321

**Step 8: Commit**

```bash
git add -A
git commit -m "feat: scaffold Astro project, remove static HTML"
```

---

### Task 2: Global styles and BaseLayout

**Files:**
- Create: `src/styles/global.css`
- Create: `src/layouts/BaseLayout.astro`

**Step 1: Create global.css**

Copy the full contents of the current `css/styles.css` (already saved in memory from the read above) into `src/styles/global.css`. Add these additional styles at the end for blog and WP page content:

```css
/* ===== Blog ===== */
.blog-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.blog-card {
  background: var(--color-white);
  border: 1px solid var(--color-gray-200);
  border-radius: var(--radius-lg);
  overflow: hidden;
  transition: box-shadow 0.3s, transform 0.2s;
}

.blog-card:hover {
  box-shadow: var(--shadow-md);
  transform: translateY(-2px);
}

.blog-card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.blog-card-body {
  padding: 24px;
}

.blog-card-category {
  display: inline-block;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--color-blue);
  background: var(--color-blue-light);
  padding: 4px 10px;
  border-radius: 999px;
  margin-bottom: 12px;
}

.blog-card h3 {
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 8px;
  line-height: 1.3;
}

.blog-card h3 a {
  color: var(--color-heading);
}

.blog-card h3 a:hover {
  color: var(--color-blue);
}

.blog-card-excerpt {
  font-size: 14px;
  color: var(--color-gray-500);
  line-height: 1.6;
  margin-bottom: 12px;
}

.blog-card-date {
  font-size: 13px;
  color: var(--color-gray-400);
}

/* ===== Pagination ===== */
.pagination {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-top: 48px;
}

.pagination a,
.pagination span {
  padding: 8px 16px;
  border-radius: var(--radius);
  font-size: 14px;
  font-weight: 500;
}

.pagination a {
  color: var(--color-text);
  border: 1px solid var(--color-gray-200);
}

.pagination a:hover {
  border-color: var(--color-blue);
  color: var(--color-blue);
}

.pagination .active {
  background: var(--color-blue);
  color: var(--color-white);
  border: 1px solid var(--color-blue);
}

/* ===== WP Content ===== */
.wp-content {
  max-width: 720px;
  margin: 0 auto;
  font-size: 17px;
  line-height: 1.8;
}

.wp-content h1,
.wp-content h2,
.wp-content h3,
.wp-content h4 {
  margin-top: 2em;
  margin-bottom: 0.75em;
}

.wp-content h2 { font-size: 28px; }
.wp-content h3 { font-size: 22px; }

.wp-content p {
  margin-bottom: 1.25em;
}

.wp-content img {
  border-radius: var(--radius-lg);
  margin: 2em 0;
}

.wp-content ul,
.wp-content ol {
  padding-left: 1.5em;
  margin-bottom: 1.25em;
  list-style: revert;
}

.wp-content blockquote {
  border-left: 3px solid var(--color-blue);
  padding-left: 1.5em;
  margin: 1.5em 0;
  color: var(--color-gray-600);
  font-style: italic;
}

.wp-content a {
  color: var(--color-blue);
  text-decoration: underline;
  text-underline-offset: 2px;
}

.wp-content table {
  width: 100%;
  border-collapse: collapse;
  margin: 1.5em 0;
}

.wp-content th,
.wp-content td {
  padding: 12px 16px;
  border: 1px solid var(--color-gray-200);
  text-align: left;
}

.wp-content th {
  background: var(--color-gray-100);
  font-weight: 600;
}

/* ===== Post Header ===== */
.post-header {
  text-align: center;
  padding: 48px 0 32px;
}

.post-header h1 {
  font-size: 40px;
  max-width: 800px;
  margin: 0 auto 16px;
}

.post-meta {
  font-size: 14px;
  color: var(--color-gray-400);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
}

.post-featured-image {
  max-width: 800px;
  margin: 0 auto 48px;
  border-radius: var(--radius-xl);
  overflow: hidden;
}

.post-featured-image img {
  width: 100%;
  height: auto;
}

/* ===== Page Header ===== */
.page-header {
  text-align: center;
  padding: 48px 0 32px;
  background: linear-gradient(180deg, var(--color-white) 0%, var(--color-bg) 100%);
}

.page-header h1 {
  font-size: 44px;
}

@media (max-width: 1024px) {
  .blog-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .blog-grid {
    grid-template-columns: 1fr;
  }

  .post-header h1 {
    font-size: 28px;
  }

  .page-header h1 {
    font-size: 32px;
  }
}
```

**Step 2: Create BaseLayout.astro**

```astro
---
// src/layouts/BaseLayout.astro
interface Props {
  title: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
  jsonLd?: object;
}

const { title, description, canonical, ogImage, jsonLd } = Astro.props;
import '../styles/global.css';
---

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{title}</title>
  {description && <meta name="description" content={description} />}
  {canonical && <link rel="canonical" href={canonical} />}
  {ogImage && <meta property="og:image" content={ogImage} />}
  <meta property="og:title" content={title} />
  {description && <meta property="og:description" content={description} />}
  <meta property="og:type" content="website" />
  <meta name="twitter:card" content="summary_large_image" />
  <link rel="icon" type="image/png" href="/assets/favicon.png">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Space+Grotesk:wght@700;800&display=swap" rel="stylesheet">
  {jsonLd && <script type="application/ld+json" set:html={JSON.stringify(jsonLd)} />}
</head>
<body>
  <slot />
</body>
</html>
```

**Step 3: Verify dev server still works**

Run: `npm run dev`
Expected: No errors

**Step 4: Commit**

```bash
git add src/styles/global.css src/layouts/BaseLayout.astro
git commit -m "feat: add global styles and BaseLayout"
```

---

### Task 3: WordPress API layer

**Files:**
- Create: `src/lib/wordpress.ts`

**Step 1: Create the API layer**

```typescript
// src/lib/wordpress.ts
const WP_API = import.meta.env.WP_API_URL || 'https://scanfence.com/wp-json/wp/v2';

interface WPPost {
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

interface WPPage {
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

interface WPCategory {
  id: number;
  name: string;
  slug: string;
  count: number;
}

interface WPMedia {
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

export function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}
```

**Step 2: Verify TypeScript compiles**

Run: `npx astro check`
Expected: No type errors

**Step 3: Commit**

```bash
git add src/lib/wordpress.ts
git commit -m "feat: add WordPress REST API layer"
```

---

### Task 4: Header and Footer components

**Files:**
- Create: `src/components/Header.astro`
- Create: `src/components/Footer.astro`

**Step 1: Create Header.astro**

Port the header HTML from `index.html` into an Astro component. Replace external scanfence.com links with relative paths (e.g. `/faq/` instead of `https://scanfence.com/faq/`). Keep app.scanfence.com links as absolute. Add mobile menu with client-side JS via `<script>` tag.

**Step 2: Create Footer.astro**

Port the footer HTML from `index.html`. Same structure.

**Step 3: Commit**

```bash
git add src/components/Header.astro src/components/Footer.astro
git commit -m "feat: add Header and Footer components"
```

---

### Task 5: Homepage components (Hero, Features, Screenshots, CTA)

**Files:**
- Create: `src/components/Hero.astro`
- Create: `src/components/Features.astro`
- Create: `src/components/Screenshots.astro`
- Create: `src/components/CTA.astro`

**Step 1: Create each component**

Extract each section from `index.html` into its own Astro component. These are static content — no WP API calls needed. Keep the exact same HTML structure and classes.

**Step 2: Commit**

```bash
git add src/components/
git commit -m "feat: add homepage section components"
```

---

### Task 6: Homepage page

**Files:**
- Create: `src/pages/index.astro`

**Step 1: Create the homepage**

```astro
---
import BaseLayout from '../layouts/BaseLayout.astro';
import Header from '../components/Header.astro';
import Footer from '../components/Footer.astro';
import Hero from '../components/Hero.astro';
import Screenshots from '../components/Screenshots.astro';
import Features from '../components/Features.astro';
import CTA from '../components/CTA.astro';
---

<BaseLayout
  title="ScanFence — Dynamic QR Codes with GPS Geofencing"
  description="Create smart QR codes with GPS geofencing and time-based routing. Track scans, analyze engagement, and deliver location-aware content to your audience."
>
  <Header />
  <Hero />
  <Screenshots />
  <Features />
  <CTA />
  <Footer />
</BaseLayout>
```

**Step 2: Run dev server, verify homepage renders correctly**

Run: `npm run dev`
Navigate to `localhost:4321`
Expected: Homepage looks identical to current static site

**Step 3: Commit**

```bash
git add src/pages/index.astro
git commit -m "feat: add homepage"
```

---

### Task 7: Blog listing and BlogCard component

**Files:**
- Create: `src/components/BlogCard.astro`
- Create: `src/components/Pagination.astro`
- Create: `src/pages/blog/index.astro`

**Step 1: Create BlogCard.astro**

Accepts props: `title`, `slug`, `excerpt`, `date`, `imageUrl`, `category`. Renders a card with featured image, category badge, title link, excerpt snippet, date.

**Step 2: Create Pagination.astro**

Accepts props: `currentPage`, `totalPages`, `basePath`. Renders numbered page links.

**Step 3: Create blog index page**

Fetches posts from WP API via `getPosts()`, maps categories, fetches featured images. Renders a grid of BlogCards + Pagination. For SSG, use `getStaticPaths` if paginated, or fetch page 1 for initial version.

**Step 4: Verify blog listing works**

Run: `npm run dev`
Navigate to `localhost:4321/blog/`
Expected: Grid of blog posts with images, titles, excerpts, dates

**Step 5: Commit**

```bash
git add src/components/BlogCard.astro src/components/Pagination.astro src/pages/blog/index.astro
git commit -m "feat: add blog listing page with cards and pagination"
```

---

### Task 8: Single blog post page

**Files:**
- Create: `src/pages/blog/[slug].astro`
- Create: `src/layouts/PostLayout.astro`

**Step 1: Create PostLayout.astro**

Wraps BaseLayout. Adds post header (title, date, category), featured image, and `<div class="wp-content">` around the WP rendered content. Pulls SEO from `yoast_head_json`.

**Step 2: Create [slug].astro with getStaticPaths**

```astro
---
import { getAllPosts, getPost, getMedia, getCategories, formatDate } from '../../lib/wordpress';
import PostLayout from '../../layouts/PostLayout.astro';

export async function getStaticPaths() {
  const posts = await getAllPosts();
  return posts.map(post => ({ params: { slug: post.slug } }));
}

const { slug } = Astro.params;
const post = await getPost(slug);
if (!post) return Astro.redirect('/blog/');

const media = post.featured_media ? await getMedia(post.featured_media) : null;
const categories = await getCategories();
const postCategory = categories.find(c => post.categories.includes(c.id));

const seo = post.yoast_head_json;
---

<PostLayout
  title={seo?.title || post.title.rendered}
  description={seo?.description}
  canonical={seo?.canonical}
  ogImage={seo?.og_image?.[0]?.url || media?.source_url}
  date={formatDate(post.date)}
  category={postCategory?.name}
  featuredImage={media?.source_url}
  featuredImageAlt={media?.alt_text}
>
  <Fragment set:html={post.content.rendered} />
</PostLayout>
```

**Step 3: Verify single post renders**

Run: `npm run dev`
Navigate to a post URL like `localhost:4321/blog/how-qr-codes-work-a-simple-beginners-guide/`
Expected: Post with header, featured image, content, proper typography

**Step 4: Commit**

```bash
git add src/pages/blog/[slug].astro src/layouts/PostLayout.astro
git commit -m "feat: add single blog post page with SEO"
```

---

### Task 9: Category archive pages

**Files:**
- Create: `src/pages/category/[slug].astro`

**Step 1: Create [slug].astro with getStaticPaths**

Fetches all categories, generates a page for each. Each page fetches posts in that category. Renders with BlogCard grid + category header.

**Step 2: Verify category pages work**

Run: `npm run dev`
Navigate to `localhost:4321/category/blog/`
Expected: Filtered list of posts in that category

**Step 3: Commit**

```bash
git add src/pages/category/[slug].astro
git commit -m "feat: add category archive pages"
```

---

### Task 10: Catch-all WP pages

**Files:**
- Create: `src/pages/[...slug].astro`
- Create: `src/layouts/PageLayout.astro`

**Step 1: Create PageLayout.astro**

Similar to PostLayout but without date/category/featured image. Just a page header + `<div class="wp-content">` with the rendered content.

**Step 2: Create [...slug].astro with getStaticPaths**

Fetches all WP pages, generates routes for each (except `homepage` which is handled by `index.astro`). Maps page slugs to routes.

Excluded slugs: `homepage`, `blog` (handled separately)

**Step 3: Verify a WP page renders**

Run: `npm run dev`
Navigate to `localhost:4321/faq/`
Expected: FAQ page content from WordPress with proper styling

**Step 4: Commit**

```bash
git add src/pages/[...slug].astro src/layouts/PageLayout.astro
git commit -m "feat: add catch-all WP page routes"
```

---

### Task 11: Build and verify SSG output

**Step 1: Run full build**

Run: `npm run build`
Expected: Astro generates static HTML in `dist/`. All 70 posts + 10 pages + blog index + category pages.

**Step 2: Preview built site**

Run: `npm run preview`
Navigate to `localhost:4321`, click through pages, verify:
- Homepage renders correctly
- Blog listing shows posts
- Single post pages have content + SEO
- Category pages filter correctly
- WP pages (FAQ, Docs, etc.) render content
- All links work (relative, not pointing to old WP frontend)

**Step 3: Commit**

```bash
git add -A
git commit -m "feat: verify full SSG build"
```

---

### Task 12: Docker + deployment setup

**Files:**
- Create: `Dockerfile`
- Create: `docker-compose.yml`
- Create: `rebuild.sh`

**Step 1: Create Dockerfile**

```dockerfile
FROM node:22-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
```

**Step 2: Create nginx.conf**

```nginx
server {
    listen 80;
    server_name localhost;
    root /usr/share/nginx/html;
    index index.html;

    location / {
        try_files $uri $uri/ $uri.html =404;
    }

    error_page 404 /404.html;
}
```

**Step 3: Create docker-compose.yml**

```yaml
version: '3.8'
services:
  scanfence-web:
    build: .
    container_name: scanfence-web
    restart: unless-stopped
    ports:
      - "8090:80"
```

**Step 4: Create rebuild.sh**

```bash
#!/bin/bash
cd /opt/scanfence-website
git pull origin main
docker-compose build --no-cache
docker-compose up -d
echo "Rebuild complete: $(date)"
```

**Step 5: Create nginx.conf file**

```bash
# Already described above
```

**Step 6: Commit**

```bash
git add Dockerfile docker-compose.yml rebuild.sh nginx.conf
git commit -m "feat: add Docker + nginx deployment setup"
```

---

### Task 13: WordPress webhook for auto-rebuild

**Files:**
- WP sandbox PHP file via MCP

**Step 1: Create WP webhook plugin via MCP**

Use `mcp__mcpscanfence__mcp-adapter-execute-ability` to write a simple `save_post` hook that sends a POST request to the VPS rebuild endpoint when content is saved.

The VPS rebuild endpoint: a small script listening on a port (or Caddy route) that triggers `rebuild.sh`.

**Step 2: Test webhook fires on post save**

Save a draft post in WP admin, verify the webhook is triggered.

**Step 3: Commit rebuild endpoint on VPS**

This is server config, done via SSH during deployment.

---

### Task 14: Deploy to VPS

**Step 1: Push to GitHub**

```bash
git push origin main
```

**Step 2: SSH to VPS and clone**

```bash
ssh root@46.225.12.180 "cd /opt && git clone <repo-url> scanfence-website"
```

**Step 3: Build and start Docker container**

```bash
ssh root@46.225.12.180 "cd /opt/scanfence-website && docker-compose up -d --build"
```

**Step 4: Configure Caddy reverse proxy**

Add to `/etc/caddy/Caddyfile`:
```
scanfence.com {
    reverse_proxy localhost:8090
}
```

Reload: `systemctl reload caddy`

**Step 5: Verify live site**

Navigate to `https://scanfence.com`
Expected: Astro-generated static site served via Caddy

**Step 6: Commit any config changes**

```bash
git add -A
git commit -m "feat: complete deployment setup"
```
