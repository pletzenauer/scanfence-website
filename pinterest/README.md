# Pinterest pins — English infographics

The four infographics from `/category/infographs/` ship on a flat near-white
ground, which vanishes in the Pinterest feed. `make_pins.py` rebuilds each one
as a 1000×1500 (2:3) pin: a topic-matched photo from the ScanFence media
library, a paper card holding the infographic, and a headline in the d01 Paper
palette from `src/styles/global.css`.

    .venv/bin/python make_pins.py                # all four
    .venv/bin/python make_pins.py cafe           # just one

Output lands in `pins/` as both PNG (upload this) and JPG (preview).

| Pin | Infographic | Background | Destination URL |
|---|---|---|---|
| `pin-cafe` | Why Your Café Needs QR Codes | `best-free-qr-menu-options.jpg` | https://scanfence.com/blog/why-your-cafe-needs-qr-codes/ |
| `pin-placement` | Venue QR Code Placement | `personalizing-restaurant-service-qr-codes.jpg` | https://scanfence.com/blog/venue-qr-code-placement-infograph-guide/ |
| `pin-restaurants` | QR Codes for Restaurants | `qr-codes-restaurant-menus.jpg` | https://scanfence.com/blog/qr-codes-for-restaurants-the-quick-win-strategy-infograph/ |
| `pin-static-vs-dynamic` | Static vs. Dynamic QR Codes | `dynamic-vs-static-qr-codes.jpg` | https://scanfence.com/blog/static-vs-dynamic-qr-codes-infograph/ |

All backgrounds come from cms.scanfence.com, so nothing new needs licensing.

## Suggested pin copy

**pin-cafe** — *6 reasons cafés are ditching paper menus*
Printing costs, table turnover, hygiene, analytics, upsell and customer
comfort — the six things that change when a café moves its menu to a QR code.

**pin-placement** — *Where to put QR codes in your venue*
Entrance, tables, flyers and social bio: what each placement is for, and the
purpose behind it. A placement guide for restaurants, bars and hotels.

**pin-restaurants** — *The 14-day QR rollout that lifts sales*
A three-phase plan to get QR ordering live in two weeks, plus the Wharton
numbers on what it does to average check size and meal duration.

**pin-static-vs-dynamic** — *Static or dynamic QR codes?*
Static codes are free and permanent. Dynamic codes are editable and trackable.
Pick the wrong one and you reprint the whole run — here is the side-by-side.

## Adding another infographic

Drop the source PNG into `source/`, a background JPG into `bg/`, and add an
entry to `PINS` in `make_pins.py`. Landscape sources automatically run near
full bleed and use the `highlights` lines to fill the leftover height.
