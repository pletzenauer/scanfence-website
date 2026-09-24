---
layout: ../../layouts/DocsLayout.astro
title: Dashboard
description: Today's numbers and a live feed of the latest scans, the first screen after you sign in.
---

<figure><img src="/images/docs/dashboard-dark.webp" alt="The dashboard with four number tiles and the recent scan activity table" width="1600" height="1250" loading="lazy"><figcaption>The dashboard updates live, with no need to reload.</figcaption></figure>

## The four tiles

| Tile | Shows |
|---|---|
| **Scans · today** | All scans of your workspace's codes since midnight. |
| **Compliance** | The share of today's location-checked scans that happened inside a geofence. 90 % or more reads *healthy*, below that *watch*. |
| **Geofences** | How many of your zones are active. |
| **Active users** | How many people are in your workspace. |

A falling compliance rate usually means one of two things: people are trying codes away from the venue, or a zone is too small for the GPS precision on site. [Analytics](/documentation/analytics/) shows which.

## Recent scan activity

The table lists the last ten scans as they happen:

- **When:** date and time of the scan.
- **User · QR:** who scanned and which code. Members of the public show as *Anonymous*.
- **Verdict:** *Verified* inside a zone, *Blocked* outside.
- **Where:** the zone the scan was checked against.
- **Delta:** the distance from the zone's centre.

## Banners you may see

- **Team invitations:** someone invited you to their workspace. Click <kbd>Review</kbd> to accept or decline. See [Team and roles](/documentation/team/#joining-a-team).
- **No active subscription:** your account works, but creating and scanning codes needs a plan. Click <kbd>View plans →</kbd>.
