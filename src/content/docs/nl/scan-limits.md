---
title: Scanlimieten
description: Laat alleen de eerste N scans door, bijvoorbeeld "de eerste 100 krijgen gratis koffie", en stuur iedereen daarna naar een pagina naar keuze.
---

Een scanlimiet (in de app **global scarcity limit** genoemd) telt elke scan van een code. Zodra de teller uw limiet bereikt, gaan alle volgende scanners naar een **pagina voor bereikte limiet** in plaats van naar de normale bestemming.

**Voorbeelden:** de eerste 100 bezoekers krijgen een voucher, een winactie stopt na 500 deelnames, een beperkte oplage is uitverkocht.

## Een limiet instellen bij het aanmaken van een code

1. Vink in het venster **Generate a code** de optie **Global scarcity limit** aan. De limiet begint op 50.
2. Voer de **Total scan limit** in.
3. Voer de **Limit-reached URL** in, bijvoorbeeld een pagina met de melding dat alles op is.

## Een limiet later instellen of wijzigen

Op de kaart van de code toont het vak **Scans & limits** de teller, bijvoorbeeld *Total 37 / 100*, met een voortgangsbalk.

- Klik op <kbd>Edit</kbd> om de **Global scan limit** (0 betekent onbeperkt) en de **Redirect URL when limit reached** te wijzigen, en daarna op <kbd>Save changes</kbd>.
- Klik op <kbd>Reset</kbd> om de teller terug te zetten naar 0 en een nieuwe ronde te starten. Dit zet ook de tellers van de regels van de code terug.

## Goed om te weten

- Laat u de URL voor bereikte limiet leeg, dan zien mensen een korte melding: *This QR code has reached its scan limit*.
- Om de telling eerlijk te houden, tellen herhaalde scans vanaf hetzelfde netwerk maximaal 30 keer per uur per code mee. Die extra scans openen de pagina nog steeds, maar gaan niet van uw limiet af.
- [Codes voor meerdere locaties](/documentation/multi-location/) kunnen ook per locatie een eigen limiet hebben.
