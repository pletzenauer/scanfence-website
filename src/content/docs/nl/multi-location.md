---
title: Codes voor meerdere locaties
description: Eén gedrukte code, maximaal tien plekken, elk met een eigen bestemming, planning en scanlimiet.
---

Een code voor meerdere locaties controleert waar de scanner is en stuurt hem naar de pagina van de zone waarin hij staat. Staat hij in meerdere zones tegelijk, dan geldt de dichtstbijzijnde. Wie buiten alle zones is, gaat naar de **terugval-URL**.

**Voorbeeld:** een keten drukt dezelfde tafelstandaard voor al haar cafés. In elk café opent de code het menu van dat café. Thuis opent hij de website van de keten.

## Er een aanmaken

1. Klik op **QR Codes** op <kbd>+ Generate QR</kbd> en kies **Multi-location**.
2. Voer de **Fallback URL (Default)** in: waar mensen naartoe gaan als ze niet op een van uw locaties zijn, of hun locatie niet delen.
3. Klik op **Add location** en vul in:
   - **Label/Name**, bijv. *Café Oude Stad*
   - **Search by address**, of **Latitude** en **Longitude**
   - **Radius (meters)**
   - **Destination URL** voor deze plek
4. Herhaal dit voor maximaal **10 locaties**. Onvolledige vermeldingen zijn gemarkeerd met *(incomplete)* totdat elk veld is ingevuld.
5. Klik op <kbd>Generate QR →</kbd>.

## Extra's per locatie

Elke locatie kan een eigen:

- **Tijdsplanning** hebben met **Time of day**, **Days of week** en **Date range**, plus een **Priority** van 1 tot 10. Gebruik die wanneer een plek alleen tijdens de openingstijden moet meetellen.
- **Schaarstelimiet** hebben: de eerste N scans op deze locatie krijgen de pagina van de locatie, iedereen daarna krijgt de eigen **Fallback URL (when limit reached)** van die locatie.

## Locaties bewerken en hun cijfers bekijken

Klik op de kaart van de code op <kbd>Edit locations & stats</kbd>. Het venster **Location rules & statistics** toont alle zones op één kaart, met een kleur per locatie. Onder de kaart kunt u in de lijst zoeken, locaties toevoegen, bewerken of verwijderen, en per locatie de scanstatistieken, het maximale aantal scans en de tijdsregels bekijken.

<figure><img src="/images/docs/multi-overview-dark.webp" alt="Het venster Location rules and statistics met drie cafélocaties als gekleurde cirkels op een stadskaart" width="1600" height="1250" loading="lazy"><figcaption>Drie locaties van één code op een gedeelde kaart. Field users kunnen dit venster bekijken, maar niet wijzigen.</figcaption></figure>

## Tips

- Laat zones waar mogelijk niet overlappen. Waar ze wel overlappen, geldt het dichtstbijzijnde middelpunt.
- Een code voor meerdere locaties telt als één code voor uw abonnement, ongeacht het aantal locaties.
- Codes voor meerdere locaties lopen altijd via ScanFence, dus u kunt elke locatie later wijzigen zonder opnieuw te drukken.
