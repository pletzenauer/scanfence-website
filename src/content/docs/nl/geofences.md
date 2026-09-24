---
title: Geofences
description: Teken een zone op de kaart, zodat uw QR-codes alleen werken voor mensen die echt ter plaatse zijn.
---

Een geofence is een cirkel op de kaart: een middelpunt en een straal tussen **50 m en 5,000 m**. Scant iemand een code die aan een geofence is gekoppeld, dan geeft de telefoon door waar hij is, en ScanFence controleert of dat punt binnen de cirkel ligt.

**Typische toepassingen:** check-ins die alleen ter plaatse tellen, bestellen aan tafel dat alleen in het restaurant werkt, evenementcontent alleen voor mensen op de locatie, aanwezigheidsregistratie van personeel op een werklocatie.

## De pagina Geofences

<figure><img src="/images/docs/geofences-dark.webp" alt="De pagina Geofences met vier zones, met middelpuntcoördinaten, straal, status en acties om te bewerken en te verwijderen" width="1600" height="1250" loading="lazy"><figcaption>Alle zones van uw werkruimte in één tabel.</figcaption></figure>

Voor elke zone toont de tabel de **naam** en beschrijving, de coördinaten van het **middelpunt**, de **straal** en de **status**.

- Klik op **Active / Inactive** om een zone in of uit te schakelen.
- <kbd>Edit</kbd> opent de zone om die te verplaatsen of de grootte te wijzigen.
- <kbd>Delete</kbd> verwijdert de zone definitief.

## Een zone aanmaken of bewerken

1. Klik op <kbd>+ New geofence</kbd>, of op <kbd>Edit</kbd> bij een bestaande zone.
2. Voer een **Name** in en eventueel een **Description**, zoals *Laaddok 1–4*.
3. Typ een adres in **Address search** en klik op <kbd>Search</kbd>. De kaart springt naar die plek.
4. Verfijn het middelpunt door **op de kaart te klikken**. De coördinaten boven de kaart worden bij elke klik bijgewerkt.
5. Versleep de schuifregelaar **Radius**. De hint eronder vertaalt meters naar huizenblokken.
6. Klik op <kbd>Create geofence →</kbd> of <kbd>Update geofence →</kbd>.

<figure><img src="/images/docs/geofence-edit-dark.webp" alt="Het venster Edit geofence met naam, beschrijving, straalregelaar op 75 meter, adres zoeken en een kaart met de zone" width="1600" height="1250" loading="lazy"><figcaption>Een zone bewerken. Klik ergens op de kaart om het middelpunt te verplaatsen.</figcaption></figure>

## De juiste straal kiezen

Telefoons weten hun positie niet exact. Buiten is gps meestal nauwkeurig tot op 5–20 m. Binnen, in drukke binnensteden of ondergronds kan dat 50 m of meer zijn. Kies een straal die de plek dekt **plus** die onzekerheid.

| Plek | Aanbevolen straal |
|---|---|
| Een enkele winkel, café of stand | 50–100 m |
| Een evenementenlocatie, hotel, kantoorgebouw | 100–250 m |
| Een festivalterrein, campus, resort | 250–1,000 m |
| Een wijk of kleine plaats | 1,000–5,000 m |

> **Test ter plaatse.** Scan de code vóór het drukken aan de randen van de plek, bij voorkeur ook binnen. Worden mensen binnen geweigerd, maak de straal dan groter.

## Een code aan een zone koppelen

Zones worden samen met codes aangemaakt: kies in het venster **Generate a code** het type **Geofence** en vul de locatievelden in. Zie [Een QR-code aanmaken](/documentation/create-qr-codes/#geofence-codes). De nieuwe zone verschijnt daarna ook op de pagina Geofences, waar u die later kunt aanpassen zonder opnieuw te drukken.

Wilt u één code die op meerdere plekken werkt, elk met een eigen pagina? Gebruik dan een [code voor meerdere locaties](/documentation/multi-location/).

## Privacy

De locatie wordt alleen opgevraagd op het moment van scannen, en alleen voor codes die dat nodig hebben. Scanners zien de gebruikelijke toestemmingsvraag van hun telefoon en kunnen weigeren. Hun positie wordt gebruikt voor de controle en kan bij de scan worden opgeslagen voor uw analyses. ScanFence volgt niemand vóór of na de scan.
