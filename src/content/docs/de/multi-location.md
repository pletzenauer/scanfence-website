---
title: Codes für mehrere Standorte
description: Ein gedruckter Code, bis zu zehn Orte, jeder mit eigenem Ziel, Zeitplan und Scan-Limit.
---

Ein Code für mehrere Standorte prüft, wo sich die scannende Person befindet, und leitet sie auf die Seite der Zone, in der sie steht. Befindet sie sich in mehreren Zonen gleichzeitig, gilt die nächstgelegene. Wer außerhalb aller Zonen ist, gelangt zur **Fallback URL**.

**Beispiel:** Eine Kette druckt denselben Tischaufsteller für alle ihre Cafés. In jedem Café öffnet der Code die Speisekarte dieses Cafés, zu Hause die Website der Kette.

## Code anlegen

1. Klicken Sie unter **QR Codes** auf <kbd>+ Generate QR</kbd> und wählen Sie **Multi-location**.
2. Geben Sie die **Fallback URL (Default)** ein: wohin Personen gelangen, die an keinem Ihrer Standorte sind oder ihren Standort nicht freigeben.
3. Klicken Sie auf **Add location** und füllen Sie aus:
   - **Label/Name**, z. B. *Café Altstadt*
   - **Search by address**, oder **Latitude** und **Longitude**
   - **Radius (meters)**
   - **Destination URL** für diesen Ort
4. Wiederholen Sie das für bis zu **10 Standorte**. Unvollständige Einträge sind mit *(incomplete)* markiert, bis alle Felder ausgefüllt sind.
5. Klicken Sie auf <kbd>Generate QR →</kbd>.

## Extras pro Standort

Jeder Standort kann Folgendes erhalten:

- **Zeitplan** mit **Time of day**, **Days of week** und **Date range** sowie einer **Priority** von 1 bis 10. Nutzen Sie ihn, wenn ein Ort nur während seiner Öffnungszeiten zählen soll.
- **Scarcity limit:** Die ersten N Scans an diesem Standort erhalten seine Seite, alle weiteren die eigene **Fallback URL (when limit reached)** des Standorts.

## Standorte bearbeiten und Zahlen ansehen

Klicken Sie auf der Karte des Codes auf <kbd>Edit locations & stats</kbd>. Das Fenster **Location rules & statistics** zeigt alle Zonen auf einer Karte, jeden Standort in einer eigenen Farbe. Unter der Karte können Sie die Liste durchsuchen, Standorte hinzufügen, bearbeiten oder löschen und für jeden die Scan-Statistik, die maximalen Scans und die Zeitregeln sehen.

<figure><img src="/images/docs/multi-overview-dark.webp" alt="Das Fenster Location rules and statistics mit drei Café-Standorten als farbige Kreise auf einem Stadtplan" width="1600" height="1250" loading="lazy"><figcaption>Drei Standorte eines Codes auf einer gemeinsamen Karte. Field User können dieses Fenster ansehen, aber nicht ändern.</figcaption></figure>

## Tipps

- Vermeiden Sie nach Möglichkeit überlappende Zonen. Wo sie sich überlappen, gilt der nächstgelegene Mittelpunkt.
- Ein Code für mehrere Standorte zählt als ein Code für Ihren Tarif, unabhängig von der Anzahl der Standorte.
- Codes für mehrere Standorte laufen immer über ScanFence. Sie können daher jeden Standort später ohne Neudruck ändern.
