/**
 * Shared JSON-LD builders. Keep schema shapes in one place so the standalone
 * English home and the localized home in [locale]/[...path].astro stay in sync.
 *
 * `@id` values are stable across locales (they identify the entity, not the
 * URL) and are referenced by `@id` inside the graph — Google merges the
 * locale variants under the same brand.
 */

const SITE_URL = 'https://scanfence.com';
const ORG_ID = `${SITE_URL}/#organization`;
const SITE_ID = `${SITE_URL}/#website`;

/**
 * Brand-level social profiles. Empty by default — populate as channels go
 * live. Adding a wrong URL is worse than omitting `sameAs` entirely (Google
 * verifies these against the linked profile back-link).
 */
const SAME_AS: string[] = [];

interface HomeGraphArgs {
  homeUrl: string;
  description: string;
  inLanguage: string; // BCP-47, e.g. 'en', 'de', 'zh-CN'
}

export function homeGraph({ homeUrl, description, inLanguage }: HomeGraphArgs) {
  const organization: Record<string, unknown> = {
    '@type': 'Organization',
    '@id': ORG_ID,
    name: 'ScanFence',
    url: `${SITE_URL}/`,
    logo: {
      '@type': 'ImageObject',
      url: `${SITE_URL}/assets/scanfence-logo-black.png`,
      caption: 'ScanFence',
    },
    email: 'hello@scanfence.com',
    areaServed: 'EU',
  };
  if (SAME_AS.length > 0) organization.sameAs = SAME_AS;

  const website = {
    '@type': 'WebSite',
    '@id': SITE_ID,
    url: `${SITE_URL}/`,
    name: 'ScanFence',
    description,
    inLanguage,
    publisher: { '@id': ORG_ID },
  };

  const application = {
    '@type': 'SoftwareApplication',
    '@id': `${SITE_URL}/#software`,
    name: 'ScanFence',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    description,
    url: homeUrl,
    publisher: { '@id': ORG_ID },
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'USD',
      lowPrice: '4.99',
      highPrice: '44.99',
      offerCount: 3,
      availability: 'https://schema.org/InStock',
      url: `${SITE_URL}/pricing/`,
    },
  };

  return {
    '@context': 'https://schema.org',
    '@graph': [organization, website, application],
  };
}

export interface BreadcrumbItem {
  name: string;
  url?: string; // omit on the last item per Google guidance
}

export function breadcrumbList(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => {
      const entry: Record<string, unknown> = {
        '@type': 'ListItem',
        position: i + 1,
        name: item.name,
      };
      if (item.url) entry.item = item.url;
      return entry;
    }),
  };
}
