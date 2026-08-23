/**
 * Posts folded into a stronger article, keyed by the retired slug.
 *
 * Three clusters, all identified from Search Console query×page data for
 * 2026-02-20..2026-08-20 — pages genuinely competing for the *same* queries,
 * not merely similar-looking slugs. (The similar-looking ones were checked and
 * left alone: near-duplicate titles turned out to rank for disjoint query sets.)
 *
 * Every retired post had zero clicks, so nothing measurable is given up.
 *
 * 1. QR analytics — three posts on five shared queries ("qr analytics",
 *    "analytics for qr codes"). Winner `best-qr-code-analytics-tools` had 603
 *    impressions at position 36, against 59 and 2 for the other two.
 *
 * 2. Restaurant QR apps — four shared queries ("restaurant qr code app",
 *    "best menu qr code generator app"). Winner
 *    `choosing-the-right-qr-code-app-for-your-restaurant` held position 26, the
 *    best in the cluster. `best-qr-code-solutions-for-restaurants` deliberately
 *    stays live: it is the broader piece and holds 351 impressions of its own.
 *
 * 3. How QR codes work — six shared queries ("how do qr codes work", "how does
 *    a qr code work"). A genuine toss-up: the retired post had 8× the
 *    impressions (161 vs 20) but sat at position 78 against 42 — Google
 *    surfaces it broadly, always near the bottom. The winner is twice the
 *    article (1,078 words vs 662) and ranks 36 places better, so depth and
 *    position decided it over the raw impression count.
 *
 * Effect: the retired posts stop being built (so they leave the sitemap and
 * every listing), internal links to them are rewritten to the winner at build
 * time, and public/.htaccess 301s the old URLs. The posts stay published in
 * WordPress — undo by deleting the entry here and the .htaccess rule.
 */
export const CONSOLIDATED_POSTS: Record<string, string> = {
  'importance-of-qr-code-analytics': 'best-qr-code-analytics-tools',
  'understanding-qr-code-analytics': 'best-qr-code-analytics-tools',
  'choosing-qr-code-apps-restaurants': 'choosing-the-right-qr-code-app-for-your-restaurant',
  'best-5-free-qr-code-apps-for-restaurants-in-2026': 'choosing-the-right-qr-code-app-for-your-restaurant',
  'how-does-a-qr-code-work-step-by-step': 'how-qr-codes-work-a-simple-beginners-guide',
};
