---
title: Dashboard
description: Die Zahlen von heute und ein Live-Feed der letzten Scans, der erste Bildschirm nach der Anmeldung.
---

<figure><img src="/images/docs/dashboard-dark.webp" alt="Das Dashboard mit vier Kennzahl-Kacheln und der Tabelle der letzten Scans" width="1600" height="1250" loading="lazy"><figcaption>Das Dashboard aktualisiert sich live, ohne Neuladen.</figcaption></figure>

## Die vier Kacheln

| Kachel | Zeigt |
|---|---|
| **Scans · today** | Alle Scans der Codes Ihres Workspace seit Mitternacht. |
| **Compliance** | Den Anteil der heutigen Scans mit Standortprüfung, die innerhalb eines Geofence stattfanden. Ab 90 % steht dort *healthy*, darunter *watch*. |
| **Geofences** | Wie viele Ihrer Zonen aktiv sind. |
| **Active users** | Wie viele Personen zu Ihrem Workspace gehören. |

Eine sinkende Compliance-Rate bedeutet meist eines von zwei Dingen: Personen probieren Codes außerhalb des Ortes aus, oder eine Zone ist für die GPS-Genauigkeit vor Ort zu klein. [Auswertungen](/documentation/analytics/) zeigen, welches zutrifft.

## Letzte Scans

Die Tabelle listet die letzten zehn Scans in Echtzeit auf:

- **When:** Datum und Uhrzeit des Scans.
- **User · QR:** wer gescannt hat und welcher Code. Öffentliche Besucher erscheinen als *Anonymous*.
- **Verdict:** *Verified* innerhalb einer Zone, *Blocked* außerhalb.
- **Where:** die Zone, gegen die der Scan geprüft wurde.
- **Delta:** die Entfernung zum Mittelpunkt der Zone.

## Mögliche Hinweisbanner

- **Team-Einladungen:** Jemand hat Sie in seinen Workspace eingeladen. Klicken Sie auf <kbd>Review</kbd>, um anzunehmen oder abzulehnen. Siehe [Team und Rollen](/documentation/team/#joining-a-team).
- **Kein aktives Abo:** Ihr Konto funktioniert, aber zum Erstellen und Scannen von Codes brauchen Sie einen Tarif. Klicken Sie auf <kbd>View plans →</kbd>.
