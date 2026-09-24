---
title: Uw codes beheren
description: Uw QR-codes vinden, downloaden, bewerken, uitschakelen en verwijderen, en ze overzichtelijk houden met categorieën en tags.
---

<figure><img src="/images/docs/qr-codes-dark.webp" alt="De pagina QR Codes in rasterweergave met zoekveld, filters en codekaarten" width="1600" height="1250" loading="lazy"><figcaption>De pagina QR Codes. De teller bovenaan toont hoeveel codes uw abonnement toestaat.</figcaption></figure>

## De werkbalk

- **Active / Trash** wisselt tussen uw actieve codes en de codes die u hebt verwijderd.
- **Grid / List** wijzigt de weergave. Uw browser onthoudt de keuze.
- **My QR codes / All users** (alleen admins) toont uw eigen codes, die van iedereen of die van één collega.
- Met <kbd>Bulk</kbd> vinkt u meerdere codes aan en verplaatst u ze in één keer naar de prullenbak.
- <kbd>Upload</kbd> importeert veel codes uit een spreadsheet, als bulkupload voor uw account is ingeschakeld. Zie [Bulkupload](/documentation/bulk-upload/).
- <kbd>+ Generate QR</kbd> maakt een nieuwe code aan. Zie [Een QR-code aanmaken](/documentation/create-qr-codes/).

## Zoeken en filteren

Het zoekveld vindt codes op naam, link, terugvallink, geofence-naam of limietlink. Klik op **Filters** om de lijst te beperken op **categorie** of **tags**. Selecteert u meerdere tags, dan worden codes getoond die minstens één daarvan hebben. **Clear all filters** zet alles terug.

## De kaart van een code

<figure class="narrow"><img src="/images/docs/qr-card-dark.webp" alt="Een kaart van één QR-code met type, naam, activeringsschakelaar, de QR-afbeelding, tags en actieknoppen" width="471" height="1356" loading="lazy"><figcaption>Elke kaart bevat de code en alle acties ervoor.</figcaption></figure>

Van boven naar beneden:

- **Type en naam**, bijvoorbeeld *Geofence* of *Standard · Dynamic*.
- **Schakelaar Active / Inactive.** Klik erop om een dynamische code uit te schakelen, bijvoorbeeld aan het einde van een campagne. Inactieve codes werken niet meer totdat u ze weer inschakelt.
- **De QR-afbeelding**, gevolgd door categorie, tags en de bestemming.
- <kbd>PNG</kbd> en <kbd>SVG</kbd> downloaden de afbeelding. Gebruik SVG voor drukwerk: die blijft op elk formaat scherp. PNG is geschikt voor presentaties en documenten.
- <kbd>Copy</kbd> kopieert de link in de code, handig om op een computer te testen.
- <kbd>Delete</kbd> verplaatst de code naar de prullenbak.
- <kbd>Edit category & tags</kbd> deelt de code opnieuw in.
- <kbd>Edit redirect URL</kbd> (dynamische codes) wijzigt waar de code naartoe leidt. De wijziging geldt vanaf de volgende scan en de gedrukte code blijft hetzelfde.
- <kbd>View analytics</kbd> opent de scans van deze code: totalen, een kaart, de laatste 100 scans en export als CSV of PDF.
- <kbd>View location</kbd> (geofence-codes) toont de zone op een kaart.
- <kbd>Edit locations & stats</kbd> (codes voor meerdere locaties) opent de locatie-editor.
- <kbd>Add time-based rules</kbd> / <kbd>View time-based rules</kbd>. Zie [Tijdsregels](/documentation/time-based-rules/).
- **Scans & limits** toont het aantal scans en een eventuele limiet. Zie [Scanlimieten](/documentation/scan-limits/).

## Lijstweergave

De lijstweergave toont meer codes op het scherm, met dezelfde acties in een compacte rij. Die is geschikt voor lange lijsten en voor het selecteren van meerdere codes.

<figure><img src="/images/docs/qr-list-dark.webp" alt="De pagina QR Codes in lijstweergave" width="1600" height="1250" loading="lazy"><figcaption>Lijstweergave.</figcaption></figure>

## Categorieën en tags

Gebruik **categorieën** voor de hoofdindeling (één per code, met een kleur) en **tags** voor al het andere (zoveel als u wilt).

- **Categorieën:** **Filters → Manage categories**. Aanmaken, hernoemen, van kleur veranderen of verwijderen. Verwijdert u een categorie, dan verdwijnt die bij alle codes, maar de codes zelf blijven bestaan.
- **Tags:** **My Settings → Tags**, of maak ze aan terwijl u een code aanmaakt.

## Prullenbak en herstellen

<kbd>Delete</kbd> verwijdert een code niet definitief, maar verplaatst die naar de **Trash**. Een code in de prullenbak **werkt direct niet meer**: wie hem scant, krijgt een foutmelding in plaats van uw pagina.

<figure><img src="/images/docs/qr-trash-dark.webp" alt="De prullenbak met knoppen om te herstellen en definitief te verwijderen" width="1600" height="1250" loading="lazy"><figcaption>De prullenbak. Herstelt u een code, dan werkt die weer precies zoals voorheen.</figcaption></figure>

In de prullenbak kunt u:

- Een code herstellen met <kbd>Restore</kbd>. Die komt terug met al zijn instellingen en werkt weer.
- Een code definitief verwijderen met <kbd>Delete forever</kbd>. Dit kan niet ongedaan worden gemaakt.
- Meerdere codes selecteren en ze samen herstellen of verwijderen.

Codes in de prullenbak tellen niet mee voor de limiet van uw abonnement.

<div class="warn"><strong>Let op bij gedrukte codes.</strong> Overweeg om een code die al gedrukt is uit te schakelen in plaats van te verwijderen, of laat hem met <em>Edit redirect URL</em> verwijzen naar een pagina dat de actie is afgelopen.</div>
