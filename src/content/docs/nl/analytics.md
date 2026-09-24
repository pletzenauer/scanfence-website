---
title: Analyses
description: Kaarten, grafieken en exports van uw scans, voor de hele werkruimte of voor één code.
---

## De pagina Analytics

Open **Analytics** in het menu. Standaard ziet u de afgelopen 7 dagen.

<figure><img src="/images/docs/analytics-dark.webp" alt="De pagina Analytics met cijfertegels, periode, filters en de scankaart" width="1600" height="1250" loading="lazy"><figcaption>Analyses voor de gekozen periode.</figcaption></figure>

### Cijfertegels

- **Today's scans:** scans sinds middernacht, live bijgewerkt.
- **Active users:** mensen die in de afgelopen 5 minuten hebben gescand.
- **Avg accuracy:** hoe nauwkeurig de gps van de telefoons gemiddeld was, in meters. Lager is beter.
- **High precision:** scans met een nauwkeurigheid beter dan 20 m.

### Periode en filters

Kies onder **Date range** een **begin**- en **eind**datum. Klik onder **Filters** op tags om alleen codes met die tags te tonen. **Clear** zet de filters terug.

### Grafieken

| Paneel | Laat zien |
|---|---|
| **Scan locations · map** | Waar gescand is. Groene punten lagen binnen een zone, rode erbuiten, blauwe gemengd of onbekend. Scans dicht bij elkaar worden gegroepeerd. Zoom in om ze te splitsen. |
| **Scans over time** | Scans per dag. Handig om het effect van een campagne of evenement te zien. |
| **Compliance rate** | Binnen tegenover buiten een geofence, als ringdiagram. |
| **Location accuracy** | Hoeveel scans uitstekende (onder 10 m), goede (10–20 m), redelijke (20–50 m) of slechte (boven 50 m) gps hadden. Veel *poor*-scans wijzen op een locatie binnenshuis. Overweeg een grotere straal. |
| **Live scan feed** | De laatste tien scans, op het moment dat ze plaatsvinden. |
| **Scans by geofence · top 10** | Uw drukste codes. |
| **Rule type distribution** | Hoeveel scans zijn doorgestuurd door een tijdsregel, op basis van locatie of naar de standaardpagina. |
| **Time-based rule performance** | Hoe vaak elke tijdsregel is toegepast. |

### Exporteren

<kbd>Export CSV →</kbd> downloadt alle scans in de gekozen periode als spreadsheet: datum, tijd, gebruiker, geofence, binnen of buiten, afstand, coördinaten, nauwkeurigheid, hoogte, snelheid, batterij en netwerktype. Open het bestand in Excel, Numbers of Google Sheets.

## Analyses voor één code

Klik op de kaart van een code op <kbd>View analytics</kbd>. Het venster toont het totaal aantal scans van de code, de scans met een locatie en wanneer de code het laatst is gescand, gevolgd door een kaart en de meest recente scans met hun details.

<figure><img src="/images/docs/qr-analytics-dark.webp" alt="Het analysevenster van één code met totalen, exportknoppen en een kaart met scanlocaties" width="1600" height="1250" loading="lazy"><figcaption>Analyses per code. De kaart kleurt scans naar hoeveel er op dezelfde plek plaatsvonden.</figcaption></figure>

Hier kunt u de scans van de code exporteren als **CSV** of als **PDF**-rapport, handig om naar een klant of leidinggevende te sturen. Het venster toont de laatste 100 scans. De pagina Analytics en de export daarvan gaan verder terug.

## Wat wordt geteld

- Statische standaardcodes worden niet geteld: de telefoon opent uw link zonder dat ScanFence ertussen zit. Maak codes dynamisch om ze te volgen. Zie [Statisch of dynamisch](/documentation/create-qr-codes/#static-or-dynamic).
- Om de cijfers eerlijk te houden, tellen reeksen herhaalde scans vanaf hetzelfde netwerk maximaal 30 keer per uur per code mee.
