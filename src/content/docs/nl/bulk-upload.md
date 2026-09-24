---
title: Bulkupload
description: Maak tientallen of honderden QR-codes tegelijk aan vanuit een CSV-spreadsheet.
---

Bulkupload is handig wanneer u veel vergelijkbare codes nodig hebt: één per tafel, per product, per vestiging. U vult een spreadsheet in, slaat die op als CSV en uploadt het bestand. ScanFence maakt per rij één code aan.

> Bulkupload wordt ingeschakeld door het ScanFence-team. Ziet u <kbd>Upload</kbd> niet op de pagina QR Codes, [vraag ons dan](mailto:hello@scanfence.com) om het in te schakelen.

## Stap voor stap

1. Klik op de pagina **QR Codes** op <kbd>Upload</kbd>.
2. Klik op **Download sample CSV →** om `qr-codes-bulk-template.csv` met voorbeeldrijen te downloaden.
3. Open het bestand in Excel, Numbers of Google Sheets en vul per code één rij in. Laat de eerste rij (de kolomnamen) ongewijzigd.
4. Sla het bestand op of exporteer het als **CSV**.
5. Kies in het uploadvenster uw bestand onder **Upload your CSV file**. De upload start zodra u het bestand kiest.
6. **Upload results** toont daarna hoeveel codes zijn aangemaakt en, als er rijen mislukt zijn, welke en waarom.

<figure class="medium"><img src="/images/docs/qr-bulk-upload-dark.webp" alt="Het venster Bulk upload QR codes met de verplichte en optionele kolommen, scanlimiet en geofence" width="1344" height="1350" loading="lazy"><figcaption>Het uploadvenster toont elke kolom die het bestand kan bevatten.</figcaption></figure>

## Kolommen

| Kolom | Verplicht | Wat u invult |
|---|---|---|
| `type` | Ja | `standard` of `geofence` |
| `content` | Ja | De link of tekst. Bij dynamische codes de bestemming. |
| `name` | Nee | Een weergavenaam, bijv. *Tafel 12* |
| `category` | Nee | De naam van een bestaande categorie |
| `tags` | Nee | Namen van bestaande tags, gescheiden door `;` |
| `is_dynamic` | Nee | `true` om de code dynamisch te maken, anders leeg laten of `false` |
| `global_scan_limit` | Nee | Een getal, bijv. `100`. Zie [Scanlimieten](/documentation/scan-limits/) |
| `limit_reached_url` | Nee | Waar mensen naartoe gaan zodra de limiet is bereikt |
| `geofence_lat` | Bij geofence | Breedtegraad, bijv. `48.2082` |
| `geofence_lng` | Bij geofence | Lengtegraad, bijv. `16.3738` |
| `geofence_radius` | Nee | Straal in meters, 50 tot 5,000. Standaard 50 |

### Voorbeeld

```
name,type,category,content,is_dynamic,global_scan_limit,limit_reached_url,geofence_lat,geofence_lng,geofence_radius,tags
Table 1,geofence,Menus,https://example.com/menu,true,,,48.2082,16.3738,60,tables;indoor
Launch offer,standard,Marketing,https://example.com/offer,true,100,https://example.com/sold-out,,,,promo
```

## Tips

- **Maak eerst categorieën en tags aan.** Namen die nog niet bestaan worden overgeslagen, en de code wordt zonder die namen aangemaakt.
- **Coördinaten vinden** doet u door in Google Maps met de rechtermuisknop op een plek te klikken: de eerste regel in het menu is *breedtegraad, lengtegraad*.
- **Codes voor meerdere locaties** kunt u niet via een spreadsheet aanmaken. Maak ze aan in de app. Zie [Codes voor meerdere locaties](/documentation/multi-location/).
- **Foutmeldingen per rij** noemen de rij, bijvoorbeeld *Row 4: Missing required fields (type or content)* of *Row 7: Geofence type requires valid geofence_lat and geofence_lng*. Corrigeer die rijen en upload alleen die opnieuw. De rijen die wel gelukt zijn, zijn al aangemaakt.
- Codes uit een bulkupload tellen mee voor de limiet van uw abonnement, net als elke andere code.
