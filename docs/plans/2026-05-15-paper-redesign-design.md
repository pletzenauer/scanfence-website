# ScanFence marketing site — paper redesign

**Date:** 2026-05-15
**Status:** Design approved, ready for implementation plan
**Scope:** Full visual + copy alignment of `scanfence.com` to the app's "d01" paper design language

## Why

The marketing site (`scanfence.com`) and the product app (`app.scanfence.com`) are currently two different brands. The app uses a deliberate editorial design language — a named "d01" system with light "paper" and dark "void" modes, sharp 0px corners, mixed Space Grotesk + Newsreader italic + JetBrains Mono typography, and a watch/perimeter voice ("Sign in. *Resume the watch.*"). The marketing site uses generic dark-indigo SaaS templating.

This redesign brings the marketing site fully into the app's paper aesthetic and editorial voice. Decisions were made between three flavors (full editorial paper / hybrid void / split paper-with-dark-hero) — **full editorial paper (B1)** was chosen — and three copy directions (full rewrite / hybrid / visuals-only) — **full rewrite (C1)** was chosen.

## Reference

- App login screenshot: `app-scanfence-landing.png` (in repo root, temporary; deleted before PR)
- Current marketing home screenshot: `scanfence-marketing-home.png` (same)
- Confirmed app font stack from Google Fonts links:
  - `Space+Grotesk:wght@400;500;600;700`
  - `Inter:wght@300;400;500;600;700`
  - `Geist:wght@400;500;600`
  - `JetBrains+Mono:wght@400;500`
  - `Newsreader:ital,wght@1,400` (italic 400 only)

## Section A — Foundations

### Design tokens

Paper mode is the marketing default. Void mode tokens stay defined behind `[data-theme="void"]` for future use.

```css
:root {
  /* Paper palette */
  --d01-paper:      #F1ECE0;
  --d01-paper-hi:   #F7F3E8;
  --d01-ink:        #101012;
  --d01-steel:      #5C5E63;
  --d01-mute:       #8A8B8E;
  --d01-rule:       #D8D2C2;
  --d01-rule-hard:  #B8B0A0;

  /* Accent */
  --d01-signal:     #1F7A3E;
  --d01-signal-bg:  #E2EFDF;
  --d01-vermil:     #B8412A;
  --d01-vermil-bg:  #F2DDD3;
  --d01-mustard:    #9C7820;
  --d01-mustard-bg: #F2E6CA;
  --d01-sky:        #3F627F;

  /* Type */
  --font-display: 'Space Grotesk', sans-serif;
  --font-serif:   'Newsreader', serif;        /* italic only */
  --font-body:    'Inter', sans-serif;
  --font-ui:      'Geist', 'Inter', sans-serif;
  --font-mono:    'JetBrains Mono', ui-monospace, monospace;

  /* Geometry */
  --radius: 0;
  --rule: 1px solid var(--d01-rule);
  --rule-hard: 1px solid var(--d01-rule-hard);

  /* Spacing — 4px base */
  --space-1: 4px;  --space-2: 8px;   --space-3: 12px;
  --space-4: 16px; --space-5: 24px;  --space-6: 32px;
  --space-7: 48px; --space-8: 64px;  --space-9: 96px;
  --space-10: 128px;

  --max-w: 1200px;
}
```

Hard rules:
- **No rounded corners** — `--radius: 0` everywhere.
- **No drop shadows** on cards or buttons.
- **No gradient backgrounds** on hero / sections.
- **No backdrop blur** on header.

### Type scale

| Token | Family | Weight | Size | Line-height | Use |
|---|---|---|---|---|---|
| `display-xl` | Space Grotesk | 500 | clamp(48px, 6vw, 80px) | 1.05 | Hero H1 |
| `display-lg` | Space Grotesk | 500 | clamp(36px, 4vw, 56px) | 1.1 | Section H2 |
| `display-md` | Space Grotesk | 500 | 32px | 1.15 | Sub-section H3 |
| `serif-accent` | Newsreader | 400 italic | matches sibling | matches | Italic phrase inside a heading |
| `body-lg` | Inter | 400 | 18px | 1.6 | Hero subtitle, intros |
| `body` | Inter | 400 | 16px | 1.65 | Default body |
| `ui` | Geist | 400/500 | 15px | 1.5 | Buttons, inputs |
| `eyebrow` | JetBrains Mono | 500 | 12px | 1, letter-spacing 0.12em | ALL-CAPS labels |
| `metadata` | JetBrains Mono | 400 | 11–12px | 1 | Footer status strip |

Heading weight is **500, not 800**. This is the single biggest visual delta from the current site.

### Component patterns

- **Buttons.** Two only.
  - **Primary** — solid `--d01-ink`, paper-hi text, sharp corners, Geist 500 15px, padding `12px 20px`, arrow " →" baked into label. Hover: background → `--d01-steel`, no transform.
  - **Ghost** — transparent, `1px solid var(--d01-rule-hard)`, ink text. Same shape.
- **Inputs.** Bottom-rule only (`border-bottom: 1px solid var(--d01-rule-hard)`), transparent bg, mono eyebrow label above. Focus → bottom rule swaps to `--d01-signal`.
- **Eyebrow.** JetBrains Mono ALL CAPS above every H2.
- **Card.** No shadow, no rounding. `background: var(--d01-paper-hi)`, `border: 1px solid var(--d01-rule)`, padding 32px. Hover → border → `--d01-rule-hard`.
- **Metadata strip.** Mono labels separated by ` · `, with `--rule` above/below.
- **Section divider.** `<hr>` with `--rule-hard`, full-bleed.
- **Link.** Underlined by default (offset 3px, thickness 1px), ink color. Hover → `--d01-signal`. No indigo anywhere.

### Voice principles (C1)

- Declarative. Short. Periods.
- Watch / perimeter / signal lexicon: *watches, fences, routes, holds, blocks, scans, reports, signals, perimeter, the watch, the receipt, the line, the fence*.
- Numbers over adjectives.
- Sentence case (except wordmark `ScanFence` and acronyms `SOC-2`, `EU`, `GPS`, `QR`).
- Every section H2 has one italic-serif phrase inside it.
- Microcopy: mono, terse. `30D · NO CARD`. `Start a plan →`.

## Section B — Page-by-page

### Home (`src/pages/index.astro`)

Section order:

1. Header
2. Hero — split: editorial copy left, live-receipt panel right
3. Metadata strip — full-bleed mono row under hero
4. The watch (features) — 6 items, no card chrome, hairline separators
5. The receipt — proof block with mock dashboard line + 4 mono stat tiles
6. One question (CTA)
7. Footer

**Hero copy:**

```
Eyebrow:   QR · GEOFENCED · TIME-AWARE
H1:        Every scan, on the perimeter.       (italic accent: "on the perimeter.")
Lede:      ScanFence is a dynamic QR platform with GPS geofencing and
           time-based routing. Print the code once. Route it forever.
           Watch what scanned, what blocked, what's next.
Primary:   Start a plan →
Ghost:     See the pricing
Helper:    30D · NO CARD
```

Right pane (`paper-hi` panel, hairline border): three sample scan rows in mono:

```
09:42  PARIS · ROUTED → menu/fr
09:43  BUDAPEST · BLOCKED · out-of-window
09:44  DUBLIN · ROUTED → menu/en
```

**The watch (features):**

```
Eyebrow:  THE WATCH
H2:       Six things the code does while you're not looking.
          (italic accent: "while you're not looking.")
```

Two-column on desktop, single column mobile. No icons. No cards. Each item separated by `--rule-hard`:

```
01  Dynamic codes
    Print once. Route forever. Repoint a code without reprinting.

02  GPS geofencing
    Geography is the rule. Scans inside the perimeter open one
    door; scans outside open another.

03  Time-based routing
    Different hour, different destination. The code reads the clock
    before it reads the visitor.

04  The receipt
    Every scan leaves one. Device, place, hour, outcome. No surprises.

05  A small crew
    Add the people who hold the keys. Role-based. Audit-clean.

06  No reprints
    Change the destination at 11:47. It lands at 11:47.
```

Numbers `01`–`06` in mono. Titles `display-md`. Bodies body-16.

**The receipt (new `Receipt.astro`):**

```
Eyebrow:  THE RECEIPT
H2:       We log it because you'll want to read it.
          (italic accent: "you'll want to read it.")
```

Mock terminal-style readout (mono, paper-hi background) of 5–7 minute rows. Below, 4 mono stat tiles:

```
12M SCANS · LAST 30D
99.97 UPTIME · 30D
<120MS P50 · ROUTING
EU · IRELAND
```

**One question (CTA):**

```
H2:      Print the code yet?
Body:    30 days. No card. Cancel anytime.
Primary: Start a plan →
Ghost:   Talk to us
```

### Contact (`src/pages/contact.astro`)

Two-pane (matches app login).

Left:
```
Eyebrow:  CONTACT
H1:       Send a signal.                  (italic accent: "a signal.")
Lede:     We read everything that lands. Replies usually within one
          business day. EU office, EU hours.
Metadata: EU · IRELAND   ·   Mon–Fri 09:00–17:00 CET
```

Right (form, bottom-rule inputs):
- `WORK EMAIL` — you@company.com
- `COMPANY` — optional
- `MESSAGE` — textarea, bottom-rule
- Submit: `Send →`

### WP-rendered pages — Features / Pricing / FAQ / Docs (`src/pages/[...slug].astro`)

Content stays in WordPress (Elementor). The `.wp-content` block in `global.css` is rewritten:

- H2 → `display-lg` (Space Grotesk 500), ink on paper.
- Elementor accordion (FAQ) → bottom-rule rows, mono `+`/`–` toggle, no card.
- Elementor forms → bottom-rule inputs, ink-solid submit with arrow.
- Tables → `--rule` hairlines, mono caps headers.
- Blockquotes → 3px left `--d01-signal` rule.
- `.page-header` → eyebrow (mono caps = slug), H1, optional italic accent. No gradient background.

If a hand-built Pricing page is later wanted, that's a separate task — this redesign keeps Pricing in WP and only restyles.

### Blog (`src/pages/blog/`)

- **Index** — vertical list, not card grid. Each post: mono date + category eyebrow, `display-md` headline, two-line dek, hairline below. Featured image 240px wide on the left, sharp corners.
- **Post** — editorial column. Post header: mono category eyebrow, `display-lg` H1 (italic accent allowed), mono byline + date strip. Featured image full-bleed within `--max-w`. Body uses `.wp-content` styling.
- **Pagination** — `← Previous   1 / 5   Next →` row, Geist + mono separator.
- **Category** — same vertical list as index.

### Header (`src/components/Header.astro`)

- Sticky, `--d01-paper-hi` background, single `--rule-hard` bottom border.
- No backdrop blur, no transparency.
- Logo: dark variant of the existing wordmark (or black square mark fallback) on paper.
- Nav links: Geist 14px ink. Active page → signal-green underline.
- Right side: `Sign in` text link + `Start a plan →` primary button.
- Mobile menu: paper background, full bleed, hairline-separated rows.

Nav order: `Home   Features   Pricing   FAQ   Docs   Blog   Contact`.

### Footer (`src/components/Footer.astro`)

Two rows:

```
Row 1:
  Left:   [black square mark]  ScanFence
  Middle: Codes that know where they are.  (italic accent: "where they are.")
  Right:  hello@scanfence.com  →

Row 2 (metadata strip, mono, --rule above):
  © 2026 SCANFENCE  ·  EU · IRELAND-1  ·  v2.4.1  ·  SOC-2 TYPE II  ·  Privacy  Terms
```

## Open assumptions

- **Logo dark variant.** Assume a black-on-paper version exists in `public/`. If not, fall back to a CSS-rendered black square mark + wordmark.
- **Newsreader italic license.** Google Fonts OFL — safe to ship.
- **WP content shapes.** I'll spot-check `cms.scanfence.com` Features / Pricing / FAQ once implementing.
- **SEO terms preserved.** Literal terms ("dynamic QR codes", "GPS geofencing", "time-based routing") live in meta description, hero lede paragraph, feature item names, and a `Product` structured-data block. Not the H1.
- **Temp research files.** `app-scanfence-landing.png`, `scanfence-marketing-home.png`, `.playwright-mcp/` artifacts are deleted before the PR.

## Verification + ship plan

1. Replace `global.css` tokens + base components in one commit (so the site moves together — no half-paper half-dark moment).
2. Rewrite `Hero.astro`, `Features.astro`, `CTA.astro` with new structure + copy.
3. Add `Receipt.astro`.
4. Update `Header.astro`, `Footer.astro`, `contact.astro`.
5. Rewrite `.wp-content` styling block in `global.css`.
6. Run dev server, screenshot every page at 1440 + 390 widths, compare side-by-side to the app login screenshot. Iterate.
7. Final screenshots in the PR description.

## Out of scope (this pass)

- Hand-rewriting Pricing / FAQ content (stays WP-driven, styling only).
- A new logo mark.
- Dark "void" mode for the marketing site (tokens defined, not used).
- Animation / motion design beyond simple hover state changes.
- New imagery, photography, or illustration commissioning.
