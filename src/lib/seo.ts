export const SITE_URL = 'https://scanfence.com';
export const SITE_NAME = 'ScanFence';

/**
 * Sitewide publisher identity, emitted on every page by BaseLayout.
 *
 * The `@id` is stable and scheme/host-exact so that per-page entities can
 * reference it (`publisher: { '@id': ORG_ID }`) instead of restating an
 * anonymous brand each time.
 */
export const ORG_ID = `${SITE_URL}/#organization`;

export const ORGANIZATION_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': ORG_ID,
  name: SITE_NAME,
  url: `${SITE_URL}/`,
  logo: {
    '@type': 'ImageObject',
    url: `${SITE_URL}/assets/scanfence-logo-black.png`,
  },
  description:
    'ScanFence builds dynamic QR codes with GPS geofencing and time-based routing, ' +
    'so one printed code can serve different destinations by location and time of day.',
  areaServed: 'Worldwide',
} as const;

/**
 * The twelve capabilities named on /features/, restated as a machine-readable
 * list on the homepage's SoftwareApplication entity.
 *
 * Answer engines match a product to a query through its capabilities, and the
 * homepage's own copy is deliberately editorial ("Six things the code does
 * while you're not looking"), so the words a buyer would actually search —
 * geofencing, time-based routing, bulk generation — appear nowhere the
 * extractor can attach them to the entity. Keep in sync with /features/;
 * every item here is visible on that page.
 */
export const FEATURE_LIST = [
  'Dynamic QR codes — change the destination without reprinting the code',
  'Smart redirects',
  'Bulk QR code generation',
  'GPS geofencing — route scans by the location they happen in',
  'Location-based content',
  'Multi-location routing',
  'Time-based routing — route scans by time of day or day of week',
  'Instant updates',
  'Campaign scheduling',
  'Advanced scan analytics with per-scan location and time',
  'Team collaboration',
  'Mobile-optimised scanning',
] as const;

/**
 * Meta descriptions for WordPress-driven pages whose Yoast description is empty.
 *
 * Without these, `seo?.description` is undefined and BaseLayout falls back to
 * `site.description` — which is why /features/, /faq/, /documentation/ and
 * /support/ all shipped the identical string "Dynamic QR codes with GPS
 * geofencing and time-based routing. Print the code once. Route it forever."
 * Four of the site's most commercially important pages were indistinguishable
 * to Google and produced identical SERP snippets.
 *
 * Keyed by WordPress slug. A Yoast description, when set, still wins — this is
 * a fallback, not an override, so editors keep control from the CMS.
 */
export const PAGE_DESCRIPTIONS: Record<string, string> = {
  features:
    'Every ScanFence feature in one place: GPS geofencing, time-based routing, ' +
    'scan limits, per-scan location and time analytics, bulk codes, and EU-hosted data.',
  faq:
    'Answers to common ScanFence questions — how geofenced QR codes work, GPS accuracy ' +
    'and fallback behaviour, scan limits, data retention, EU hosting, billing, and trials.',
  documentation:
    'ScanFence documentation: create a dynamic QR code, draw a geofence, set time-based ' +
    'routing rules and scan limits, then read the scan data. Step-by-step with examples.',
  support:
    'Get help with ScanFence — troubleshooting scans that route to the wrong destination, ' +
    'geofence accuracy, billing questions, and how to reach the team.',
  'about-raphael':
    'Raphael on why ScanFence exists: a printed QR code should not be frozen the moment ' +
    'it leaves the printer, and it should know where and when it was scanned.',
};

/**
 * Resolve a page description: Yoast first, curated fallback second, and finally
 * undefined so BaseLayout applies the site default.
 */
export function descriptionForPage(
  slug: string,
  yoastDescription: string | undefined,
): string | undefined {
  const trimmed = yoastDescription?.trim();
  if (trimmed) return trimmed;
  return PAGE_DESCRIPTIONS[slug];
}

/**
 * BreadcrumbList for a page, built from an ordered trail of crumbs.
 * Google uses this for the breadcrumb SERP treatment in place of a raw URL.
 */
export function breadcrumbSchema(
  crumbs: Array<{ name: string; url: string }>,
): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      item: c.url,
    })),
  };
}

/**
 * Build a single FAQPage from the Q&A pairs actually rendered on the page.
 *
 * The /faq/ page carries 31 question/answer pairs as Elementor nested
 * accordions (`<details><summary>Q</summary>…A…</details>`), but Yoast only
 * emits FAQPage entities for the three legacy FAQ *blocks* — nine questions,
 * split across three separate FAQPage objects on one URL. Two problems:
 * 22 visible answers are invisible to answer engines, and three FAQPage
 * entities on a single page is a duplicate-entity signal rather than one
 * coherent question set.
 *
 * Parsing the rendered markup instead of a hand-kept list means the schema
 * cannot drift from what a visitor sees — which is also Google's requirement
 * for FAQ structured data.
 */
export function faqSchemaFromAccordions(
  renderedHtml: string,
  canonicalUrl: string,
): object | undefined {
  const items: Array<{ q: string; a: string }> = [];

  for (const block of renderedHtml.match(/<details\b[^>]*>[\s\S]*?<\/details>/g) ?? []) {
    const split = block.split('</summary>');
    if (split.length < 2) continue;

    const q = plainText(split[0]);
    const a = plainText(split.slice(1).join('</summary>'));
    // A question with no answer body is not a citable pair; skip rather than
    // emit an Answer with an empty `text`, which fails validation.
    if (!q || !a) continue;
    items.push({ q, a });
  }

  if (items.length === 0) return undefined;

  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': `${canonicalUrl}#faq`,
    mainEntity: items.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  };
}

/**
 * Remove the inline FAQPage `<script type="application/ld+json">` tags that
 * WordPress ships inside the page body.
 *
 * They are emitted by the three legacy Elementor FAQ blocks and cover only
 * nine of the page's questions, so leaving them in place would put four
 * FAQPage entities on one URL — three partial, one complete. Stripping them
 * keeps the merged FAQPage from `faqSchemaFromAccordions` as the single
 * question set for the page. Visible accordion markup is untouched.
 */
export function stripInlineFaqSchema(renderedHtml: string): string {
  return renderedHtml.replace(
    /<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi,
    // Only FAQPage blocks are ours to remove — any other inline JSON-LD the
    // CMS emits stays, so this cannot silently drop unrelated structured data.
    (match, body: string) => (/"@type"\s*:\s*"FAQPage"/.test(body) ? '' : match),
  );
}

/**
 * Headings that introduce an ordered list describing what the *system* does,
 * not what the *reader* should do.
 *
 * /documentation/ section 3.3 is the only one: "How It Works: 1. User scans
 * the QR code 2. System detects the user's GPS coordinates …". Emitting that
 * as a HowTo would tell an answer engine those are instructions a person
 * follows, which is simply false. Listed for the three indexed locales; a
 * mechanism list under some other label in a noindexed locale would slip
 * through, which is why the check is a denylist on a noindexed surface rather
 * than an allowlist that would also drop legitimate unlabelled step lists.
 */
const MECHANISM_LIST_LABELS = [
  'how it works:',
  'so funktioniert es:',
  'hoe het werkt:',
];

/**
 * Build a HowTo per documented procedure on /documentation/.
 *
 * The page carries nine real step-by-step procedures — create a geofence,
 * create a geofenced QR code, invite a team member, export scan data — each
 * inside an accordion with an ordered list. Without HowTo entities the whole
 * manual is one undifferentiated WebPage, and a query like "how do I create a
 * geofenced QR code" has no procedure to match against.
 *
 * A caveat worth stating: Google retired the HowTo rich result in 2023, so
 * this buys nothing in the classic SERP. It is emitted for answer engines,
 * which parse the entity graph rather than render it.
 */
export function howToSchemasFromDetails(
  renderedHtml: string,
  canonicalUrl: string,
): object[] {
  const schemas: object[] = [];

  for (const block of renderedHtml.match(/<details\b[^>]*>[\s\S]*?<\/details>/g) ?? []) {
    const titleMatch = block.match(/title-text["'][^>]*>([\s\S]*?)<\/div>/);
    const name = titleMatch ? plainText(titleMatch[1]) : '';
    if (!name) continue;

    const listMatch = block.match(/<ol\b[^>]*>([\s\S]*?)<\/ol>/);
    if (!listMatch) continue;

    // The heading directly above the list says what the list is. Take the last
    // one before it, since that is the nearest preceding heading.
    const preceding = block.slice(0, listMatch.index);
    const headings = [...preceding.matchAll(/<h[1-6][^>]*>([\s\S]*?)<\/h[1-6]>/g)];
    const label = headings.length
      ? plainText(headings[headings.length - 1][1]).toLowerCase()
      : '';
    if (MECHANISM_LIST_LABELS.includes(label)) continue;

    const steps = [...listMatch[1].matchAll(/<li\b[^>]*>([\s\S]*?)<\/li>/g)]
      .map(m => plainText(m[1]))
      .filter(Boolean);
    // A single-step "procedure" is a sentence with a number in front of it.
    if (steps.length < 2) continue;

    const anchorId = block.match(/id=["']([^"']+)["']/)?.[1];
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      '@id': `${canonicalUrl}#howto-${slugify(name)}`,
      name,
      url: anchorId ? `${canonicalUrl}#${anchorId}` : canonicalUrl,
      publisher: { '@id': ORG_ID },
      step: steps.map((text, i) => ({
        '@type': 'HowToStep',
        position: i + 1,
        text,
      })),
    });
  }

  return schemas;
}

/** Lowercase, non-alphanumerics to single hyphens — for stable schema @ids. */
function slugify(value: string): string {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/** Strip tags and entities, collapse whitespace — the text an extractor sees. */
function plainText(html: string): string {
  return html
    // SVG icon markup carries no text but leaves stray whitespace behind.
    .replace(/<svg[\s\S]*?<\/svg>/g, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#0?39;|&apos;|&#8217;/g, "'")
    .replace(/\s+/g, ' ')
    .trim();
}
