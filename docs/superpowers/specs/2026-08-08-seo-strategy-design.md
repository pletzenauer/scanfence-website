# ScanFence SEO strategy

**Date:** 2026-08-08
**Baseline:** 5 clicks, 2,770 impressions, average position 44.0 (GSC, 2026-05-07 → 2026-08-06)

## Baseline

Three months of Search Console data, web search only:

| Metric | Value |
|---|---|
| Clicks | 5 |
| Impressions | 2,770 |
| CTR | 0.18% |
| Average position | 44.0 |
| Queries at position ≤ 10 | 3 (max 1 impression each) |
| URLs in sitemap | 1,092 |

Traffic by country is English-first: US 1,380 impressions (50%), UK 266, Germany 154,
Netherlands 133. Devices: desktop 2,479 impressions, mobile 282.

## Diagnosis

### 1. Host canonicalization was broken

`http://scanfence.com/` and `https://www.scanfence.com/` both answered **200**. All four
host/protocol combinations served the full site, so 1,092 URLs were reachable as roughly
4,368. `rel=canonical` did not consolidate them — GSC recorded impressions against the
duplicates independently:

| Duplicate URL | Impressions |
|---|---|
| `http://…/blog/how-does-a-qr-code-work-step-by-step/` | 140 |
| `https://www…/blog/importance-of-qr-code-analytics/` | 37 |
| `https://www…/ar/blog/understanding-qr-code-analytics/` | 9 |

HSTS was already set but is irrelevant here: Googlebot does not use it for
canonicalization, and it says nothing about `www`.

### 2. Keyword cannibalization

70 English posts cover roughly 20 distinct intents. The worst pile-up is
"best QR code app for restaurants": six URLs, 729 combined impressions, one intent.
Google has no basis to pick a winner, so it ranks none of them well — the best of the six
sits at position 28.

### 3. The content targets the wrong market

The product is GPS-geofenced, time-routed QR codes. Roughly 60 of 70 posts target
generic restaurant QR queries, where the SERP belongs to Uniqode, QR Tiger, Bitly and
Flowcode. Impressions by theme:

| Theme | Impressions | Best avg position |
|---|---|---|
| QR analytics / tracking | 674 | 29–42 |
| Restaurant / menu | 835 | 45–66 |
| Geofencing | 93 | 60–72 |
| Dynamic vs static | 60 | 76 |

Restaurant queries have the most impressions and the worst positions. Analytics has
fewer impressions at markedly better positions, concentrated in a single page —
`/blog/best-qr-code-analytics-tools/`, 645 impressions at position 36.

### 4. The i18n rollout is actively harmful

The July 2026 rollout added 1,001 machine-translated URLs.

| Set | URLs with impressions | Impressions | Clicks | Weighted avg position |
|---|---|---|---|---|
| English | 60 | 2,114 | 5 | 40.2 |
| Translated | 148 | 780 | 1 | 52.3 |

In the week of 2026-07-30 — about four weeks after the deploy, as the translated set
finished indexing — sitewide impressions tripled to 565 while average position collapsed
from 44.1 to 54.6.

### 5. Smaller defects

- `/features/`, `/faq/`, `/documentation/` and `/support/` all emitted the identical
  site-default meta description, because their Yoast descriptions are empty in WordPress.
- Homepage `SoftwareApplication` schema declared `priceCurrency: EUR` with no price,
  contradicting `/pricing/`, which correctly declares USD 4.99–44.99.
- No `Organization` schema anywhere.
- Sitemap set `lastmod: new Date()`, stamping all 1,092 URLs with the build time on every
  deploy.

## Strategy

**Positioning: scan intelligence — QR analytics that know location and time.**

Analytics is the entry point because the demand already exists and the site already
half-ranks for it. Geofencing and time routing are the reason ScanFence wins those
comparisons rather than Bitly. The two are one story, not a compromise between two.

### Phase 1 — Stop the bleeding (done, this branch)

| Change | File |
|---|---|
| 301 `http`→`https`, `www`→non-`www` | `public/.htaccess` |
| `noindex,follow` on 9 locales; keep en, de, nl | `src/i18n/config.ts`, `src/layouts/BaseLayout.astro` |
| hreflang restricted to indexable locales | `src/i18n/t.ts` |
| Sitemap drops noindexed locales; `lastmod` removed | `astro.config.mjs` |
| Unique meta descriptions for the four WP pages | `src/lib/seo.ts`, `src/pages/[...slug].astro` |
| `Organization` schema sitewide | `src/lib/seo.ts`, `src/layouts/BaseLayout.astro` |
| Homepage offer: EUR-unpriced → USD 4.99–44.99 | `src/pages/index.astro`, `src/pages/[locale]/[...path].astro` |

Verified against the build: sitemap 1,092 → 273 URLs, zero noindexed locales leaked,
zero `lastmod`, four distinct descriptions, `robots` correct per locale.

**All 12 locales stay built and reachable.** The language switcher still links every one;
only the index signal changes. Re-enabling a locale is a one-line edit to
`INDEXED_LOCALES`, and a build-time assertion in `astro.config.mjs` fails if the two
copies of that list drift.

### Phase 2 — Consolidate

70 English posts → 27 survivors, 43 merged. Full per-URL plan with GSC figures and chosen
survivors: [`docs/seo/consolidation-map.csv`](../../seo/consolidation-map.csv).

Survivors were chosen by impressions first, position second. Three rules govern it:

- **Fold content in, do not delete.** Each merged post's unique material moves into its
  survivor before the 301 goes up.
- **Never redirect the site's best-positioned page.**
  `/blog/qr-code-case-study-in-restaurants/` sits at position 6.35 and is left untouched.
- **Order matters for J-how-qr-works.** Its 140 impressions currently land on the `http://`
  host, so Phase 1's redirect must be live and verified before that merge runs.

The six geofencing and time-routing use-case posts are all `KEEP`. They have zero
impressions not because they are weak but because nothing links to them; the fix is
internal links from the pillar, not deletion.

### Phase 3 — Beachhead

- Rebuild `/blog/best-qr-code-analytics-tools/` as the definitive analytics resource,
  absorbing the other four analytics posts. This is the single highest-leverage page on
  the site: 645 impressions at position 36, one rewrite from page 1–2.
- Add comparison pages. `beaconstac dynamic qr codes analytics` already ranks position 7
  with no page dedicated to it.

### Phase 4 — Moat

Geofencing pillar at `/blog/qr-code-geofencing-explained-a-complete-guide-for-business-owners/`,
with the six use-case posts as its cluster and reciprocal internal links throughout.

### Phase 5 — Links

Free QR generator with scan analytics. A free generator is the most reliable link-earning
asset in this category, and authority is the binding constraint once the structural
problems are gone.

### Phase 6 — Re-expand i18n

Re-index locales one at a time, only for pages whose English original ranks. Germany and
the Netherlands are the re-entry candidates on current data.

## Expected outcome

At 5 clicks per quarter on a near-zero-authority domain, Phases 1–2 stop losses rather
than produce gains. Position should improve before clicks do. Meaningful traffic is a
Phase 3–5 outcome on a 4–6 month horizon. Anyone promising faster than that on this
baseline is guessing.

## Known gaps

- **de/nl WP pages still share the default description.** `PAGE_DESCRIPTIONS` is
  English-only and applies to the default-locale route. Injecting English descriptions
  into German and Dutch pages would be worse than the duplication, so the fix is proper
  Yoast descriptions in WordPress, or translated entries in the map.
- **The `http`→`https` rule carries a small loop risk.** nginx fronts Apache on FlokiNET,
  so `%{HTTPS}` may read `off` on TLS requests; the rule accepts `X-Forwarded-Proto` as a
  second signal, but a proxy sending neither would loop. `.htaccess` documents the
  three-curl verification and the exact rollback. Verify immediately after the first
  deploy to `main`.
- **Category slug `/category/ressources/` is misspelled** (French spelling in an English
  URL). Not fixed here — it needs a WordPress slug change plus a redirect, and it carries
  no impressions, so it is low priority.
- **GSC export covered 3 months, not 6.** Sufficient for the consolidation decisions;
  a 6-month window would firm up the low-impression judgements in cluster M.
