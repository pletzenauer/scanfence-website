---
title: Scan-Limits
description: Nur die ersten N Scans durchlassen, etwa „die ersten 100 erhalten einen Gratis-Kaffee“, und alle Weiteren auf eine Seite Ihrer Wahl leiten.
---

Ein Scan-Limit (in der App **Global scarcity limit** genannt) zählt jeden Scan eines Codes. Sobald der Zähler Ihr Limit erreicht, gelangen alle weiteren Scannenden auf eine **Seite für erreichte Limits** statt zum normalen Ziel.

**Beispiele:** Die ersten 100 Besucher erhalten einen Gutschein, ein Gewinnspiel endet nach 500 Teilnahmen, eine limitierte Aktion ist ausverkauft.

## Limit beim Erstellen festlegen

1. Setzen Sie im Fenster **Generate a code** ein Häkchen bei **Global scarcity limit**. Das Limit beginnt bei 50.
2. Geben Sie das **Total scan limit** ein.
3. Geben Sie die **Limit-reached URL** ein, zum Beispiel eine Seite mit „Leider schon vergriffen“.

## Limit später festlegen oder ändern

Auf der Karte des Codes zeigt der Bereich **Scans & limits** den Zählerstand, zum Beispiel *Total 37 / 100*, mit einem Fortschrittsbalken.

- Klicken Sie auf <kbd>Edit</kbd>, um das **Global scan limit** (0 bedeutet unbegrenzt) und die **Redirect URL when limit reached** zu ändern, und dann auf <kbd>Save changes</kbd>.
- Klicken Sie auf <kbd>Reset</kbd>, um den Zähler auf 0 zurückzusetzen und eine neue Runde zu starten. Dabei werden auch die Zähler der Regeln des Codes zurückgesetzt.

## Gut zu wissen

- Lassen Sie die URL für erreichte Limits leer, sehen Personen die kurze Meldung *This QR code has reached its scan limit*.
- Damit die Zählung fair bleibt, werden wiederholte Scans aus demselben Netzwerk nur bis zu 30 Mal pro Stunde und Code gezählt. Diese zusätzlichen Scans öffnen die Seite trotzdem, verbrauchen aber nicht Ihr Limit.
- [Codes für mehrere Standorte](/documentation/multi-location/) können zusätzlich ein eigenes Limit pro Standort haben.
