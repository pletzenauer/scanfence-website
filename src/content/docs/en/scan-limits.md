---
title: Scan limits
description: Let only the first N scans through, "first 100 get a free coffee", and send everyone after that to a page of your choice.
---

A scan limit (called **global scarcity limit** in the app) counts every scan of a code. Once the count reaches your limit, all further scanners go to a **limit-reached page** instead of the normal destination.

**Examples:** the first 100 visitors get a voucher; a giveaway ends after 500 entries; a limited drop sells out.

## Set a limit when creating a code

1. In the **Generate a code** window, tick **Global scarcity limit**. The limit starts at 50.
2. Enter the **Total scan limit**.
3. Enter the **Limit-reached URL**, for example a "sorry, all gone" page.

## Set or change a limit later

On the code's card, the **Scans & limits** box shows the count, for example *Total 37 / 100*, with a progress bar.

- Click <kbd>Edit</kbd> to change the **Global scan limit** (0 means unlimited) and the **Redirect URL when limit reached**, then <kbd>Save changes</kbd>.
- Click <kbd>Reset</kbd> to set the counter back to 0 and start a new round. This resets the counters of the code's rules too.

## Good to know

- If you leave the limit-reached URL empty, people see a short *This QR code has reached its scan limit* message.
- To keep counts fair, repeated scans from the same network are only counted up to 30 times per hour per code. Those extra scans still open the page; they just don't use up your limit.
- [Multi-location codes](/documentation/multi-location/) can also have a separate limit per location.
