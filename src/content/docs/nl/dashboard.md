---
title: Dashboard
description: De cijfers van vandaag en een live overzicht van de laatste scans, het eerste scherm na het inloggen.
---

<figure><img src="/images/docs/dashboard-dark.webp" alt="Het dashboard met vier cijfertegels en de tabel met recente scanactiviteit" width="1600" height="1250" loading="lazy"><figcaption>Het dashboard wordt live bijgewerkt, zonder dat u hoeft te herladen.</figcaption></figure>

## De vier tegels

| Tegel | Toont |
|---|---|
| **Scans · today** | Alle scans van de codes in uw werkruimte sinds middernacht. |
| **Compliance** | Het aandeel van de locatiegecontroleerde scans van vandaag dat binnen een geofence plaatsvond. Bij 90 % of meer staat er *healthy*, daaronder *watch*. |
| **Geofences** | Hoeveel van uw zones actief zijn. |
| **Active users** | Hoeveel mensen er in uw werkruimte zitten. |

Een dalend compliancepercentage betekent meestal een van twee dingen: mensen proberen codes buiten de locatie, of een zone is te klein voor de gps-nauwkeurigheid ter plaatse. [Analyses](/documentation/analytics/) laat zien welke van de twee.

## Recente scanactiviteit

De tabel toont de laatste tien scans op het moment dat ze plaatsvinden:

- **When:** datum en tijd van de scan.
- **User · QR:** wie scande en welke code. Mensen van buiten uw werkruimte verschijnen als *Anonymous*.
- **Verdict:** *Verified* binnen een zone, *Blocked* erbuiten.
- **Where:** de zone waarmee de scan is vergeleken.
- **Delta:** de afstand tot het midden van de zone.

## Meldingen die u kunt zien

- **Team invitations:** iemand heeft u uitgenodigd voor zijn werkruimte. Klik op <kbd>Review</kbd> om te accepteren of af te wijzen. Zie [Team en rollen](/documentation/team/#joining-a-team).
- **No active subscription:** uw account werkt, maar voor het aanmaken en scannen van codes hebt u een abonnement nodig. Klik op <kbd>View plans →</kbd>.
