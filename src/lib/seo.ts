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
