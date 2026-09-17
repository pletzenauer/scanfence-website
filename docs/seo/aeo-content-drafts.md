# AEO content drafts — for pasting into WordPress

The technical half of the answer-engine pass is done in code (schema, robots,
`llms.txt`, heading hierarchy). What is left cannot be fixed from this repo
without the frontend silently overriding the CMS, so it is drafted here
instead. Everything below is paste-ready; nothing is speculative about the
product — every number comes from `/pricing/` or `/documentation/` as they
stand today.

**Order of impact:** 1 (definition blocks) → 2 (comparison tables) →
3 (query-shaped H2s) → 4 (CMS bugs).

---

## 0. The voice tension, stated up front

ScanFence's headings are deliberately editorial — "Every scan, on the
perimeter.", "Print the code once. Route it forever." That voice is an asset
and none of this asks you to give it up.

But answer engines chunk a page by its headings and lift the first
self-contained paragraph that answers the query. An editorial heading carries
no query signal, and there is currently no sentence anywhere on the site that
plainly finishes *"A geofenced QR code is …"*. So a model asked that question
has nothing of yours to quote, however good the page is.

The resolution is not to flatten the voice. It is to let the H1 stay
editorial and put one deliberately plain paragraph underneath it. Plain prose
in the definition block, ScanFence voice everywhere else.

---

## 1. Definition blocks

Place each within the first 300 words of its page. Keep them boring — that is
the point. No hedging, no build-up, entity named in the first four words.

### `/` (homepage) — under the H1, above the metadata strip

> **A geofenced QR code is a QR code whose destination changes based on where
> it is scanned.** The printed pattern encodes a fixed short link; a GPS
> boundary decides what that link resolves to. Scans inside the boundary go
> one place, scans outside it go another. ScanFence adds the same logic for
> time — day of week, time of day, date range — so one printed code can serve
> a different destination in the morning than it does at night, and a
> different one at the depot than at the shop.

### `/features/` — under the H1

> **ScanFence is a dynamic QR code platform with GPS geofencing and
> time-based routing.** Every code is editable after printing: the
> destination lives in the redirect, not in the pattern, so changing where a
> code points never requires a reprint. Every scan is recorded with its
> location and timestamp, which is what separates the analytics from a scan
> counter.

### `/blog/what-is-gps-geofencing-and-how-can-it-transform-your-qr-code-strategy/`

> **GPS geofencing is a virtual boundary drawn around a real-world location.**
> When a QR code is scanned, the device reports its coordinates, and the
> system checks whether they fall inside the boundary before deciding where to
> send the visitor. A geofence is defined by a centre point and a radius in
> metres — in practice 50–100 m in urban areas where GPS is accurate,
> 100–300 m in suburban ones, and 300–1000 m in rural areas where it is not.

### `/blog/dynamic-vs-static-qr-codes/`

> **A static QR code encodes its destination directly in the printed pattern;
> a dynamic QR code encodes a short link that redirects.** That single
> difference is why a static code can never be changed after printing and a
> dynamic one can be changed at any time, and why only a dynamic code can be
> measured — the redirect is the point at which a scan can be counted.

---

## 2. Comparison tables

There is currently not one table on the site. "X vs Y" queries resolve to
tables more reliably than to any other format, and a clean two-column table
gets lifted close to verbatim.

### For `/blog/dynamic-vs-static-qr-codes/` and `/blog/static-vs-dynamic-qr-codes-whats-the-difference/`

| | Static QR code | Dynamic QR code |
|---|---|---|
| Where the destination lives | In the printed pattern | In a redirect the pattern points to |
| Change destination after printing | Not possible — requires a reprint | Yes, at any time |
| Scan tracking | None | Every scan, with time and location |
| Pattern density | Denser for long URLs | Constant, regardless of destination length |
| Location-based routing | Not possible | Yes |
| Time-based routing | Not possible | Yes |
| Works if the service is discontinued | Yes, permanently | No — the redirect must resolve |
| Best for | Permanent, unchanging links | Campaigns, menus, signage, anything measured |

That last row is a real trade-off and stating it plainly is worth more than
omitting it. Sources that concede a limitation get cited more, not less.

### For `/features/` or `/documentation/` — which routing mode to use

| If you need to… | Use | What decides the destination |
|---|---|---|
| Change where a printed code points | A dynamic code | You, whenever you edit it |
| Send visitors somewhere different depending on where they are | A geofence | GPS coordinates at scan time |
| Send visitors to the nearest of several branches | Multi-location routing | Distance to the closest centre point |
| Show a different destination by time of day or day of week | A time rule | Day, time range, and optional date range |
| Cap how many times a code can be used | A scan limit | Total scans against the limit |

When a geofence and a time rule both apply, the higher priority number wins,
and overlapping geofences resolve to the closest centre point. Worth saying on
the page — it is the most common real question and the answer is currently
buried in accordion 8.1.

---

## 3. Query-shaped H2s

Keep every H1 as it is. Add or rename one H2 per page so the entity is named
somewhere in the heading tree.

| Page | Keep as H1 | Add / rename an H2 to |
|---|---|---|
| `/` | Every scan, on the perimeter. | What a geofenced QR code does |
| `/features/` | Everything the code can do. | How ScanFence geofencing works |
| `/documentation/` | How it works. | How to create a geofenced QR code |
| `/faq/` | Questions, answered. | *(no change — the accordions are already query-shaped)* |

`/faq/` is the model to copy: its questions are phrased the way people
actually ask them, which is exactly why it was the easiest page on the site to
make citable.

---

## 4. CMS bugs to fix at source

Both are currently patched at build time in this repo. Fix them in WordPress
and the overrides in `src/lib/wordpress.ts` can be deleted.

1. **`/documentation/` step 1.1 says "GeoTrack".** "Visit the GeoTrack signup
   page at /signup" — a product name from before ScanFence. The July 2026
   translation pass carried it faithfully into all eleven locales, so it now
   reads "GeoTrack-Anmeldeseite", "aanmeldpagina van GeoTrack", and so on. It
   is the first instruction a new user reads.
   Patched by `fixLegacyProductName()`.

2. **The English `/documentation/` table-of-contents heading reads
   "Inhaltsverzeichnis".** Elementor's ToC widget renders its title in the
   WordPress install's language rather than the page's, so only the English
   source is affected — every translated copy is already correct.
   Patched by `relabelElementorToc()`.

3. **`/documentation/` uses `<h3>` for its ten top-level sections**, with no
   `<h2>` anywhere under the `<h1>`. Switching those Elementor heading widgets
   to H2 at source would let `normalizeHeadingLevels()` go away too.
