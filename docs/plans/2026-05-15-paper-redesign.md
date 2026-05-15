# Paper Redesign Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Migrate `scanfence.com` from generic dark-indigo SaaS styling to the app's "d01" paper aesthetic with editorial copy (decision B1 + C1).

**Architecture:** Single Astro 5 static site, headless WP at `cms.scanfence.com`. Tokens live in `src/styles/global.css`; presentation in `src/components/*.astro` and `src/layouts/*.astro`. WP-rendered pages stay WP-driven — only `.wp-content` CSS changes. Each task is one self-contained commit so the branch always builds.

**Tech Stack:** Astro 5, vanilla CSS (no Tailwind, no PostCSS), Google Fonts (Space Grotesk, Inter, Geist, JetBrains Mono, Newsreader), Playwright MCP for visual verification.

**Design reference:** [`docs/plans/2026-05-15-paper-redesign-design.md`](2026-05-15-paper-redesign-design.md) — the design doc has the full token palette, type scale, voice rules, and verbatim copy for every section.

---

## Phase 0 — Setup

### Task 0: Start dev server and baseline screenshots

**Files:** none

**Step 1:** Start the Astro dev server via preview tools (`preview_start`). Confirm it serves at the assigned port.

**Step 2:** Take baseline screenshots so we can compare each subsequent change:
- `preview_screenshot` of `/` at 1440×900 → save as `baseline-home-desktop.png`
- `preview_resize` to 390×844, screenshot → `baseline-home-mobile.png`
- Repeat for `/contact/`, `/blog/`, and one WP page (e.g. `/features/`).

**Step 3:** Save baselines to `.tmp/` (gitignored). Don't commit.

**Verify:** `preview_logs` shows clean Astro boot. No console errors in `preview_console_logs`.

---

## Phase 1 — Foundations

### Task 1: Swap Google Fonts to the d01 stack

**Files:**
- Modify: `src/layouts/BaseLayout.astro:30`

**Step 1:** Replace the existing single `<link>` for Inter + Space Grotesk with one that loads the full d01 stack. Drop the old families.

Current (line 30):
```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Space+Grotesk:wght@700;800&display=swap" rel="stylesheet">
```

Replace with:
```html
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&family=Geist:wght@400;500;600&family=JetBrains+Mono:wght@400;500&family=Newsreader:ital,wght@1,400&display=swap" rel="stylesheet">
```

**Verify:** `preview_eval` returns `getComputedStyle(document.body).fontFamily` and confirms Inter is loaded; `getComputedStyle(document.querySelector('h1')).fontFamily` shows Space Grotesk available.

**Commit:** `chore: load d01 font stack (Geist, JetBrains Mono, Newsreader italic)`

### Task 2: Replace design tokens and base resets in `global.css`

**Files:**
- Modify: `src/styles/global.css:1-79` (the `:root`, reset, html/body, h1-h6 base blocks)

**Step 1:** Replace lines 1–79 with the new token block from the design doc. Keep the file structure (comments as section dividers) so later tasks can find their sections.

New content for lines 1–79:
```css
/* ===== Design Tokens — d01 Paper ===== */
:root {
  /* Paper palette */
  --d01-paper:      #F1ECE0;
  --d01-paper-hi:   #F7F3E8;
  --d01-ink:        #101012;
  --d01-steel:      #5C5E63;
  --d01-mute:       #8A8B8E;
  --d01-rule:       #D8D2C2;
  --d01-rule-hard:  #B8B0A0;

  /* Accent (use sparingly) */
  --d01-signal:     #1F7A3E;
  --d01-signal-bg:  #E2EFDF;
  --d01-vermil:     #B8412A;
  --d01-vermil-bg:  #F2DDD3;
  --d01-mustard:    #9C7820;
  --d01-mustard-bg: #F2E6CA;
  --d01-sky:        #3F627F;

  /* Semantic aliases (preserve old variable names so legacy CSS still resolves
     while we migrate; remove in a later pass). */
  --color-bg:           var(--d01-paper);
  --color-bg-secondary: var(--d01-paper-hi);
  --color-surface:      var(--d01-paper-hi);
  --color-surface-hover:var(--d01-paper-hi);
  --color-text:         var(--d01-steel);
  --color-heading:      var(--d01-ink);
  --color-blue:         var(--d01-signal);
  --color-blue-hover:   var(--d01-ink);
  --color-blue-light:   var(--d01-signal-bg);
  --color-white:        var(--d01-paper-hi);
  --color-gray-100:     var(--d01-paper-hi);
  --color-gray-200:     var(--d01-rule);
  --color-gray-300:     var(--d01-rule-hard);
  --color-gray-400:     var(--d01-mute);
  --color-gray-500:     var(--d01-steel);
  --color-gray-600:     var(--d01-steel);
  --color-gray-900:     var(--d01-ink);

  /* Type */
  --font-display: 'Space Grotesk', sans-serif;
  --font-serif:   'Newsreader', serif;
  --font-body:    'Inter', sans-serif;
  --font-ui:      'Geist', 'Inter', sans-serif;
  --font-mono:    'JetBrains Mono', ui-monospace, monospace;
  --font-heading: var(--font-display);  /* alias for legacy */

  /* Geometry */
  --radius: 0;
  --radius-lg: 0;
  --radius-xl: 0;
  --rule:       1px solid var(--d01-rule);
  --rule-hard:  1px solid var(--d01-rule-hard);

  /* Shadow tokens — kept as no-op to avoid breaking legacy callers */
  --shadow-sm: none;
  --shadow:    none;
  --shadow-md: none;
  --shadow-lg: none;

  /* Spacing — 4px base */
  --space-1: 4px;  --space-2: 8px;   --space-3: 12px;
  --space-4: 16px; --space-5: 24px;  --space-6: 32px;
  --space-7: 48px; --space-8: 64px;  --space-9: 96px;
  --space-10: 128px;

  --max-width: 1200px;
  --header-height: 64px;
}

/* ===== Reset ===== */
*, *::before, *::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: var(--d01-paper);
}

body {
  font-family: var(--font-body);
  font-size: 16px;
  line-height: 1.65;
  color: var(--d01-ink);
  background-color: var(--d01-paper);
}

h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-display);
  color: var(--d01-ink);
  font-weight: 500;
  line-height: 1.1;
  letter-spacing: -0.01em;
}

a {
  color: var(--d01-ink);
  text-decoration: underline;
  text-decoration-thickness: 1px;
  text-underline-offset: 3px;
  transition: color 0.15s;
}

a:hover {
  color: var(--d01-signal);
}

img {
  max-width: 100%;
  height: auto;
  display: block;
}

ul {
  list-style: none;
}
```

**Step 2:** Note — we keep the legacy `--color-*` variable names as aliases pointing to the new palette so the still-unrewritten components don't break before later tasks rewrite them.

**Verify:**
- `preview_eval`: `getComputedStyle(document.body).backgroundColor` returns `rgb(241, 236, 224)` (paper).
- `preview_screenshot` of `/` — page is cream now, not navy. It will look broken, with old indigo accents on cream backgrounds. That's expected at this checkpoint.

**Commit:** `feat(tokens): switch to d01 paper palette with legacy aliases`

### Task 3: Add utility classes and rewrite buttons/inputs

**Files:**
- Modify: `src/styles/global.css:81-153` (`.container`, `.section`, `.text-center`, `.text-blue`, `.btn-*` blocks)

**Step 1:** Replace lines 81–153 with:
```css
/* ===== Utilities ===== */
.container {
  width: 100%;
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 24px;
}

.section {
  padding: var(--space-9) 0;
}

.section + .section {
  border-top: var(--rule);
}

.text-center { text-align: center; }
.text-blue   { color: var(--d01-signal); }

.eyebrow {
  font-family: var(--font-mono);
  font-size: 12px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: var(--d01-signal);
  line-height: 1;
  display: inline-block;
  margin: 0 0 var(--space-4);
}

.eyebrow--mute  { color: var(--d01-mute); }
.eyebrow--steel { color: var(--d01-steel); }
.eyebrow--ink   { color: var(--d01-ink); }

.serif-accent {
  font-family: var(--font-serif);
  font-style: italic;
  font-weight: 400;
}

.rule       { border-top: var(--rule);      margin: 0; }
.rule-hard  { border-top: var(--rule-hard); margin: 0; }

.metadata-strip {
  font-family: var(--font-mono);
  font-size: 12px;
  letter-spacing: 0.06em;
  color: var(--d01-mute);
  text-transform: uppercase;
  border-top: var(--rule);
  border-bottom: var(--rule);
  padding: var(--space-4) 0;
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-5);
  justify-content: space-between;
}

.metadata-strip span { white-space: nowrap; }
.metadata-strip strong {
  color: var(--d01-ink);
  font-weight: 500;
  margin-left: var(--space-2);
}

/* ===== Buttons ===== */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 12px 20px;
  font-family: var(--font-ui);
  font-size: 15px;
  font-weight: 500;
  border-radius: 0;
  border: 1px solid transparent;
  cursor: pointer;
  transition: background 0.15s, color 0.15s, border-color 0.15s;
  text-decoration: none;
  line-height: 1.4;
  letter-spacing: 0;
}

.btn-primary {
  background: var(--d01-ink);
  color: var(--d01-paper-hi);
  border-color: var(--d01-ink);
}

.btn-primary:hover {
  background: var(--d01-steel);
  border-color: var(--d01-steel);
  color: var(--d01-paper-hi);
}

.btn-ghost,
.btn-outline {
  background: transparent;
  color: var(--d01-ink);
  border-color: var(--d01-rule-hard);
}

.btn-ghost:hover,
.btn-outline:hover {
  border-color: var(--d01-ink);
  color: var(--d01-ink);
  background: transparent;
}

.btn-lg {
  padding: 14px 24px;
  font-size: 15px;
}

.btn-nav {
  padding: 8px 16px;
  font-size: 13px;
  letter-spacing: 0.04em;
}
```

**Verify:**
- `preview_screenshot` of `/` — buttons are now solid black with paper text and sharp corners. Old "View Pricing" outline button has cream/ink border, no indigo.

**Commit:** `feat(global): paper utilities, eyebrow, metadata strip, ink buttons`

---

## Phase 2 — Layout chrome

### Task 4: Rewrite Header

**Files:**
- Modify: `src/components/Header.astro` (full rewrite of markup; logo path change)
- Modify: `src/styles/global.css:155-223` (the `.header*` block)

**Step 1:** Rewrite `src/components/Header.astro`:

```astro
---
const path = Astro.url.pathname;
const isActive = (href: string) => {
  if (href === '/') return path === '/';
  return path.startsWith(href);
};
const nav = [
  { href: '/', label: 'Home' },
  { href: '/features/', label: 'Features' },
  { href: '/pricing/', label: 'Pricing' },
  { href: '/faq/', label: 'FAQ' },
  { href: '/documentation/', label: 'Docs' },
  { href: '/blog/', label: 'Blog' },
  { href: '/contact/', label: 'Contact' },
];
---

<header class="header">
  <div class="container">
    <a href="/" class="header-logo" aria-label="ScanFence — home">
      <span class="header-logo-mark" aria-hidden="true"></span>
      <span class="header-logo-text">ScanFence</span>
    </a>

    <nav class="header-nav" aria-label="Primary">
      {nav.map(item => (
        <a href={item.href} class:list={[{ 'is-active': isActive(item.href) }]}>{item.label}</a>
      ))}
    </nav>

    <div class="header-actions">
      <a href="https://app.scanfence.com/login" class="header-link">Sign in</a>
      <a href="https://app.scanfence.com/signup" class="btn btn-primary btn-nav">Start a plan →</a>
    </div>

    <button class="mobile-toggle" aria-label="Toggle menu" id="menuToggle">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
      </svg>
    </button>
  </div>
</header>

<div class="mobile-menu" id="mobileMenu">
  {nav.map(item => (
    <a href={item.href} class:list={[{ 'is-active': isActive(item.href) }]}>{item.label}</a>
  ))}
  <hr class="rule-hard" />
  <a href="https://app.scanfence.com/login">Sign in</a>
  <a href="https://app.scanfence.com/signup" class="btn btn-primary">Start a plan →</a>
</div>

<script>
  const menuToggle = document.getElementById('menuToggle');
  const mobileMenu = document.getElementById('mobileMenu');
  if (menuToggle && mobileMenu) {
    let isOpen = false;
    menuToggle.addEventListener('click', () => {
      isOpen = !isOpen;
      mobileMenu.classList.toggle('active', isOpen);
      const path = menuToggle.querySelector('svg path');
      if (path) {
        path.setAttribute('d', isOpen
          ? 'M6 18L18 6M6 6l12 12'
          : 'M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
        );
      }
    });
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        isOpen = false;
        mobileMenu.classList.remove('active');
        const path = menuToggle.querySelector('svg path');
        if (path) path.setAttribute('d', 'M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5');
      });
    });
  }
</script>
```

**Step 2:** Replace `src/styles/global.css:155-223` with the new header block:

```css
/* ===== Header ===== */
.header {
  position: sticky;
  top: 0;
  z-index: 100;
  background: var(--d01-paper-hi);
  border-bottom: var(--rule-hard);
  height: var(--header-height);
}

.header .container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  gap: var(--space-6);
}

.header-logo {
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  color: var(--d01-ink);
}

.header-logo:hover { color: var(--d01-ink); }

.header-logo-mark {
  display: inline-block;
  width: 20px;
  height: 20px;
  background: var(--d01-ink);
  position: relative;
}

.header-logo-mark::after {
  content: '';
  position: absolute;
  inset: 4px;
  background: var(--d01-paper-hi);
}

.header-logo-text {
  font-family: var(--font-mono);
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.header-nav {
  display: flex;
  align-items: center;
  gap: var(--space-5);
}

.header-nav a {
  color: var(--d01-steel);
  font-family: var(--font-ui);
  font-size: 14px;
  font-weight: 500;
  text-decoration: none;
  padding: 4px 0;
  border-bottom: 1px solid transparent;
}

.header-nav a:hover {
  color: var(--d01-ink);
}

.header-nav a.is-active {
  color: var(--d01-ink);
  border-bottom-color: var(--d01-signal);
}

.header-actions {
  display: flex;
  align-items: center;
  gap: var(--space-4);
}

.header-link {
  color: var(--d01-steel);
  font-family: var(--font-ui);
  font-size: 14px;
  font-weight: 500;
  text-decoration: none;
}

.header-link:hover { color: var(--d01-ink); }

.mobile-toggle {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 6px;
  color: var(--d01-ink);
}

.mobile-toggle svg { width: 22px; height: 22px; }

/* ===== Mobile Nav ===== */
.mobile-menu {
  display: none;
  position: fixed;
  top: var(--header-height);
  left: 0;
  right: 0;
  bottom: 0;
  background: var(--d01-paper);
  z-index: 99;
  padding: var(--space-5);
  flex-direction: column;
  gap: 2px;
  overflow-y: auto;
}

.mobile-menu.active { display: flex; }

.mobile-menu a {
  color: var(--d01-ink);
  font-family: var(--font-ui);
  font-size: 16px;
  font-weight: 500;
  text-decoration: none;
  padding: 14px 0;
  border-bottom: var(--rule);
  display: block;
}

.mobile-menu a.is-active {
  color: var(--d01-signal);
}

.mobile-menu .btn { margin-top: var(--space-4); }
.mobile-menu hr { margin: var(--space-4) 0; }
```

**Verify:** `preview_screenshot` of `/` — header is paper-hi, ink wordmark, signal-green underline on active page, ink-solid "Start a plan →" button on the right. Resize to 390 wide → mobile toggle appears, nav hides.

**Commit:** `feat(header): editorial paper header with mono wordmark`

### Task 5: Rewrite Footer

**Files:**
- Modify: `src/components/Footer.astro`
- Modify: `src/styles/global.css:430-462` (the `.footer*` block)

**Step 1:** Replace `src/components/Footer.astro` with:

```astro
---
const year = new Date().getFullYear();
---
<footer class="footer">
  <div class="container">
    <div class="footer-top">
      <a href="/" class="footer-logo" aria-label="ScanFence — home">
        <span class="footer-logo-mark" aria-hidden="true"></span>
        <span class="footer-logo-text">ScanFence</span>
      </a>
      <p class="footer-tagline">
        Codes that know <span class="serif-accent">where they are.</span>
      </p>
      <a href="mailto:hello@scanfence.com" class="footer-email">hello@scanfence.com →</a>
    </div>
    <div class="footer-meta metadata-strip">
      <span>© {year} ScanFence</span>
      <span>EU · IRELAND-1</span>
      <span>v2.4.1</span>
      <span>SOC-2 TYPE II</span>
      <span><a href="/privacy/">Privacy</a> · <a href="/terms/">Terms</a></span>
    </div>
  </div>
</footer>
```

**Step 2:** Replace `src/styles/global.css:430-462`:

```css
/* ===== Footer ===== */
.footer {
  background: var(--d01-paper);
  color: var(--d01-steel);
  padding: var(--space-8) 0 var(--space-6);
  border-top: var(--rule-hard);
}

.footer .container {
  display: flex;
  flex-direction: column;
  gap: var(--space-6);
}

.footer-top {
  display: flex;
  align-items: center;
  gap: var(--space-6);
  flex-wrap: wrap;
  justify-content: space-between;
}

.footer-logo {
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  color: var(--d01-ink);
}

.footer-logo-mark {
  display: inline-block;
  width: 22px;
  height: 22px;
  background: var(--d01-ink);
  position: relative;
}

.footer-logo-mark::after {
  content: '';
  position: absolute;
  inset: 5px;
  background: var(--d01-paper);
}

.footer-logo-text {
  font-family: var(--font-mono);
  font-size: 14px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.footer-tagline {
  font-family: var(--font-display);
  font-size: 20px;
  font-weight: 500;
  color: var(--d01-ink);
  flex: 1 1 280px;
  text-align: center;
}

.footer-email {
  font-family: var(--font-ui);
  font-size: 14px;
  color: var(--d01-ink);
  text-decoration: none;
}

.footer-email:hover { color: var(--d01-signal); }

.footer-meta a {
  color: var(--d01-mute);
  text-decoration: none;
}

.footer-meta a:hover { color: var(--d01-ink); }

@media (max-width: 640px) {
  .footer-top { flex-direction: column; align-items: flex-start; text-align: left; }
  .footer-tagline { text-align: left; }
}
```

**Verify:** `preview_screenshot` of `/` (scrolled to bottom) — footer has wordmark left, "Codes that know *where they are.*" with italic Newsreader, email right; bottom strip is mono uppercase with hairline divider.

**Commit:** `feat(footer): two-row editorial footer with mono metadata strip`

---

## Phase 3 — Home

### Task 6: Rewrite Hero

**Files:**
- Modify: `src/components/Hero.astro`
- Modify: `src/styles/global.css:225-302` (the `.hero*` block)

**Step 1:** Replace `src/components/Hero.astro`:

```astro
---
const scans = [
  { time: '09:42', city: 'PARIS',    state: 'ROUTED → menu/fr',         tone: 'signal' },
  { time: '09:43', city: 'BUDAPEST', state: 'BLOCKED · out-of-window',  tone: 'vermil' },
  { time: '09:44', city: 'DUBLIN',   state: 'ROUTED → menu/en',         tone: 'signal' },
  { time: '09:45', city: 'LYON',     state: 'ROUTED → menu/fr',         tone: 'signal' },
  { time: '09:46', city: 'VIENNA',   state: 'ROUTED → menu/de',         tone: 'signal' },
];
---

<section class="hero" id="hero">
  <div class="container hero-grid">
    <div class="hero-copy">
      <span class="eyebrow">QR · GEOFENCED · TIME-AWARE</span>
      <h1>
        Every scan,<br />
        <span class="serif-accent">on the perimeter.</span>
      </h1>
      <p class="hero-lede">
        ScanFence is a dynamic QR platform with GPS geofencing and time-based
        routing. Print the code once. Route it forever. Watch what scanned,
        what blocked, what's next.
      </p>
      <div class="hero-cta">
        <a href="https://app.scanfence.com/signup" class="btn btn-primary btn-lg">Start a plan →</a>
        <a href="/pricing/" class="btn btn-ghost btn-lg">See the pricing</a>
      </div>
      <p class="hero-note">30D · NO CARD</p>
    </div>

    <aside class="hero-receipt" aria-label="Live scan receipt sample">
      <header class="hero-receipt-header">
        <span class="eyebrow eyebrow--mute">LIVE · SAMPLE</span>
        <span class="hero-receipt-dot" aria-hidden="true"></span>
      </header>
      <ul class="hero-receipt-list">
        {scans.map(s => (
          <li class={`hero-receipt-row hero-receipt-row--${s.tone}`}>
            <span class="hero-receipt-time">{s.time}</span>
            <span class="hero-receipt-city">{s.city}</span>
            <span class="hero-receipt-state">{s.state}</span>
          </li>
        ))}
      </ul>
      <footer class="hero-receipt-footer">
        <span>EU · IRELAND-1</span>
        <span>P50 · 117MS</span>
      </footer>
    </aside>
  </div>
</section>
```

**Step 2:** Replace `src/styles/global.css:225-302` with:

```css
/* ===== Hero ===== */
.hero {
  padding: var(--space-9) 0 var(--space-8);
  background: var(--d01-paper);
  border-bottom: var(--rule-hard);
  position: relative;
}

.hero-grid {
  display: grid;
  grid-template-columns: minmax(0, 1.15fr) minmax(0, 1fr);
  gap: var(--space-8);
  align-items: start;
}

.hero-copy h1 {
  font-size: clamp(48px, 6vw, 80px);
  font-weight: 500;
  line-height: 1.02;
  margin-bottom: var(--space-5);
  letter-spacing: -0.02em;
}

.hero-copy h1 .serif-accent {
  display: inline-block;
  letter-spacing: -0.01em;
}

.hero-lede {
  font-size: 18px;
  color: var(--d01-steel);
  max-width: 560px;
  line-height: 1.55;
  margin-bottom: var(--space-6);
}

.hero-cta {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-3);
  margin-bottom: var(--space-4);
}

.hero-note {
  font-family: var(--font-mono);
  font-size: 12px;
  letter-spacing: 0.1em;
  color: var(--d01-mute);
  text-transform: uppercase;
}

/* Receipt panel */
.hero-receipt {
  background: var(--d01-paper-hi);
  border: var(--rule-hard);
  padding: var(--space-5);
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
  font-family: var(--font-mono);
  font-size: 13px;
  color: var(--d01-steel);
}

.hero-receipt-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: var(--rule);
  padding-bottom: var(--space-3);
}

.hero-receipt-dot {
  width: 8px;
  height: 8px;
  border-radius: 0;
  background: var(--d01-signal);
  display: inline-block;
  box-shadow: 0 0 0 0 var(--d01-signal);
  animation: hero-pulse 1.6s ease-out infinite;
}

@keyframes hero-pulse {
  0%   { box-shadow: 0 0 0 0    rgba(31, 122, 62, 0.35); }
  100% { box-shadow: 0 0 0 12px rgba(31, 122, 62, 0);    }
}

.hero-receipt-list {
  display: flex;
  flex-direction: column;
  gap: 0;
}

.hero-receipt-row {
  display: grid;
  grid-template-columns: 60px 100px 1fr;
  gap: var(--space-3);
  padding: 10px 0;
  border-bottom: var(--rule);
  line-height: 1.2;
}

.hero-receipt-row:last-child { border-bottom: none; }

.hero-receipt-time { color: var(--d01-mute); }
.hero-receipt-city { color: var(--d01-ink); font-weight: 500; }
.hero-receipt-state { color: var(--d01-steel); }
.hero-receipt-row--vermil .hero-receipt-state { color: var(--d01-vermil); }

.hero-receipt-footer {
  display: flex;
  justify-content: space-between;
  border-top: var(--rule);
  padding-top: var(--space-3);
  color: var(--d01-mute);
  font-size: 11px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

@media (max-width: 900px) {
  .hero { padding: var(--space-7) 0 var(--space-7); }
  .hero-grid { grid-template-columns: 1fr; gap: var(--space-6); }
  .hero-copy h1 { font-size: clamp(40px, 9vw, 56px); }
}
```

**Verify:** `preview_screenshot` of `/` — hero is two-column: editorial H1 left with italic "on the perimeter.", mono receipt panel right with three scan rows. Resize to 390 → stacks vertically. No gradient, no badge with circle SVG.

**Commit:** `feat(hero): editorial paper hero with live receipt panel`

### Task 7: Rewrite Features as numbered list

**Files:**
- Modify: `src/components/Features.astro`
- Modify: `src/styles/global.css:304-390` (the `.features*` and `.feature-card*` blocks)

**Step 1:** Replace `src/components/Features.astro`:

```astro
---
const items = [
  { n: '01', title: 'Dynamic codes',
    body: 'Print once. Route forever. Repoint a code without reprinting.' },
  { n: '02', title: 'GPS geofencing',
    body: 'Geography is the rule. Scans inside the perimeter open one door; scans outside open another.' },
  { n: '03', title: 'Time-based routing',
    body: "Different hour, different destination. The code reads the clock before it reads the visitor." },
  { n: '04', title: 'The receipt',
    body: 'Every scan leaves one. Device, place, hour, outcome. No surprises.' },
  { n: '05', title: 'A small crew',
    body: 'Add the people who hold the keys. Role-based. Audit-clean.' },
  { n: '06', title: 'No reprints',
    body: "Change the destination at 11:47. It lands at 11:47." },
];
---

<section class="features section" id="features">
  <div class="container">
    <header class="features-header">
      <span class="eyebrow">THE WATCH</span>
      <h2>
        Six things the code does<br />
        <span class="serif-accent">while you're not looking.</span>
      </h2>
    </header>

    <ul class="features-list">
      {items.map(item => (
        <li class="features-item">
          <span class="features-num">{item.n}</span>
          <div class="features-body">
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </div>
        </li>
      ))}
    </ul>
  </div>
</section>
```

**Step 2:** Replace `src/styles/global.css:304-390`:

```css
/* ===== Features ===== */
.features {
  background: var(--d01-paper);
}

.features-header {
  margin-bottom: var(--space-8);
  max-width: 720px;
}

.features-header h2 {
  font-size: clamp(36px, 4vw, 56px);
  font-weight: 500;
  line-height: 1.05;
  letter-spacing: -0.015em;
}

.features-list {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0;
  border-top: var(--rule-hard);
  border-left: var(--rule-hard);
}

.features-item {
  display: grid;
  grid-template-columns: 56px 1fr;
  gap: var(--space-4);
  padding: var(--space-6);
  border-right: var(--rule-hard);
  border-bottom: var(--rule-hard);
  background: var(--d01-paper);
  align-items: start;
}

.features-num {
  font-family: var(--font-mono);
  font-size: 13px;
  color: var(--d01-mute);
  letter-spacing: 0.04em;
  padding-top: 6px;
}

.features-body h3 {
  font-family: var(--font-display);
  font-weight: 500;
  font-size: 24px;
  margin-bottom: var(--space-2);
  color: var(--d01-ink);
}

.features-body p {
  font-family: var(--font-body);
  font-size: 16px;
  color: var(--d01-steel);
  line-height: 1.55;
  max-width: 48ch;
}

@media (max-width: 768px) {
  .features-list { grid-template-columns: 1fr; }
}
```

**Verify:** `preview_screenshot` of `/` — features section is a 2-column grid (1-col on mobile) of 6 numbered items with hairlines between, no icon boxes, no shadows, no rounded corners. Numbers `01`–`06` in JetBrains Mono.

**Commit:** `feat(features): numbered editorial list with hairline grid`

### Task 8: Add Receipt proof component

**Files:**
- Create: `src/components/Receipt.astro`
- Modify: `src/styles/global.css` — append a new `/* ===== Receipt ===== */` block at end of file (before the responsive media queries; insert directly after the features styles)

**Step 1:** Create `src/components/Receipt.astro`:

```astro
---
const log = [
  { t: '09:42:11', city: 'PARIS',    info: 'iOS · Safari',     state: 'ROUTED → menu/fr',         tone: 'signal' },
  { t: '09:42:34', city: 'BERLIN',   info: 'Android · Chrome', state: 'ROUTED → menu/de',         tone: 'signal' },
  { t: '09:43:02', city: 'BUDAPEST', info: 'iOS · Safari',     state: 'BLOCKED · out-of-window',  tone: 'vermil' },
  { t: '09:43:18', city: 'DUBLIN',   info: 'iOS · Safari',     state: 'ROUTED → menu/en',         tone: 'signal' },
  { t: '09:43:51', city: 'LISBON',   info: 'Android · Chrome', state: 'ROUTED → menu/pt',         tone: 'signal' },
  { t: '09:44:09', city: 'OSLO',     info: 'iOS · Safari',     state: 'BLOCKED · outside-fence',  tone: 'vermil' },
  { t: '09:44:33', city: 'VIENNA',   info: 'Android · Chrome', state: 'ROUTED → menu/de',         tone: 'signal' },
];

const stats = [
  { label: 'SCANS · LAST 30D',    value: '12.4M'  },
  { label: 'UPTIME · 30D',         value: '99.97%' },
  { label: 'P50 · ROUTING',        value: '<120ms' },
  { label: 'DATA RESIDENCY',       value: 'EU · IRELAND' },
];
---

<section class="receipt section">
  <div class="container">
    <header class="receipt-header">
      <span class="eyebrow">THE RECEIPT</span>
      <h2>
        We log it because<br />
        <span class="serif-accent">you'll want to read it.</span>
      </h2>
    </header>

    <div class="receipt-readout" role="figure" aria-label="Sample scan log">
      <div class="receipt-readout-head">
        <span>TIME</span>
        <span>LOCATION</span>
        <span>CLIENT</span>
        <span>OUTCOME</span>
      </div>
      {log.map(row => (
        <div class={`receipt-readout-row receipt-readout-row--${row.tone}`}>
          <span>{row.t}</span>
          <span>{row.city}</span>
          <span>{row.info}</span>
          <span>{row.state}</span>
        </div>
      ))}
    </div>

    <ul class="receipt-stats">
      {stats.map(s => (
        <li>
          <span class="receipt-stats-value">{s.value}</span>
          <span class="receipt-stats-label">{s.label}</span>
        </li>
      ))}
    </ul>
  </div>
</section>
```

**Step 2:** Append to `src/styles/global.css` (insert after the `.features-body p` block):

```css
/* ===== Receipt (proof block) ===== */
.receipt { background: var(--d01-paper); }

.receipt-header {
  margin-bottom: var(--space-7);
  max-width: 720px;
}

.receipt-header h2 {
  font-size: clamp(36px, 4vw, 56px);
  font-weight: 500;
  line-height: 1.05;
  letter-spacing: -0.015em;
}

.receipt-readout {
  background: var(--d01-paper-hi);
  border: var(--rule-hard);
  font-family: var(--font-mono);
  font-size: 12.5px;
  color: var(--d01-steel);
  margin-bottom: var(--space-6);
  overflow-x: auto;
}

.receipt-readout-head,
.receipt-readout-row {
  display: grid;
  grid-template-columns: 110px 130px 200px 1fr;
  gap: var(--space-4);
  padding: 10px var(--space-5);
  align-items: center;
  min-width: 720px;
}

.receipt-readout-head {
  background: var(--d01-paper);
  color: var(--d01-mute);
  letter-spacing: 0.08em;
  font-size: 11px;
  border-bottom: var(--rule-hard);
}

.receipt-readout-row {
  border-bottom: var(--rule);
}

.receipt-readout-row:last-child { border-bottom: none; }

.receipt-readout-row span:nth-child(2) { color: var(--d01-ink); font-weight: 500; }
.receipt-readout-row--vermil span:last-child { color: var(--d01-vermil); }
.receipt-readout-row--signal span:last-child { color: var(--d01-signal); }

.receipt-stats {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 0;
  border-top: var(--rule-hard);
  border-left: var(--rule-hard);
}

.receipt-stats li {
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: var(--space-5);
  border-right: var(--rule-hard);
  border-bottom: var(--rule-hard);
  background: var(--d01-paper);
}

.receipt-stats-value {
  font-family: var(--font-display);
  font-weight: 500;
  font-size: 28px;
  color: var(--d01-ink);
  letter-spacing: -0.01em;
}

.receipt-stats-label {
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--d01-mute);
}

@media (max-width: 768px) {
  .receipt-stats { grid-template-columns: repeat(2, minmax(0, 1fr)); }
}
```

**Verify:** Will only show after Task 10 (when component is wired into index). For now, `astro check` builds without TS errors.

**Commit:** `feat(receipt): proof block component with terminal readout and stats`

### Task 9: Rewrite CTA

**Files:**
- Modify: `src/components/CTA.astro`
- Modify: `src/styles/global.css:392-428` (the `.cta*` block)

**Step 1:** Replace `src/components/CTA.astro`:

```astro
---
---
<section class="cta">
  <div class="container">
    <div class="cta-card">
      <span class="eyebrow eyebrow--steel">ONE QUESTION</span>
      <h2>Print the code yet?</h2>
      <p>30 days. No card. Cancel anytime.</p>
      <div class="cta-buttons">
        <a href="https://app.scanfence.com/signup" class="btn btn-primary btn-lg">Start a plan →</a>
        <a href="/contact/" class="btn btn-ghost btn-lg">Talk to us</a>
      </div>
    </div>
  </div>
</section>
```

**Step 2:** Replace `src/styles/global.css:392-428`:

```css
/* ===== CTA ===== */
.cta {
  padding: var(--space-9) 0;
  background: var(--d01-paper);
  border-top: var(--rule-hard);
}

.cta-card {
  background: var(--d01-paper-hi);
  border: var(--rule-hard);
  padding: var(--space-8) var(--space-7);
  text-align: center;
  max-width: 820px;
  margin: 0 auto;
}

.cta-card .eyebrow {
  margin-bottom: var(--space-4);
  color: var(--d01-steel);
}

.cta-card h2 {
  font-family: var(--font-display);
  font-size: clamp(36px, 4.5vw, 56px);
  font-weight: 500;
  line-height: 1.05;
  letter-spacing: -0.02em;
  margin-bottom: var(--space-4);
}

.cta-card p {
  font-family: var(--font-mono);
  font-size: 13px;
  color: var(--d01-mute);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin: 0 auto var(--space-6);
}

.cta-buttons {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-3);
  flex-wrap: wrap;
}
```

**Verify:** After Task 10 wiring, screenshot shows the centered CTA card with sharp corners, hairline border, ink-solid button + ghost button.

**Commit:** `feat(cta): paper one-question CTA card`

### Task 10: Compose home page + SEO

**Files:**
- Modify: `src/pages/index.astro`

**Step 1:** Replace contents:

```astro
---
import BaseLayout from '../layouts/BaseLayout.astro';
import Header from '../components/Header.astro';
import Footer from '../components/Footer.astro';
import Hero from '../components/Hero.astro';
import Features from '../components/Features.astro';
import Receipt from '../components/Receipt.astro';
import CTA from '../components/CTA.astro';

const title = 'ScanFence — Dynamic QR Codes with GPS Geofencing';
const description = 'Dynamic QR codes with GPS geofencing and time-based routing. Print the code once. Route it forever. Watch what scanned, what blocked, what\'s next.';
const canonical = 'https://scanfence.com/';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'ScanFence',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  description: 'Dynamic QR codes with GPS geofencing and time-based routing.',
  url: 'https://scanfence.com/',
  offers: { '@type': 'Offer', priceCurrency: 'EUR', availability: 'https://schema.org/InStock' },
};
---

<BaseLayout title={title} description={description} canonical={canonical} jsonLd={jsonLd}>
  <Header />
  <main>
    <Hero />
    <div class="container">
      <div class="metadata-strip">
        <span>QR · DYNAMIC</span>
        <span>GPS · GEOFENCED</span>
        <span>TIME-AWARE</span>
        <span>EU · IRELAND</span>
        <span>SOC-2 TYPE II</span>
      </div>
    </div>
    <Features />
    <Receipt />
    <CTA />
  </main>
  <Footer />
</BaseLayout>
```

**Step 2:** Note — the `metadata-strip` between hero and features lives inside a `.container` so it respects the page max-width.

**Verify:**
- `preview_screenshot` of `/` full page. Expect: Header → Hero (split) → mono metadata strip → Features (numbered list) → Receipt (log + 4 stats) → CTA → Footer. All paper, no indigo, no rounded corners anywhere.
- `preview_eval`: `document.querySelector('script[type="application/ld+json"]').textContent` parses as valid JSON with `@type: SoftwareApplication`.
- Mobile (390): everything stacks cleanly, no horizontal scroll.

**Commit:** `feat(home): assemble paper home with metadata strip and JSON-LD`

---

## Phase 4 — Contact

### Task 11: Editorial Contact page

**Files:**
- Modify: `src/pages/contact.astro` (major surgery — preserve form submission logic + topic prefill, simplify the rest)

**Approach:** The existing Contact page is much richer than the design doc's two-pane (it has chips, FAQ, multi-section). To minimize regressions and preserve the working WP-AJAX form submit: keep the form structure + submit script, drop the chips section, fold FAQ into a simpler editorial accordion, replace the gradient hero with the editorial two-pane.

**Step 1:** Rewrite `src/pages/contact.astro`:

```astro
---
import BaseLayout from '../layouts/BaseLayout.astro';
import Header from '../components/Header.astro';
import Footer from '../components/Footer.astro';

const title = 'Contact ScanFence — Send a signal';
const description = 'Get in touch with ScanFence. EU office. We reply within one business day.';
const canonical = 'https://scanfence.com/contact/';

const topics = [
  { value: 'sales',       label: 'Sales' },
  { value: 'technical',   label: 'Support' },
  { value: 'partnership', label: 'Partnerships' },
  { value: 'other',       label: 'Press / other' },
];

const faqs = [
  { q: 'How fast do you reply?',          a: 'Within one business day. Most questions answered same-day, Mon–Fri (CET).' },
  { q: 'Can I book a product demo?',      a: 'Pick "Sales" and mention a preferred window. We send a calendar invite for a 20-minute walkthrough.' },
  { q: 'Do you offer enterprise SLAs?',   a: 'Custom SLAs on Business and Enterprise plans, including 99.9% uptime commitments and priority support.' },
  { q: 'Where do I find technical docs?', a: 'Head to /docs for API references, webhook payloads, and SDK examples.' },
];
---

<BaseLayout title={title} description={description} canonical={canonical}>
  <Header />
  <main>
    <section class="contact-hero">
      <div class="container contact-grid">
        <div class="contact-copy">
          <span class="eyebrow">CONTACT</span>
          <h1>
            Send <span class="serif-accent">a signal.</span>
          </h1>
          <p class="contact-lede">
            We read everything that lands. Replies usually within one business
            day. EU office. EU hours.
          </p>
          <ul class="contact-meta">
            <li><span class="contact-meta-key">EMAIL</span><a href="mailto:hello@scanfence.com">hello@scanfence.com</a></li>
            <li><span class="contact-meta-key">HOURS</span><span>Mon–Fri · 09:00–17:00 CET</span></li>
            <li><span class="contact-meta-key">BASED</span><span>Vienna, Austria · remote-first</span></li>
            <li><span class="contact-meta-key">DOCS</span><a href="/documentation/">Browse documentation →</a></li>
          </ul>
        </div>

        <div class="contact-form-wrap" id="form">
          <span class="eyebrow eyebrow--mute">FORM</span>
          <h2>Write us a line.</h2>
          <form class="contact-form elementor-form" method="post" novalidate>
            <input type="hidden" name="post_id" value="79" />
            <input type="hidden" name="form_id" value="5f48d34" />
            <input type="hidden" name="queried_id" value="79" />
            <input type="hidden" name="referer_title" value="Contact" />

            <div class="contact-field">
              <label for="cf-name">NAME</label>
              <input id="cf-name" type="text" name="form_fields[name]" required placeholder="Jane Doe" autocomplete="name" />
            </div>

            <div class="contact-field">
              <label for="cf-email">WORK EMAIL</label>
              <input id="cf-email" type="email" name="form_fields[email]" required placeholder="you@company.com" autocomplete="email" />
            </div>

            <div class="contact-field">
              <label for="cf-topic">TOPIC</label>
              <select id="cf-topic" name="form_fields[topic]">
                {topics.map(t => <option value={t.value}>{t.label}</option>)}
              </select>
            </div>

            <div class="contact-field">
              <label for="cf-subject">SUBJECT</label>
              <input id="cf-subject" type="text" name="form_fields[field_a8c66ad]" placeholder="How can we help?" />
            </div>

            <div class="contact-field">
              <label for="cf-message">MESSAGE</label>
              <textarea id="cf-message" name="form_fields[message]" rows="4" required placeholder="Tell us a bit about what you're building…"></textarea>
            </div>

            <button type="submit" class="btn btn-primary btn-lg contact-submit">
              <span class="contact-submit-label">Send →</span>
              <span class="contact-submit-spinner" aria-hidden="true"></span>
            </button>

            <p class="contact-form-note">By sending this form you agree to be contacted about your inquiry. We never share your data.</p>
          </form>

          <div class="contact-form-success" role="status" hidden>
            <span class="eyebrow">RECEIVED</span>
            <h3>Thanks — message logged.</h3>
            <p>We'll reply within one business day. Or email <a href="mailto:hello@scanfence.com">hello@scanfence.com</a>.</p>
          </div>

          <div class="contact-form-error" role="alert" hidden>
            <p>Something failed sending that. Email <a href="mailto:hello@scanfence.com">hello@scanfence.com</a> — we'll respond just as fast.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="contact-faq section">
      <div class="container contact-faq-container">
        <span class="eyebrow">FAQ</span>
        <h2>Frequently asked.</h2>
        <div class="contact-faq-list">
          {faqs.map((f, i) => (
            <details open={i === 0}>
              <summary>{f.q}</summary>
              <div class="contact-faq-answer">{f.a}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  </main>
  <Footer />
</BaseLayout>

<style>
  .contact-hero {
    padding: var(--space-8) 0 var(--space-9);
    background: var(--d01-paper);
    border-bottom: var(--rule-hard);
  }
  .contact-grid {
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
    gap: var(--space-8);
    align-items: start;
  }
  .contact-copy h1 {
    font-size: clamp(48px, 6vw, 80px);
    font-weight: 500;
    line-height: 1.02;
    letter-spacing: -0.02em;
    margin-bottom: var(--space-5);
  }
  .contact-lede {
    font-size: 18px;
    color: var(--d01-steel);
    line-height: 1.55;
    margin-bottom: var(--space-6);
    max-width: 48ch;
  }
  .contact-meta {
    border-top: var(--rule);
    font-family: var(--font-mono);
    font-size: 13px;
  }
  .contact-meta li {
    display: grid;
    grid-template-columns: 80px 1fr;
    gap: var(--space-4);
    padding: var(--space-3) 0;
    border-bottom: var(--rule);
    align-items: baseline;
  }
  .contact-meta-key {
    color: var(--d01-mute);
    text-transform: uppercase;
    letter-spacing: 0.1em;
    font-size: 11px;
  }
  .contact-meta a {
    color: var(--d01-ink);
    text-decoration: underline;
    text-underline-offset: 3px;
  }
  .contact-meta a:hover { color: var(--d01-signal); }

  .contact-form-wrap h2 {
    font-size: clamp(28px, 3vw, 36px);
    font-weight: 500;
    letter-spacing: -0.01em;
    margin-bottom: var(--space-6);
  }
  .contact-form {
    display: flex;
    flex-direction: column;
    gap: var(--space-5);
  }
  .contact-field { display: flex; flex-direction: column; gap: 6px; }
  .contact-field label {
    font-family: var(--font-mono);
    font-size: 11px;
    color: var(--d01-mute);
    letter-spacing: 0.1em;
  }
  .contact-form input[type="text"],
  .contact-form input[type="email"],
  .contact-form select,
  .contact-form textarea {
    width: 100%;
    background: transparent;
    color: var(--d01-ink);
    border: none;
    border-bottom: var(--rule-hard);
    border-radius: 0;
    padding: 8px 0;
    font-family: var(--font-ui);
    font-size: 16px;
    line-height: 1.4;
    transition: border-color 0.15s;
    -webkit-appearance: none;
    appearance: none;
  }
  .contact-form input:focus,
  .contact-form select:focus,
  .contact-form textarea:focus {
    outline: none;
    border-bottom-color: var(--d01-signal);
  }
  .contact-form textarea { resize: vertical; min-height: 100px; }
  .contact-form select {
    background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'%3e%3cpath fill='%238A8B8E' d='M5 6 0 0h10z'/%3e%3c/svg%3e");
    background-repeat: no-repeat;
    background-position: right 4px center;
    padding-right: 24px;
  }
  .contact-submit {
    align-self: flex-start;
    margin-top: var(--space-3);
    position: relative;
  }
  .contact-submit[data-loading="true"] .contact-submit-label { visibility: hidden; }
  .contact-submit-spinner {
    display: none;
    position: absolute;
    inset: 0;
    margin: auto;
    width: 16px;
    height: 16px;
    border: 2px solid rgba(247,243,232,0.4);
    border-top-color: var(--d01-paper-hi);
    border-radius: 50%;
    animation: contact-spin 0.8s linear infinite;
  }
  .contact-submit[data-loading="true"] .contact-submit-spinner { display: block; }
  @keyframes contact-spin { to { transform: rotate(360deg); } }

  .contact-form-note {
    font-family: var(--font-mono);
    font-size: 11px;
    color: var(--d01-mute);
    letter-spacing: 0.04em;
    line-height: 1.55;
  }
  .contact-form-success,
  .contact-form-error {
    padding: var(--space-5);
    border: var(--rule-hard);
    background: var(--d01-paper-hi);
    margin-top: var(--space-4);
  }
  .contact-form-success h3 {
    font-size: 22px;
    font-weight: 500;
    margin: var(--space-2) 0 var(--space-3);
  }
  .contact-form-success p,
  .contact-form-error p {
    font-size: 15px;
    color: var(--d01-steel);
    line-height: 1.55;
  }
  .contact-form-error { border-color: var(--d01-vermil); }

  /* FAQ */
  .contact-faq-container { max-width: 800px; }
  .contact-faq h2 {
    font-size: clamp(32px, 3.5vw, 48px);
    font-weight: 500;
    letter-spacing: -0.015em;
    margin-bottom: var(--space-6);
  }
  .contact-faq-list { border-top: var(--rule-hard); }
  .contact-faq details {
    border-bottom: var(--rule-hard);
    background: transparent;
  }
  .contact-faq summary {
    padding: var(--space-5) 0;
    font-family: var(--font-display);
    font-weight: 500;
    font-size: 20px;
    color: var(--d01-ink);
    cursor: pointer;
    list-style: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: var(--space-4);
  }
  .contact-faq summary::-webkit-details-marker { display: none; }
  .contact-faq summary::after {
    content: '+';
    font-family: var(--font-mono);
    font-size: 20px;
    color: var(--d01-mute);
    line-height: 1;
  }
  .contact-faq details[open] summary::after { content: '−'; }
  .contact-faq-answer {
    padding: 0 0 var(--space-5);
    color: var(--d01-steel);
    font-size: 16px;
    line-height: 1.65;
    max-width: 64ch;
  }

  @media (max-width: 900px) {
    .contact-grid { grid-template-columns: 1fr; gap: var(--space-7); }
  }
</style>

<script is:inline>
  (() => {
    const form = document.querySelector('.contact-form');
    if (!form) return;
    const submitBtn = form.querySelector('.contact-submit');
    const topicSelect = form.querySelector('#cf-topic');
    const successPanel = document.querySelector('.contact-form-success');
    const errorPanel = document.querySelector('.contact-form-error');

    const params = new URLSearchParams(window.location.search);
    const topicParam = params.get('topic');
    if (topicParam && topicSelect) {
      const match = [...topicSelect.options].find(o => o.value === topicParam);
      if (match) topicSelect.value = topicParam;
    }

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      errorPanel.hidden = true;
      submitBtn.setAttribute('data-loading', 'true');
      submitBtn.disabled = true;
      try {
        const fd = new FormData(form);
        fd.append('action', 'elementor_pro_forms_send_form');
        fd.append('referer', window.location.href);
        const res = await fetch('https://scanfence.com/wp-admin/admin-ajax.php', {
          method: 'POST', body: fd, credentials: 'omit',
        });
        if (!res.ok) throw new Error('HTTP ' + res.status);
        const data = await res.json().catch(() => ({ success: true }));
        if (data && data.success === false) throw new Error('form rejected');
        form.hidden = true;
        successPanel.hidden = false;
        successPanel.scrollIntoView({ behavior: 'smooth', block: 'center' });
      } catch (err) {
        console.error('[contact] submit failed', err);
        errorPanel.hidden = false;
        submitBtn.removeAttribute('data-loading');
        submitBtn.disabled = false;
      }
    });
  })();
</script>
```

**Verify:**
- `preview_screenshot` of `/contact/` — two-column on desktop (copy + form side by side), stacks on mobile. Bottom-rule inputs, mono labels ALL CAPS, sharp-corner submit. No gradient. No indigo. Chips section is gone. FAQ is a clean hairline accordion.
- Manually `preview_click` the submit (or `preview_eval` to dispatch a form submit) — confirm the existing fetch to `/wp-admin/admin-ajax.php` still fires (CORS / network errors visible in `preview_network` are acceptable in dev; real call happens in prod).

**Commit:** `feat(contact): editorial two-pane with bottom-rule form and signal accents`

---

## Phase 5 — WP-rendered pages

### Task 12: Rewrite WP-content + Elementor styling block

**Files:**
- Modify: `src/styles/global.css:605-947` (the `.wp-content`, `.page-header`, `.post-header`, `.elementor-*` blocks)

**Step 1:** Replace the entire range 605–947 with the paper-mode version below. This is the largest CSS block in the file — going to rebuild it from scratch rather than patching.

```css
/* ===== Page Header ===== */
.page-header {
  background: var(--d01-paper);
  border-bottom: var(--rule-hard);
  padding: var(--space-8) 0 var(--space-6);
  text-align: left;
}

.page-header h1 {
  font-family: var(--font-display);
  font-weight: 500;
  font-size: clamp(40px, 5vw, 64px);
  line-height: 1.05;
  letter-spacing: -0.015em;
  color: var(--d01-ink);
  max-width: 820px;
}

/* ===== Post Header ===== */
.post-header {
  padding: var(--space-7) 0 var(--space-5);
  border-bottom: var(--rule);
  margin-bottom: var(--space-6);
}

.post-header h1 {
  font-family: var(--font-display);
  font-weight: 500;
  font-size: clamp(32px, 4vw, 48px);
  line-height: 1.1;
  letter-spacing: -0.015em;
  max-width: 760px;
  margin-bottom: var(--space-4);
}

.post-meta {
  font-family: var(--font-mono);
  font-size: 12px;
  color: var(--d01-mute);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  display: flex;
  gap: var(--space-4);
  align-items: center;
}

.post-featured-image {
  max-width: var(--max-width);
  margin: 0 auto var(--space-7);
  border-radius: 0;
  overflow: hidden;
  border: var(--rule);
}

.post-featured-image img {
  width: 100%;
  height: auto;
  display: block;
}

/* ===== WP Content (Elementor + native) ===== */
.wp-content {
  max-width: 720px;
  margin: 0 auto;
  font-family: var(--font-body);
  font-size: 17px;
  line-height: 1.75;
  color: var(--d01-ink);
}

.wp-content h1, .wp-content h2, .wp-content h3, .wp-content h4 {
  font-family: var(--font-display);
  color: var(--d01-ink);
  font-weight: 500;
  letter-spacing: -0.01em;
  margin-top: 1.8em;
  margin-bottom: 0.5em;
  line-height: 1.15;
}
.wp-content h2 { font-size: 32px; }
.wp-content h3 { font-size: 24px; }
.wp-content h4 { font-size: 20px; }
.wp-content p  { margin-bottom: 1.25em; color: var(--d01-ink); }

.wp-content img {
  border-radius: 0;
  border: var(--rule);
  margin: 2em 0;
}

.wp-content ul, .wp-content ol {
  padding-left: 1.4em;
  margin-bottom: 1.25em;
  list-style: revert;
}

.wp-content blockquote {
  border-left: 3px solid var(--d01-signal);
  padding-left: 1.4em;
  margin: 1.5em 0;
  font-family: var(--font-serif);
  font-style: italic;
  font-size: 1.05em;
  color: var(--d01-steel);
}

.wp-content a {
  color: var(--d01-ink);
  text-decoration: underline;
  text-underline-offset: 3px;
  text-decoration-thickness: 1px;
}

.wp-content a:hover { color: var(--d01-signal); }

.wp-content table {
  width: 100%;
  border-collapse: collapse;
  margin: 1.5em 0;
  font-size: 15px;
}

.wp-content th, .wp-content td {
  padding: 12px 16px;
  border: var(--rule);
  text-align: left;
}

.wp-content th {
  background: var(--d01-paper-hi);
  font-family: var(--font-mono);
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--d01-mute);
  font-weight: 500;
}

.wp-content code {
  font-family: var(--font-mono);
  font-size: 0.9em;
  background: var(--d01-paper-hi);
  padding: 2px 6px;
  border: var(--rule);
}

.wp-content pre {
  font-family: var(--font-mono);
  background: var(--d01-paper-hi);
  border: var(--rule-hard);
  padding: var(--space-4);
  overflow-x: auto;
  font-size: 13px;
  line-height: 1.5;
  margin: 1.5em 0;
}

.wp-content pre code { background: none; padding: 0; border: 0; }

/* ===== Elementor TOC / widget cleanup ===== */
.wp-content .elementor-toc__header,
.wp-content .elementor-toc__body,
.wp-content .elementor-widget-table-of-contents { display: none; }

.wp-content svg { max-width: 24px; max-height: 24px; }
.wp-content .wp-content img,
.wp-content figure img { max-width: 100%; height: auto; }

.wp-content .elementor,
.wp-content [data-elementor-type],
.wp-content .e-con,
.wp-content .e-con-inner,
.wp-content .elementor-widget-wrap,
.wp-content .elementor-element { max-width: 100%; }

.wp-content .e-con-boxed > .e-con-inner { max-width: 100%; padding: 0; }
.wp-content .elementor-widget { margin-bottom: 1em; }

.wp-content .elementor-heading-title {
  font-family: var(--font-display);
  color: var(--d01-ink);
  font-weight: 500;
  line-height: 1.15;
  letter-spacing: -0.01em;
}

.wp-content h2.elementor-heading-title {
  font-size: 32px;
  margin-top: 1.6em;
  margin-bottom: 0.6em;
}

.wp-content h2.elementor-heading-title:first-child { margin-top: 0; }
.wp-content .elementor-widget-text-editor p { margin-bottom: 1em; }

/* ===== Accordion (Elementor + native details) ===== */
.wp-content details,
.wp-content .e-n-accordion-item {
  border: none;
  border-bottom: var(--rule-hard);
  border-radius: 0;
  margin-bottom: 0;
  background: transparent;
}

.wp-content details:first-of-type,
.wp-content .e-n-accordion-item:first-of-type {
  border-top: var(--rule-hard);
}

.wp-content summary,
.wp-content .e-n-accordion-item-title {
  padding: var(--space-5) 0;
  font-family: var(--font-display);
  font-weight: 500;
  font-size: 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-4);
  color: var(--d01-ink);
  list-style: none;
}

.wp-content summary::-webkit-details-marker { display: none; }

.wp-content summary::after {
  content: '+';
  font-family: var(--font-mono);
  font-size: 20px;
  color: var(--d01-mute);
  line-height: 1;
  transition: color 0.15s;
}

.wp-content details[open] summary::after { content: '−'; color: var(--d01-ink); }
.wp-content summary:hover,
.wp-content .e-n-accordion-item-title:hover { color: var(--d01-signal); }

.wp-content details > :not(summary) {
  padding: 0 0 var(--space-5);
  color: var(--d01-steel);
}

.wp-content .e-n-accordion-item-title-icon { color: var(--d01-mute); }
.wp-content .e-n-accordion-item-title-icon .e-closed { display: inline; }
.wp-content .e-n-accordion-item-title-icon .e-opened { display: none; }
.wp-content details[open] .e-n-accordion-item-title-icon .e-closed { display: none; }
.wp-content details[open] .e-n-accordion-item-title-icon .e-opened { display: inline; }

/* ===== Forms (Elementor) ===== */
.wp-content .elementor-form { max-width: 720px; }
.wp-content .elementor-form .elementor-field-group { margin-bottom: var(--space-5); }
.wp-content .elementor-form label,
.wp-content .elementor-field-label {
  display: block;
  font-family: var(--font-mono);
  font-size: 11px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--d01-mute);
  margin-bottom: 4px;
}

.wp-content .elementor-form .elementor-field-required::after {
  content: ' *';
  color: var(--d01-vermil);
}

.wp-content .elementor-field-textual,
.wp-content .elementor-form input[type="text"],
.wp-content .elementor-form input[type="email"],
.wp-content .elementor-form input[type="tel"],
.wp-content .elementor-form input[type="url"],
.wp-content .elementor-form input[type="number"],
.wp-content .elementor-form select,
.wp-content .elementor-form textarea,
.wp-content form input[type="text"],
.wp-content form input[type="email"],
.wp-content form textarea {
  width: 100%;
  padding: 8px 0;
  font-family: var(--font-ui);
  font-size: 16px;
  border: none;
  border-bottom: var(--rule-hard);
  border-radius: 0;
  background: transparent;
  color: var(--d01-ink);
  transition: border-color 0.15s;
  -webkit-appearance: none;
  appearance: none;
}

.wp-content .elementor-field-textual:focus,
.wp-content form input:focus,
.wp-content form textarea:focus {
  outline: none;
  border-bottom-color: var(--d01-signal);
  box-shadow: none;
}

.wp-content .elementor-form textarea,
.wp-content form textarea { min-height: 120px; resize: vertical; }

.wp-content .elementor-button,
.wp-content form button[type="submit"],
.wp-content form input[type="submit"] {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 12px 20px;
  font-family: var(--font-ui);
  font-size: 15px;
  font-weight: 500;
  border-radius: 0;
  border: 1px solid var(--d01-ink);
  background: var(--d01-ink);
  color: var(--d01-paper-hi);
  cursor: pointer;
  transition: background 0.15s, border-color 0.15s;
  text-decoration: none;
}

.wp-content .elementor-button:hover,
.wp-content form button[type="submit"]:hover,
.wp-content form input[type="submit"]:hover {
  background: var(--d01-steel);
  border-color: var(--d01-steel);
  transform: none;
  box-shadow: none;
}

.wp-content .elementor-field-group { display: block; width: 100%; }
.wp-content .elementor-form input[type="hidden"],
.wp-content .elementor-field-type-hidden { display: none; }
```

**Step 2:** Note — the file's final responsive media query block (the `@media (max-width: 1024px)` and `@media (max-width: 640px)` at the very bottom) still references some legacy class names. Keep them for now; they're harmless on paper but check that no rule sets `background: var(--color-bg)` or similar that would re-darken something. If you see one, swap to paper tokens.

**Verify:**
- `preview_navigate` to `/features/`, `/pricing/`, `/faq/`, `/documentation/` — each should be paper background, ink display H1, ink body, mono caps eyebrows on accordions, bottom-rule form fields, no indigo, no shadows.
- `preview_navigate` to one blog post URL (find one via `/blog/`) — body content should be paper-style.

**Commit:** `feat(wp): paper styling for WP-rendered Elementor content`

---

## Phase 6 — Blog

### Task 13: Blog list as vertical editorial rows

**Files:**
- Modify: `src/components/BlogCard.astro`
- Modify: `src/styles/global.css:502-570` (the `.blog-grid` and `.blog-card*` blocks)
- Modify: `src/pages/blog/index.astro` (no markup change, just confirm it composes the cards)

**Step 1:** Replace `src/components/BlogCard.astro`:

```astro
---
interface Props {
  title: string;
  slug: string;
  excerpt: string;
  date: string;
  imageUrl?: string;
  category?: string;
}
const { title, slug, excerpt, date, imageUrl, category } = Astro.props;
---

<article class="blog-row">
  {imageUrl && (
    <a href={`/blog/${slug}/`} class="blog-row-image" aria-hidden="true" tabindex="-1">
      <img src={imageUrl} alt="" loading="lazy" />
    </a>
  )}
  <div class="blog-row-body">
    <div class="blog-row-meta">
      {category && <span class="eyebrow eyebrow--mute">{category}</span>}
      <time class="blog-row-date">{date}</time>
    </div>
    <h3><a href={`/blog/${slug}/`}>{title}</a></h3>
    <p class="blog-row-excerpt">{excerpt}</p>
  </div>
</article>
```

**Step 2:** Replace `src/styles/global.css:502-570`:

```css
/* ===== Blog list (vertical editorial rows) ===== */
.blog-grid {
  display: flex;
  flex-direction: column;
  border-top: var(--rule-hard);
}

.blog-row {
  display: grid;
  grid-template-columns: 240px 1fr;
  gap: var(--space-6);
  padding: var(--space-6) 0;
  border-bottom: var(--rule-hard);
  align-items: start;
}

.blog-row-image {
  display: block;
  width: 240px;
  aspect-ratio: 16 / 10;
  overflow: hidden;
  border: var(--rule);
}

.blog-row-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.blog-row-meta {
  display: flex;
  gap: var(--space-4);
  align-items: baseline;
  margin-bottom: var(--space-3);
}

.blog-row-date {
  font-family: var(--font-mono);
  font-size: 12px;
  color: var(--d01-mute);
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.blog-row h3 {
  font-family: var(--font-display);
  font-weight: 500;
  font-size: clamp(24px, 2.5vw, 32px);
  line-height: 1.15;
  letter-spacing: -0.01em;
  margin-bottom: var(--space-3);
}

.blog-row h3 a {
  color: var(--d01-ink);
  text-decoration: none;
}

.blog-row h3 a:hover { color: var(--d01-signal); }

.blog-row-excerpt {
  font-size: 16px;
  color: var(--d01-steel);
  line-height: 1.6;
  max-width: 62ch;
}

@media (max-width: 768px) {
  .blog-row {
    grid-template-columns: 1fr;
    gap: var(--space-4);
  }
  .blog-row-image { width: 100%; }
}
```

**Step 3:** `src/pages/blog/index.astro` already calls `<BlogCard {...post} />` — no change. Confirm at verify step.

**Verify:**
- `preview_navigate` to `/blog/` — vertical list of rows, image-left layout at desktop, stacks at mobile. No card chrome.
- Click a post → it routes via PostLayout, which will look ugly until Task 14.

**Commit:** `feat(blog): vertical editorial blog list with hairline rows`

### Task 14: Editorial post layout

**Files:**
- Modify: `src/layouts/PostLayout.astro`

**Step 1:** Replace the post header markup to include a mono category eyebrow + cleaner meta strip:

```astro
---
import BaseLayout from './BaseLayout.astro';
import Header from '../components/Header.astro';
import Footer from '../components/Footer.astro';

interface Props {
  title: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
  date?: string;
  category?: string;
  featuredImage?: string;
  featuredImageAlt?: string;
}

const { title, description, canonical, ogImage, date, category, featuredImage, featuredImageAlt } = Astro.props;
---

<BaseLayout title={title} description={description} canonical={canonical} ogImage={ogImage}>
  <Header />
  <main>
    <div class="container">
      <div class="post-header">
        <div class="post-eyebrow-row">
          {category && <span class="eyebrow">{category}</span>}
          {date && <time class="post-date">{date}</time>}
        </div>
        <h1>{title}</h1>
      </div>
      {featuredImage && (
        <div class="post-featured-image">
          <img src={featuredImage} alt={featuredImageAlt || title} />
        </div>
      )}
      <div class="wp-content">
        <slot />
      </div>
    </div>
  </main>
  <Footer />
</BaseLayout>

<style>
  .post-eyebrow-row {
    display: flex;
    align-items: baseline;
    gap: var(--space-4);
    margin-bottom: var(--space-4);
  }
  .post-date {
    font-family: var(--font-mono);
    font-size: 12px;
    color: var(--d01-mute);
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }
</style>
```

**Verify:** `preview_navigate` to one blog post → see mono category eyebrow + mono date, display H1, hairline divider, paper body.

**Commit:** `feat(post): editorial post header with mono eyebrow and date`

### Task 15: Pagination as inline text controls

**Files:**
- Modify: `src/components/Pagination.astro`
- Modify: `src/styles/global.css:572-603` (the `.pagination*` block)

**Step 1:** Replace `src/components/Pagination.astro`:

```astro
---
interface Props {
  currentPage: number;
  totalPages: number;
  basePath: string;
}
const { currentPage, totalPages, basePath } = Astro.props;
function pageUrl(page: number): string {
  if (page === 1) return `${basePath}/`;
  return `${basePath}/${page}/`;
}
---

{totalPages > 1 && (
  <nav class="pagination" aria-label="Pagination">
    {currentPage > 1 ? (
      <a href={pageUrl(currentPage - 1)} class="pagination-prev">← Previous</a>
    ) : (
      <span class="pagination-prev pagination-disabled">← Previous</span>
    )}
    <span class="pagination-count">{currentPage} / {totalPages}</span>
    {currentPage < totalPages ? (
      <a href={pageUrl(currentPage + 1)} class="pagination-next">Next →</a>
    ) : (
      <span class="pagination-next pagination-disabled">Next →</span>
    )}
  </nav>
)}
```

**Step 2:** Replace `src/styles/global.css:572-603`:

```css
/* ===== Pagination ===== */
.pagination {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: var(--space-7);
  padding-top: var(--space-5);
  border-top: var(--rule);
  gap: var(--space-4);
}

.pagination a, .pagination span {
  font-family: var(--font-ui);
  font-size: 14px;
  color: var(--d01-ink);
  text-decoration: none;
}

.pagination a:hover { color: var(--d01-signal); }

.pagination-count {
  font-family: var(--font-mono);
  font-size: 12px;
  color: var(--d01-mute);
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.pagination-disabled { color: var(--d01-mute); cursor: not-allowed; }
```

**Verify:** `preview_navigate` to `/blog/` (if more than one page exists) — pagination row shows `← Previous   1 / N   Next →` aligned across the column.

**Commit:** `feat(pagination): text-style pagination with mono counter`

---

## Phase 7 — Final

### Task 16: Visual QA — full site, desktop + mobile

**Files:** none (verification only)

**Step 1:** Restart preview to ensure cold load (`preview_stop` then `preview_start`).

**Step 2:** For each route below, screenshot at 1440×900 and 390×844:
- `/`
- `/contact/`
- `/blog/`
- `/blog/<one-real-post-slug>/` (find via `/blog/` index)
- `/features/`
- `/pricing/`
- `/faq/`
- `/documentation/`

Save under `.tmp/qa/` (gitignored).

**Step 3:** Side-by-side compare each to the original `app-scanfence-landing.png` for:
- Background = paper (`#F1ECE0`) everywhere.
- No indigo hex anywhere (`grep -ri "6366f1\|818cf8\|99102241\|--color-blue:" src/` should return nothing except token aliases).
- No rounded corners (`grep -ri "border-radius:" src/ | grep -v '0;'` should be empty).
- No drop shadows on cards (`grep -ri "box-shadow:" src/ | grep -v "none\|hero-pulse"` should be empty).
- Heading weight on H1/H2 is 500.
- JetBrains Mono renders for eyebrows (use `preview_inspect` to confirm `font-family`).

**Step 4:** Fix any miss. Common likely misses:
- A `.btn-outline` somewhere that still says "blue" hover.
- A `--color-blue` reference in some component-scoped `<style>` block.
- Featured-image rounded corners in blog post.

**Verify:** All 16 screenshots reviewed. No regressions.

**Commit (if fixes):** `fix(redesign): cleanup remaining indigo and rounded-corner stragglers`

### Task 17: Cleanup temp files + build verification

**Files:**
- Delete: `app-scanfence-landing.png`, `scanfence-marketing-home.png`, `.playwright-mcp/` (if gitignored, skip)
- Modify: `.gitignore` (add `.tmp/` if not already)

**Step 1:** Check what's in the repo root and `.playwright-mcp/`:
```bash
ls -la app-scanfence-landing.png scanfence-marketing-home.png .playwright-mcp/ 2>/dev/null
git status --short
```

**Step 2:** Delete temp PNGs:
```bash
rm -f app-scanfence-landing.png scanfence-marketing-home.png
```

If `.playwright-mcp/` is tracked, also remove it:
```bash
git rm -rf .playwright-mcp/ 2>/dev/null || rm -rf .playwright-mcp/
```

**Step 3:** Ensure `.gitignore` covers our screenshot work:
```bash
grep -qxF ".tmp/" .gitignore || echo ".tmp/" >> .gitignore
grep -qxF ".playwright-mcp/" .gitignore || echo ".playwright-mcp/" >> .gitignore
```

**Step 4:** Run a real build:
```bash
npm run build
```
Expected: clean exit, no warnings about missing fonts, no broken imports. Static output in `dist/`.

**Step 5:** Preview the production build briefly with `npm run preview`, then `preview_screenshot` of `/` to confirm the prod build matches dev.

**Commit:** `chore: remove redesign research artifacts, harden .gitignore`

---

## Done criteria

- All 17 tasks committed.
- `npm run build` exits clean.
- Visual QA matrix (8 routes × 2 widths) all paper, no indigo, no rounded corners, no shadows.
- Contact form submission still works against `wp-admin/admin-ajax.php`.
- WP pages (Features / Pricing / FAQ / Docs / blog posts) render with paper styling.
- Branch ready for PR with before/after screenshots in description.

## Out of scope (for explicit avoidance)

- Pricing copy rewrite (Pricing stays WP).
- New logo SVG (CSS square mark fallback used).
- Dark "void" mode for marketing (tokens defined, not exercised).
- Animation beyond hero pulse + hover state transitions.
- New imagery / illustrations.
