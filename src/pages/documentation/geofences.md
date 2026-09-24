---
layout: ../../layouts/DocsLayout.astro
title: Geofences
description: Draw a zone on the map so your QR codes only work for people who are actually there.
---

A geofence is a circle on the map: a centre point and a radius between **50 m and 5,000 m**. When someone scans a code linked to a geofence, their phone reports where it is, and ScanFence checks whether that point lies inside the circle.

**Typical uses:** check-ins that only count on site, table ordering that only works in the restaurant, event content only for people at the venue, staff attendance at a work site.

## The Geofences page

<figure><img src="/images/docs/geofences-dark.webp" alt="The Geofences page listing four zones with centre coordinates, radius, status and edit and delete actions" width="1600" height="1250" loading="lazy"><figcaption>All zones of your workspace in one table.</figcaption></figure>

For each zone the table shows its **name** and description, the **centre** coordinates, the **radius** and the **status**.

- Click **Active / Inactive** to switch a zone on or off.
- <kbd>Edit</kbd> opens the zone to move it or change its size.
- <kbd>Delete</kbd> removes the zone for good.

## Create or edit a zone

1. Click <kbd>+ New geofence</kbd>, or <kbd>Edit</kbd> on an existing zone.
2. Enter a **Name** and, if you like, a **Description**, such as *Loading bay 1–4*.
3. Type an address into **Address search** and click <kbd>Search</kbd>. The map jumps there.
4. Fine-tune the centre by **clicking the map**. The coordinates above the map update as you click.
5. Drag the **Radius** slider. The hint underneath translates metres into city blocks.
6. Click <kbd>Create geofence →</kbd> or <kbd>Update geofence →</kbd>.

<figure><img src="/images/docs/geofence-edit-dark.webp" alt="The Edit geofence window with name, description, radius slider set to 75 metres, address search and a map with the zone" width="1600" height="1250" loading="lazy"><figcaption>Editing a zone. Click anywhere on the map to move its centre.</figcaption></figure>

## Choosing the right radius

Phones don't know their position exactly. Outdoors, GPS is usually accurate to 5–20 m; indoors, in dense city centres or underground it can be 50 m or worse. Pick a radius that covers the place **plus** that uncertainty.

| Place | Suggested radius |
|---|---|
| A single shop, café or stand | 50–100 m |
| A venue, hotel, office building | 100–250 m |
| A festival ground, campus, resort | 250–1,000 m |
| A district or small town | 1,000–5,000 m |

> **Test on site.** Before printing, scan the code at the edges of the place, ideally indoors too. If people inside are refused, make the radius bigger.

## Linking a code to a zone

Zones are created together with codes: choose the **Geofence** type in the **Generate a code** window and fill in its location fields. See [Create a QR code](/documentation/create-qr-codes/#geofence-codes). The new zone then also appears on the Geofences page, where you can adjust it later without reprinting.

Want one code that works at several places, each with its own page? Use a [multi-location code](/documentation/multi-location/).

## Privacy

The location is only requested at the moment of scanning, and only for codes that need it. Scanners see their phone's usual permission prompt and can decline. Their position is used for the check and may be saved with the scan for your analytics; ScanFence doesn't track anyone before or after the scan.
