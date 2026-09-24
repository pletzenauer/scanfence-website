---
title: Wat scanners zien
description: Wat er op iemands telefoon gebeurt bij het scannen van uw code, en hoe u dat aan uw bezoekers uitlegt.
---

Mensen die uw codes scannen, hebben geen app of account nodig. Ze gebruiken de camera van hun telefoon, net als bij elke andere QR-code.

## Standaardcodes

De telefoon opent uw pagina direct. Dynamische codes maken een korte omweg via ScanFence. Daar worden ze geteld en gelden regels en limieten. Scanners merken daar niets van.

## Codes die de locatie controleren

Geofence-codes en codes voor meerdere locaties openen eerst een korte ScanFence-pagina die om de locatie van de telefoon vraagt.

1. De telefoon toont de gebruikelijke vraag, *"app.scanfence.com wil uw locatie gebruiken"* of iets vergelijkbaars. De scanner tikt op **Sta toe**.
2. ScanFence vergelijkt de positie met uw zone. Dat duurt een of twee seconden, langer als de telefoon eerst een gps-signaal moet vinden.
3. Het resultaat hangt af van waar de scanner is:

| Situatie | Geofence-code | Code voor meerdere locaties |
|---|---|---|
| Binnen de zone | Bevestigd: *"You're at …"* | Doorgestuurd naar de pagina van die locatie |
| Buiten | *"You're outside …"*, met een hint om dichterbij te komen. Ze kunnen het opnieuw proberen. | Doorgestuurd naar de terugvalpagina |
| Locatie geweigerd of niet beschikbaar | Gevraagd om locatievoorzieningen in te schakelen en het opnieuw te proberen | Doorgestuurd naar de terugvalpagina |

> **Zet een regel naast de code** op uw bord, zoals *"Sta locatie toe als daarom wordt gevraagd: deze code werkt alleen ter plaatse."* Dat vermindert het aantal geweigerde toestemmingen merkbaar.

## Als een scanner wordt geweigerd

- **Ze zijn ter plaatse, maar worden toch geweigerd.** Hun telefoon heeft misschien een onnauwkeurige positie, vooral binnen. Vraag ze om bij een raam of buiten te gaan staan en het opnieuw te proberen. Gebeurt dit vaak, vergroot dan de [straal](/documentation/geofences/#choosing-the-right-radius) van de zone.
- **Locatie staat uit.** Op een iPhone: *Instellingen → Privacy en beveiliging → Locatievoorzieningen*, en sta het toe voor de browser. Op Android: veeg de snelle instellingen omlaag en schakel *Locatie* in.
- **Ze hebben eerder op "Sta niet toe" getikt.** De browser onthoudt dat. Ze moeten in de browserinstellingen locatie voor de site toestaan en daarna opnieuw scannen.
- **Veel scans achter elkaar vanaf één netwerk.** Om misbruik te voorkomen zijn locatiecontroles per netwerk beperkt. Na veel pogingen binnen een uur zien scanners *"Too many location checks from your network"* en moeten ze even wachten.

## Uitgeschakelde, opgebruikte en verwijderde codes

- Een code die u op **inactief** hebt gezet, toont *"This QR code is inactive"*.
- Een code boven zijn [scanlimiet](/documentation/scan-limits/) gaat naar uw pagina voor bereikte limiet, of toont een korte melding als u die niet hebt ingesteld.
- Een code in de **prullenbak** werkt niet meer.
