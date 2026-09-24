/**
 * Sidebar of the help docs at /documentation/. Order here is the reading
 * order: the sidebar, the previous/next links and the start page all follow
 * it. Each slug is a Markdown file in src/pages/documentation/ (the empty
 * slug is index.md).
 */
export interface DocLink { slug: string; title: string }
export interface DocGroup { label: string; items: DocLink[] }

export const DOCS_NAV: DocGroup[] = [
  {
    label: 'Getting started',
    items: [
      { slug: '', title: 'Welcome' },
      { slug: 'quick-start', title: 'Quick start' },
      { slug: 'plans-and-limits', title: 'Plans and limits' },
    ],
  },
  {
    label: 'QR codes',
    items: [
      { slug: 'create-qr-codes', title: 'Create a QR code' },
      { slug: 'manage-qr-codes', title: 'Manage your codes' },
      { slug: 'time-based-rules', title: 'Time-based rules' },
      { slug: 'scan-limits', title: 'Scan limits' },
      { slug: 'bulk-upload', title: 'Bulk upload' },
    ],
  },
  {
    label: 'Location',
    items: [
      { slug: 'geofences', title: 'Geofences' },
      { slug: 'multi-location', title: 'Multi-location codes' },
      { slug: 'scanning', title: 'What scanners see' },
    ],
  },
  {
    label: 'Insights',
    items: [
      { slug: 'dashboard', title: 'Dashboard' },
      { slug: 'analytics', title: 'Analytics' },
      { slug: 'audit-log', title: 'Audit log' },
    ],
  },
  {
    label: 'Team and account',
    items: [
      { slug: 'team', title: 'Team and roles' },
      { slug: 'account-settings', title: 'Settings and billing' },
      { slug: 'troubleshooting', title: 'Troubleshooting' },
    ],
  },
];

export const docHref = (slug: string) => (slug ? `/documentation/${slug}/` : '/documentation/');

const FLAT = DOCS_NAV.flatMap(g => g.items.map(i => ({ ...i, group: g.label })));

/** Slug of the page at `pathname`, or null when it isn't a docs page. */
export function docSlugFor(pathname: string): string | null {
  const m = pathname.match(/^\/documentation\/?([^/]*)\/?$/);
  return m ? m[1] : null;
}

export function neighbours(slug: string) {
  const i = FLAT.findIndex(p => p.slug === slug);
  return {
    current: FLAT[i],
    prev: i > 0 ? FLAT[i - 1] : undefined,
    next: i >= 0 && i < FLAT.length - 1 ? FLAT[i + 1] : undefined,
  };
}
