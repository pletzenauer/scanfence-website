---
title: Een QR-code aanmaken
description: "De drie codetypes, statisch tegenover dynamisch, en elk veld in het venster Generate a code."
---

Open **QR Codes** in het menu en klik op <kbd>+ Generate QR</kbd>. Het venster **Generate a code** wordt geopend. <kbd>Generate QR →</kbd> blijft grijs totdat alles is ingevuld wat het gekozen type nodig heeft.

<figure><img src="/images/docs/qr-new-standard-dark.webp" alt="Het venster Generate a code met de drie codetypes Standard, Geofence en Multi-location" width="1344" height="1227" loading="lazy"><figcaption>Kies eerst het type. De rest van het formulier past zich daaraan aan.</figcaption></figure>

## Een type kiezen

| Type | Gebruik het als | Scanners krijgen |
|---|---|---|
| **Standard** | Iedereen, overal, hetzelfde moet krijgen. | Uw link of tekst. |
| **Geofence** | De code maar op één plek mag werken: een incheckpunt, een tafel, een winkel. | Toegang als ze binnen uw zone staan, anders een scherm dat ze erbuiten zijn. |
| **Multi-location** | Eén gedrukt ontwerp op meerdere plekken wordt gebruikt en elke plek een eigen pagina moet openen. | De pagina van de dichtstbijzijnde zone waarin ze staan, of een terugvalpagina. |

## Velden voor elk type

- **QR code name** (optioneel). Een herkenbare naam, zoals *Zomercampagne 2026*. Die wordt getoond in lijsten, analyses en exports, dus het loont om hem in te vullen.
- **Category** (optioneel). Eén categorie met kleurcode per code, bijvoorbeeld *Menu's* of *Evenementen*. U kunt de codelijst erop filteren. Beheer categorieën via **Filters → Manage categories** op de pagina QR Codes.
- **Tags** (optioneel). Zoveel als u wilt. Kies een bestaande tag met **Add tag**, of kies **Create new tag** om er direct een toe te voegen.

## Standaardcodes

Voer bij **URL or text** een webadres of gewone tekst in. Tekst werkt ook: de telefoon toont die dan gewoon.

## Geofence-codes

Een geofence-code vraagt de telefoon van de scanner om zijn locatie en laat alleen door wie binnen de zone staat.

1. Voer een **Geofence name** in, zoals *Hoofdingang*.
2. Typ een adres in **Search by address** en klik op **Search**, of voer zelf **Latitude** en **Longitude** in. Zodra de positie is ingesteld, verschijnt een kaartvoorbeeld.
3. Stel de **Radius (meters)** in. Gebruik minimaal 50 m: de gps van een telefoon is zelden nauwkeuriger, zeker binnenshuis.
4. Voer bij **URL or text · inside fence** in wat mensen krijgen die de controle doorstaan.

<figure><img src="/images/docs/qr-new-geofence-dark.webp" alt="Het geofence-gedeelte van het venster Generate a code, met naam, adres zoeken, breedtegraad, lengtegraad en straal" width="1344" height="1350" loading="lazy"><figcaption>Zoek het adres en controleer daarna de speld op het kaartvoorbeeld.</figcaption></figure>

Elke geofence-code maakt een eigen nieuwe zone aan, die daarna ook op de pagina **Geofences** verschijnt. Daar kunt u de zone later verplaatsen of de straal wijzigen. Zie [Geofences](/documentation/geofences/).

## Codes voor meerdere locaties

Stel een **Fallback URL** in voor iedereen buiten alle zones en klik daarna per plek op **Add location** (maximaal 10). Elke locatie heeft een eigen adres, straal en bestemming, en optioneel een eigen planning en scanlimiet. Dit type heeft een eigen pagina: [Codes voor meerdere locaties](/documentation/multi-location/).

<figure><img src="/images/docs/qr-new-multi-dark.webp" alt="Het gedeelte voor meerdere locaties met de terugval-URL en een lege lijst voor maximaal tien locaties" width="1344" height="1350" loading="lazy"><figcaption>Meerdere locaties: één terugvalpagina plus maximaal tien zones.</figcaption></figure>

## Statisch of dynamisch

Vink **Make this a dynamic QR code** aan om een code dynamisch te maken. Het veld erboven heet dan **Destination URL**.

| | Statisch | Dynamisch |
|---|---|---|
| Wat er in de gedrukte code staat | Uw link zelf | Een korte ScanFence-link die de scanner doorstuurt |
| Bestemming later wijzigen | Nee, u zou opnieuw moeten drukken | Ja, altijd |
| Scans geteld en getoond in analyses | Nee (standaardcodes) | Ja |
| Tijdsregels en scanlimieten | Nee (standaardcodes) | Ja |
| De code uitschakelen | Nee (standaardcodes) | Ja |

> **Vuistregel:** komt de code op iets gedrukts, maak hem dan dynamisch. Statische codes zijn prima voor dingen die nooit veranderen, zoals uw wifi-wachtwoord.

Als u in dit venster tijdsregels inschakelt, wordt de code automatisch dynamisch. Codes voor meerdere locaties lopen altijd via ScanFence, daarom tonen zij deze optie niet.

## Optionele extra's

Twee gedeelten onderaan het venster kunt u nu instellen of later via de kaart van de code:

- **Global scarcity limit:** stop na een aantal scans en stuur iedereen daarna naar een andere pagina. Zie [Scanlimieten](/documentation/scan-limits/).
- **Time-based rules:** een andere bestemming op bepaalde tijden, dagen of datums. Zie [Tijdsregels](/documentation/time-based-rules/).

## Als er iets ontbreekt

Het venster vertelt u wat het nodig heeft, bijvoorbeeld *Please enter URL or text*, *Please complete all geofence location fields* of *Please add at least one location*. Staat er *QR code limit reached*, dan hebt u alle codes van uw abonnement gebruikt. Verplaats codes die u niet meer nodig hebt naar de prullenbak, of [upgrade](/documentation/plans-and-limits/).
