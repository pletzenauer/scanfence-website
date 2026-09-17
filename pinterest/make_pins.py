"""Build Pinterest pins (1000x1500) from the ScanFence blog infographics.

The infographics themselves ship on a flat near-white ground, which disappears
in the Pinterest feed. Each pin puts the infographic on a paper card over a
topic-matched photo from the ScanFence media library, in the d01 Paper palette
from src/styles/global.css.

    python make_pins.py            # all pins
    python make_pins.py cafe       # one pin by key
"""

import sys
from pathlib import Path

from PIL import Image, ImageDraw, ImageFilter, ImageFont

ROOT = Path(__file__).parent
SRC = ROOT / "source"
BG = ROOT / "bg"
OUT = ROOT / "pins"
FONTS = ROOT / "fonts"

# d01 Paper palette — keep in sync with src/styles/global.css
PAPER = (241, 236, 224)
PAPER_HI = (247, 243, 232)
INK = (16, 16, 18)
VERMIL = (184, 65, 42)
RULE_HARD = (184, 176, 160)

W, H = 1000, 1500
MARGIN = 64

PINS = [
    {
        "key": "restaurants",
        "infographic": "qr-codes-for-restaurants.png",
        "background": "qr-codes-restaurant-menus.jpg",
        "kicker": "Restaurant Playbook",
        "headline": "The 14-day QR rollout that lifts sales",
        "footnote": "+10.77% sales productivity — Wharton faculty research",
        "highlights": [
            "Days 1–3 — map the placements",
            "Days 4–6 — set up the digital flow",
            "Days 7–12 — train the floor staff",
        ],
        "url": "scanfence.com/blog",
    },
    {
        "key": "placement",
        "infographic": "venue-qr-code-placement.png",
        "background": "personalizing-restaurant-service-qr-codes.jpg",
        "kicker": "Placement Guide",
        "headline": "Where to put QR codes in your venue",
        "footnote": "Entrance · Tables · Flyers · Social",
        "url": "scanfence.com/blog",
    },
    {
        "key": "cafe",
        "infographic": "why-your-cafe-needs-qr-codes.png",
        "background": "best-free-qr-menu-options.jpg",
        "kicker": "Café Operations",
        "headline": "6 reasons cafés are ditching paper menus",
        "footnote": "Cost · Speed · Hygiene · Analytics · Upsell · Comfort",
        "url": "scanfence.com/blog",
    },
    {
        "key": "static-vs-dynamic",
        "infographic": "static-vs-dynamic-qr-codes.png",
        "background": "dynamic-vs-static-qr-codes.jpg",
        "kicker": "QR Basics",
        "headline": "Static or dynamic? Pick before you print",
        "footnote": "Pros, cons and use cases side by side",
        "highlights": [
            "Static — free, permanent, unchangeable",
            "Dynamic — editable, trackable, shorter code",
            "Wrong choice = reprint the whole run",
        ],
        "url": "scanfence.com/blog",
    },
]


def font(name, size, weight=None):
    f = ImageFont.truetype(str(FONTS / name), size)
    if weight is not None:
        f.set_variation_by_axes([weight])
    return f


def cover(img, size):
    """Scale-and-crop `img` to exactly `size`, keeping the centre."""
    tw, th = size
    scale = max(tw / img.width, th / img.height)
    img = img.resize((round(img.width * scale), round(img.height * scale)), Image.LANCZOS)
    left = (img.width - tw) // 2
    top = (img.height - th) // 2
    return img.crop((left, top, left + tw, top + th))


def trim_border(img, tol=6):
    """Drop the flat outer margin so the card hugs the artwork."""
    rgb = img.convert("RGB")
    ref = rgb.getpixel((0, 0))
    px = rgb.load()
    w, h = rgb.size

    def flat_row(y):
        return all(
            abs(px[x, y][c] - ref[c]) <= tol for x in range(0, w, max(1, w // 60)) for c in range(3)
        )

    def flat_col(x):
        return all(
            abs(px[x, y][c] - ref[c]) <= tol for y in range(0, h, max(1, h // 60)) for c in range(3)
        )

    top, bottom, left, right = 0, h - 1, 0, w - 1
    while top < bottom and flat_row(top):
        top += 1
    while bottom > top and flat_row(bottom):
        bottom -= 1
    while left < right and flat_col(left):
        left += 1
    while right > left and flat_col(right):
        right -= 1
    return img.crop((left, top, right + 1, bottom + 1))


def wrap(draw, text, fnt, max_width):
    lines, line = [], ""
    for word in text.split():
        probe = f"{line} {word}".strip()
        if draw.textlength(probe, font=fnt) <= max_width or not line:
            line = probe
        else:
            lines.append(line)
            line = word
    if line:
        lines.append(line)
    return lines


def tracked(draw, xy, text, fnt, fill, tracking):
    """Draw letterspaced text — PIL has no tracking, so step per glyph."""
    x, y = xy
    for ch in text:
        draw.text((x, y), ch, font=fnt, fill=fill)
        x += draw.textlength(ch, font=fnt) + tracking
    return x - tracking


def build_background(path):
    """Photo, softened and darkened so paper-white type stays readable."""
    bg = cover(Image.open(path).convert("RGB"), (W, H))
    bg = bg.filter(ImageFilter.GaussianBlur(3.5))

    # Warm the photo toward the paper palette so every pin reads as one family,
    # without burying the subject — the photo has to stay recognisable.
    tint = Image.new("RGB", (W, H), (58, 40, 32))
    bg = Image.blend(bg, tint, 0.26)

    # Vertical scrim: darkest at the top behind the headline, lifting toward
    # the card, dark again under the footer.
    scrim = Image.new("L", (1, H))
    for y in range(H):
        t = y / H
        if t < 0.42:
            v = int(130 - 55 * (t / 0.42))
        elif t < 0.85:
            v = 62
        else:
            v = int(62 + 68 * ((t - 0.85) / 0.15))
        scrim.putpixel((0, y), v)
    scrim = scrim.resize((W, H))
    bg = Image.composite(Image.new("RGB", (W, H), (14, 10, 9)), bg, scrim)
    return bg.convert("RGBA")


def card(art, width, radius=18, pad=22):
    """Paper card holding the infographic, with a soft drop shadow."""
    art = trim_border(art.convert("RGB"))
    inner_w = width - 2 * pad
    inner_h = round(art.height * inner_w / art.width)
    art = art.resize((inner_w, inner_h), Image.LANCZOS)

    ch = inner_h + 2 * pad
    layer = Image.new("RGBA", (width, ch), (0, 0, 0, 0))
    mask = Image.new("L", (width, ch), 0)
    ImageDraw.Draw(mask).rounded_rectangle((0, 0, width - 1, ch - 1), radius, fill=255)

    body = Image.new("RGBA", (width, ch), PAPER_HI + (255,))
    body.paste(art, (pad, pad))
    ImageDraw.Draw(body).rounded_rectangle(
        (1, 1, width - 2, ch - 2), radius, outline=RULE_HARD + (255,), width=2
    )
    layer.paste(body, (0, 0), mask)
    return layer


def shadow_for(layer, blur=26, spread=14, opacity=150):
    sh = Image.new("RGBA", (layer.width + 2 * spread, layer.height + 2 * spread), (0, 0, 0, 0))
    alpha = layer.getchannel("A").point(lambda v: min(opacity, v))
    black = Image.new("RGBA", layer.size, (0, 0, 0, 255))
    black.putalpha(alpha)
    sh.paste(black, (spread, spread))
    return sh.filter(ImageFilter.GaussianBlur(blur))


def build_pin(spec):
    pin = build_background(BG / spec["background"])
    draw = ImageDraw.Draw(pin)

    f_kicker = font("Inter.ttf", 24, 600)
    f_head = font("SpaceGrotesk.ttf", 62, 700)
    f_note = font("Inter.ttf", 25, 400)
    f_url = font("SpaceGrotesk.ttf", 30, 600)

    y = 74

    # Kicker: vermilion tick + letterspaced label
    draw.rectangle((MARGIN, y + 6, MARGIN + 6, y + 26), fill=VERMIL)
    tracked(draw, (MARGIN + 22, y), spec["kicker"].upper(), f_kicker, PAPER, 2.2)
    y += 54

    # Headline — shrink to fit three lines rather than run into the card.
    head_font, lines = f_head, None
    for size in range(62, 41, -3):
        head_font = font("SpaceGrotesk.ttf", size, 700)
        lines = wrap(draw, spec["headline"], head_font, W - 2 * MARGIN)
        if len(lines) <= 3:
            break
    for line in lines:
        draw.text((MARGIN, y), line, font=head_font, fill=(255, 253, 248))
        y += round(head_font.size * 1.14)

    y += 26
    for line in wrap(draw, spec["footnote"], f_note, W - 2 * MARGIN):
        draw.text((MARGIN, y), line, font=f_note, fill=(232, 224, 210))
        y += 34

    # Card. A 16:9 infographic shrunk to a 2:3 pin gets unreadable, so those run
    # near full bleed and spend the leftover height on takeaway lines instead.
    art = Image.open(SRC / spec["infographic"])
    landscape = art.width > art.height
    card_w = W - 2 * (34 if landscape else MARGIN)

    highlights = spec.get("highlights") or []
    f_hi = font("Inter.ttf", 27, 500)
    hi_h = (len(highlights) * 50 + 26) if highlights else 0

    footer_h = 104
    top = y + 30
    avail_h = H - footer_h - top - 24 - hi_h
    layer = card(art, card_w)
    if layer.height > avail_h:
        scale = avail_h / layer.height
        layer = layer.resize((round(layer.width * scale), round(layer.height * scale)), Image.LANCZOS)
    cx = (W - layer.width) // 2
    cy = top + max(0, (avail_h - layer.height) // 2)

    sh = shadow_for(layer)
    pin.alpha_composite(sh, (cx - 14, cy - 14 + 10))
    pin.alpha_composite(layer, (cx, cy))

    if highlights:
        hy = cy + layer.height + 30
        draw = ImageDraw.Draw(pin)
        for line in highlights:
            draw.rectangle((MARGIN + 2, hy + 13, MARGIN + 14, hy + 17), fill=VERMIL)
            draw.text((MARGIN + 30, hy), line, font=f_hi, fill=(240, 234, 224))
            hy += 50

    # Footer: mark, wordmark, and a badge that promises only the article.
    fy = H - 78
    draw = ImageDraw.Draw(pin)
    draw.line((MARGIN, fy - 26, W - MARGIN, fy - 26), fill=(255, 255, 255, 70), width=1)

    logo = Image.open(ROOT / "logo-white.png").convert("RGBA")
    logo = logo.crop(logo.getchannel("A").getbbox()).resize((46, 46), Image.LANCZOS)
    pin.alpha_composite(logo, (MARGIN, fy - 2))
    draw.text((MARGIN + 62, fy + 6), spec["url"], font=f_url, fill=PAPER)

    badge = "Read the guide"
    bw = draw.textlength(badge, font=f_note) + 40
    draw.rounded_rectangle((W - MARGIN - bw, fy - 1, W - MARGIN, fy + 43), 22, fill=VERMIL)
    draw.text((W - MARGIN - bw + 20, fy + 8), badge, font=f_note, fill=(255, 246, 240))

    return pin.convert("RGB")


def main():
    OUT.mkdir(exist_ok=True)
    wanted = sys.argv[1:]
    for spec in PINS:
        if wanted and spec["key"] not in wanted:
            continue
        pin = build_pin(spec)
        path = OUT / f"pin-{spec['key']}.png"
        pin.save(path)
        pin.save(path.with_suffix(".jpg"), quality=92, subsampling=0)
        print(path, pin.size)


if __name__ == "__main__":
    main()
