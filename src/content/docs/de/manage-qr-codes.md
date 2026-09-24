---
title: Codes verwalten
description: QR-Codes finden, herunterladen, bearbeiten, abschalten und löschen und mit Kategorien und Tags ordnen.
---

<figure><img src="/images/docs/qr-codes-dark.webp" alt="Die Seite QR Codes in der Rasteransicht mit Suche, Filtern und Code-Karten" width="1600" height="1250" loading="lazy"><figcaption>Die Seite QR Codes. Der Zähler oben zeigt, wie viele Codes Ihr Tarif erlaubt.</figcaption></figure>

## Die Werkzeugleiste

- **Active / Trash** wechselt zwischen Ihren aktiven Codes und den gelöschten.
- **Grid / List** ändert die Darstellung. Ihr Browser merkt sich die Wahl.
- **My QR codes / All users** (nur Admins) zeigt Ihre eigenen Codes, die aller Personen oder die einer bestimmten Person.
- <kbd>Bulk</kbd> lässt Sie mehrere Codes markieren und auf einmal in den Papierkorb verschieben.
- <kbd>Upload</kbd> importiert viele Codes aus einer Tabelle, sofern der Massen-Upload für Ihr Konto aktiviert ist. Siehe [Massen-Upload](/documentation/bulk-upload/).
- <kbd>+ Generate QR</kbd> erstellt einen neuen Code. Siehe [QR-Code erstellen](/documentation/create-qr-codes/).

## Suchen und filtern

Das Suchfeld findet Codes nach Name, Link, Ausweich-Link, Geofence-Name oder Limit-Link. Klicken Sie auf **Filters**, um die Liste nach **Kategorie** oder **Tags** einzugrenzen. Sind mehrere Tags gewählt, werden Codes mit mindestens einem davon angezeigt. **Clear all filters** setzt alles zurück.

## Die Karte eines Codes

<figure class="narrow"><img src="/images/docs/qr-card-dark.webp" alt="Eine einzelne QR-Code-Karte mit Typ, Name, Aktiv-Schalter, QR-Bild, Tags und Aktionsschaltflächen" width="471" height="1356" loading="lazy"><figcaption>Jede Karte enthält den Code und alle zugehörigen Aktionen.</figcaption></figure>

Von oben nach unten:

- **Typ und Name**, zum Beispiel *Geofence* oder *Standard · Dynamic*.
- **Schalter Active / Inactive.** Klicken Sie darauf, um einen dynamischen Code abzuschalten, etwa am Ende einer Kampagne. Inaktive Codes funktionieren nicht mehr, bis Sie sie wieder einschalten.
- **Das QR-Bild**, gefolgt von Kategorie, Tags und Ziel.
- <kbd>PNG</kbd> und <kbd>SVG</kbd> laden das Bild herunter. Verwenden Sie SVG für den Druck: Es bleibt in jeder Größe scharf. PNG eignet sich für Präsentationen und Dokumente.
- <kbd>Copy</kbd> kopiert den Link im Code, praktisch zum Testen am Computer.
- <kbd>Delete</kbd> verschiebt den Code in den Papierkorb.
- <kbd>Edit category & tags</kbd> ordnet den Code neu zu.
- <kbd>Edit redirect URL</kbd> (dynamische Codes) ändert, wohin der Code führt. Die Änderung gilt ab dem nächsten Scan, und der gedruckte Code bleibt gleich.
- <kbd>View analytics</kbd> öffnet die Scans dieses Codes: Summen, eine Karte, die letzten 100 Scans sowie CSV- oder PDF-Export.
- <kbd>View location</kbd> (Geofence-Codes) zeigt die Zone auf einer Karte.
- <kbd>Edit locations & stats</kbd> (Codes für mehrere Standorte) öffnet den Standort-Editor.
- <kbd>Add time-based rules</kbd> / <kbd>View time-based rules</kbd>. Siehe [Zeitregeln](/documentation/time-based-rules/).
- **Scans & limits** zeigt die Zahl der Scans und ein etwaiges Limit. Siehe [Scan-Limits](/documentation/scan-limits/).

## Listenansicht

Die Listenansicht zeigt mehr Codes auf einmal, mit denselben Aktionen in einer kompakten Zeile. Sie eignet sich für lange Listen und die Mehrfachauswahl.

<figure><img src="/images/docs/qr-list-dark.webp" alt="Die Seite QR Codes in der Listenansicht" width="1600" height="1250" loading="lazy"><figcaption>Listenansicht.</figcaption></figure>

## Kategorien und Tags

Verwenden Sie **Kategorien** für die Hauptgruppierung (eine pro Code, mit Farbe) und **Tags** für alles Weitere (beliebig viele).

- **Kategorien:** **Filters → Manage categories**. Anlegen, umbenennen, umfärben oder löschen. Wird eine Kategorie gelöscht, verschwindet sie von allen Codes, die Codes selbst bleiben erhalten.
- **Tags:** **My Settings → Tags**, oder direkt beim Erstellen eines Codes.

## Papierkorb und Wiederherstellen

<kbd>Delete</kbd> entfernt einen Code nicht endgültig, sondern verschiebt ihn in den **Papierkorb**. Ein Code im Papierkorb **funktioniert sofort nicht mehr**. Wer ihn scannt, erhält eine Fehlermeldung statt Ihrer Seite.

<figure><img src="/images/docs/qr-trash-dark.webp" alt="Die Papierkorb-Ansicht mit den Schaltflächen zum Wiederherstellen und endgültigen Löschen" width="1600" height="1250" loading="lazy"><figcaption>Der Papierkorb. Ein wiederhergestellter Code funktioniert wieder genau wie vorher.</figcaption></figure>

Im Papierkorb können Sie:

- Einen Code mit <kbd>Restore</kbd> wiederherstellen. Er kommt mit allen Einstellungen zurück und funktioniert wieder.
- Einen Code mit <kbd>Delete forever</kbd> endgültig löschen. Das lässt sich nicht rückgängig machen.
- Mehrere Codes auswählen und gemeinsam wiederherstellen oder löschen.

Codes im Papierkorb zählen nicht zum Limit Ihres Tarifs.

<div class="warn"><strong>Vorsicht bei gedruckten Codes.</strong> Bevor Sie einen bereits gedruckten Code löschen, schalten Sie ihn besser ab oder leiten Sie ihn mit <em>Edit redirect URL</em> auf eine Seite wie „Dieses Angebot ist beendet“.</div>
