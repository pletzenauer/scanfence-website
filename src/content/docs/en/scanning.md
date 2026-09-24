---
title: What scanners see
description: What happens on someone's phone when they scan your code, and how to explain it to your visitors.
---

People scanning your codes don't need an app or an account. They use their phone's camera like with any QR code.

## Standard codes

The phone opens your page straight away. Dynamic codes take a brief detour through ScanFence, which is where they're counted and where rules and limits apply. Scanners don't notice it.

## Codes that check location

Geofence and multi-location codes first open a short ScanFence page that asks for the phone's location.

1. The phone shows its usual prompt, *"app.scanfence.com would like to use your location"* or similar. The scanner taps **Allow**.
2. ScanFence compares the position with your zone. That takes a second or two, longer if the phone has to find a GPS signal first.
3. The result depends on where the scanner is:

| Situation | Geofence code | Multi-location code |
|---|---|---|
| Inside the zone | Confirmed: *"You're at …"* | Sent to that location's page |
| Outside | *"You're outside …"*, with a hint to move closer. They can try again. | Sent to the fallback page |
| Location refused or unavailable | Asked to switch on location services and try again | Sent to the fallback page |

> **Put a line next to the code** on your sign, such as *"Allow location when asked: this code only works on site."* It noticeably reduces refused permissions.

## If a scanner is refused

- **They are on site but still refused.** Their phone may have a poor fix, especially indoors. Ask them to step near a window or outside and try again. If it happens often, increase the zone's [radius](/documentation/geofences/#choosing-the-right-radius).
- **Location is switched off.** On iPhone: *Settings → Privacy & Security → Location Services*, and allow it for the browser. On Android: pull down the quick settings and turn on *Location*.
- **They tapped "Don't allow" earlier.** The browser remembers it. They need to allow location for the site in their browser settings, then scan again.
- **Many scans in a row from one network.** To stop abuse, location checks are limited per network. After a lot of attempts within an hour, scanners see *"Too many location checks from your network"* and need to wait.

## Switched-off, used-up and deleted codes

- A code you switched **inactive** shows *"This QR code is inactive"*.
- A code over its [scan limit](/documentation/scan-limits/) goes to your limit-reached page, or shows a short message if you didn't set one.
- A code in the **trash** no longer works.
