---
layout: ../../layouts/DocsLayout.astro
title: Manage your codes
description: Find, download, edit, switch off and delete your QR codes, and keep them organised with categories and tags.
---

<figure><img src="/images/docs/qr-codes-dark.webp" alt="The QR Codes page in grid view with search, filters and code cards" width="1600" height="1250" loading="lazy"><figcaption>The QR Codes page. The counter at the top shows how many codes your plan allows.</figcaption></figure>

## The toolbar

- **Active / Trash** switches between your live codes and the ones you deleted.
- **Grid / List** changes the layout. Your browser remembers the choice.
- **My QR codes / All users** (admins only) shows your own codes, everyone's, or one colleague's.
- <kbd>Bulk</kbd> lets you tick several codes and move them to the trash in one go.
- <kbd>Upload</kbd> imports many codes from a spreadsheet, if bulk upload is enabled for your account. See [Bulk upload](/documentation/bulk-upload/).
- <kbd>+ Generate QR</kbd> creates a new code. See [Create a QR code](/documentation/create-qr-codes/).

## Search and filter

The search box finds codes by name, link, fallback link, geofence name or limit link. Click **Filters** to narrow the list by **category** or **tags**. With several tags selected, codes with any of them are shown. **Clear all filters** resets everything.

## A code's card

<figure class="narrow"><img src="/images/docs/qr-card-dark.webp" alt="A single QR code card showing type, name, active switch, the QR image, tags and action buttons" width="471" height="1356" loading="lazy"><figcaption>Each card holds the code and every action for it.</figcaption></figure>

From top to bottom:

- **Type and name**, for example *Geofence* or *Standard · Dynamic*.
- **Active / Inactive switch.** Click it to switch a dynamic code off, for instance at the end of a campaign. Inactive codes stop working until you switch them back on.
- **The QR image**, followed by category, tags and the destination.
- <kbd>PNG</kbd> and <kbd>SVG</kbd> download the image. Use SVG for print: it stays sharp at any size. PNG suits slides and documents.
- <kbd>Copy</kbd> copies the link the code contains, handy for testing on a computer.
- <kbd>Delete</kbd> moves the code to the trash.
- <kbd>Edit category & tags</kbd> re-files the code.
- <kbd>Edit redirect URL</kbd> (dynamic codes) changes where the code leads. The change applies from the next scan and the printed code stays the same.
- <kbd>View analytics</kbd> opens this code's scans: totals, a map, the latest 100 scans, and CSV or PDF export.
- <kbd>View location</kbd> (geofence codes) shows the zone on a map.
- <kbd>Edit locations & stats</kbd> (multi-location codes) opens the location editor.
- <kbd>Add time-based rules</kbd> / <kbd>View time-based rules</kbd>. See [Time-based rules](/documentation/time-based-rules/).
- **Scans & limits** shows the scan count and any limit. See [Scan limits](/documentation/scan-limits/).

## List view

List view packs more codes on the screen, with the same actions in a compact row. It suits long lists and bulk selection.

<figure><img src="/images/docs/qr-list-dark.webp" alt="The QR Codes page in list view" width="1600" height="1250" loading="lazy"><figcaption>List view.</figcaption></figure>

## Categories and tags

Use **categories** for the main grouping (one per code, with a colour) and **tags** for everything else (as many as you like).

- **Categories:** **Filters → Manage categories**. Create, rename, recolour or delete. Deleting a category removes it from all codes but keeps the codes.
- **Tags:** **My Settings → Tags**, or create them while making a code.

## Trash and restore

<kbd>Delete</kbd> doesn't remove a code for good; it moves it to the **Trash**. A code in the trash **stops working** straight away, so people scanning it get an error instead of your page.

<figure><img src="/images/docs/qr-trash-dark.webp" alt="The trash view with restore and delete forever buttons" width="1600" height="1250" loading="lazy"><figcaption>The trash. Restore a code and it works again, exactly as before.</figcaption></figure>

In the trash you can:

- <kbd>Restore</kbd> a code. It comes back with all its settings and starts working again.
- <kbd>Delete forever</kbd> a code. This can't be undone.
- Select several codes and restore or delete them together.

Codes in the trash don't count towards your plan's limit.

<div class="warn"><strong>Careful with printed codes.</strong> Before you delete a code that's already printed, consider switching it off instead, or pointing it to a "this offer has ended" page with <em>Edit redirect URL</em>.</div>
