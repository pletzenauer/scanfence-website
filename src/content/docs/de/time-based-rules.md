---
title: Zeitregeln
description: Leiten Sie Scannende zu bestimmten Tageszeiten, an bestimmten Wochentagen oder in einem Zeitraum auf eine andere Seite, ohne den Code neu zu drucken.
---

Eine Zeitregel gibt einem Code ein zweites Ziel, das nur gilt, solange ihre Bedingungen erfüllt sind. Außerhalb dieser Zeiten funktioniert der Code wie gewohnt.

**Beispiele**

- Ein Tischcode im Restaurant öffnet werktags von 11:30 bis 15:00 Uhr die Mittagskarte und sonst die reguläre Speisekarte.
- Ein Plakat verlinkt bis zur Veranstaltung auf den Ticketshop und danach auf die Fotogalerie.
- Ein Code im Schaufenster zeigt während der Öffnungszeiten „Wir haben geöffnet, kommen Sie herein“ und nachts den Onlineshop.

## Regel hinzufügen

1. Klicken Sie auf der Karte des Codes auf <kbd>Add time-based rules</kbd>. Sie können **Time-based rules** auch schon beim Erstellen eines Codes einschalten.
2. Schalten Sie **Time-based rules** ein.
3. Geben Sie die **Time-based destination URL** ein: wohin Personen gelangen, solange die Regel gilt.
4. Schalten Sie die benötigten Bedingungen ein:
   - **Time of day:** eine Uhrzeit für **Open** und **Close**, zum Beispiel 09:00 bis 17:00.
   - **Days of week:** Klicken Sie auf die gewünschten Tage. Montag bis Freitag ist vorausgewählt.
   - **Date range:** ein Start- und Enddatum.
5. Klicken Sie auf <kbd>Save rules</kbd>.

<figure class="medium"><img src="/images/docs/qr-time-rules-dark.webp" alt="Das Fenster Edit time-based rules mit Tageszeit 09:00 bis 17:00 und ausgewählten Tagen Montag bis Freitag" width="1008" height="1197" loading="lazy"><figcaption>Diese Regel gilt werktags von 9:00 bis 17:00 Uhr. Zu allen anderen Zeiten öffnet der Code seine Standardseite.</figcaption></figure>

## Wie Bedingungen zusammenwirken

**Alle eingeschalteten Bedingungen müssen gleichzeitig zutreffen.** Mit *Time of day 09:00–17:00* und *Mon–Fri* gilt die Regel werktags während der Bürozeiten, nicht aber am Samstag um 12 Uhr.

Schalten Sie die Regel ein, aber keine Bedingung, gilt sie immer.

## Regel ändern oder entfernen

Klicken Sie auf der Karte auf <kbd>View time-based rules</kbd>, um den Zeitplan zu sehen, und bearbeiten Sie ihn. Um eine Regel zu entfernen, schalten Sie **Time-based rules** aus und klicken auf <kbd>Save rules</kbd>.

Jeder Code hat eine Regel. Für einen Code mit mehreren Zeitfenstern, etwa Frühstück, Mittag- und Abendessen, verwenden Sie einen [Code für mehrere Standorte](/documentation/multi-location/). Dort kann jeder Standort einen eigenen Zeitplan und eine eigene Priorität haben.

## Tipps

- Regeln setzen einen dynamischen Code voraus. Wenn Sie beim Erstellen eines Codes eine Regel einschalten, wird er automatisch dynamisch.
- Testen Sie eine neue Regel vor dem Druck, indem Sie innerhalb und außerhalb ihres Zeitfensters scannen.
- Vergleichen Sie den Verkehr über Regeln und Standardseite unter **Rule type distribution** und **Time-based rule performance** auf der Seite [Auswertungen](/documentation/analytics/).
