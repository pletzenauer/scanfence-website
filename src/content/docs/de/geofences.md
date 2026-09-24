---
title: Geofences
description: Zeichnen Sie eine Zone auf der Karte, damit Ihre QR-Codes nur für Personen funktionieren, die tatsächlich vor Ort sind.
---

Ein Geofence ist ein Kreis auf der Karte: ein Mittelpunkt und ein Radius zwischen **50 m und 5.000 m**. Wenn jemand einen Code scannt, der mit einem Geofence verknüpft ist, meldet das Smartphone seinen Standort, und ScanFence prüft, ob dieser Punkt im Kreis liegt.

**Typische Einsätze:** Check-ins, die nur vor Ort zählen, Tischbestellungen, die nur im Restaurant funktionieren, Veranstaltungsinhalte nur für Anwesende, Anwesenheitserfassung von Mitarbeitenden an einem Einsatzort.

## Die Seite Geofences

<figure><img src="/images/docs/geofences-dark.webp" alt="Die Seite Geofences mit vier Zonen, Mittelpunktkoordinaten, Radius, Status sowie Bearbeiten- und Löschen-Aktionen" width="1600" height="1250" loading="lazy"><figcaption>Alle Zonen Ihres Workspace in einer Tabelle.</figcaption></figure>

Für jede Zone zeigt die Tabelle **Name** und Beschreibung, die Koordinaten des **Mittelpunkts**, den **Radius** und den **Status**.

- Klicken Sie auf **Active / Inactive**, um eine Zone ein- oder auszuschalten.
- <kbd>Edit</kbd> öffnet die Zone, um sie zu verschieben oder ihre Größe zu ändern.
- <kbd>Delete</kbd> entfernt die Zone endgültig.

## Zone anlegen oder bearbeiten

1. Klicken Sie auf <kbd>+ New geofence</kbd> oder bei einer bestehenden Zone auf <kbd>Edit</kbd>.
2. Geben Sie einen **Name** und bei Bedarf eine **Description** ein, etwa *Laderampe 1–4*.
3. Geben Sie unter **Address search** eine Adresse ein und klicken Sie auf <kbd>Search</kbd>. Die Karte springt dorthin.
4. Justieren Sie den Mittelpunkt durch **Klicken in die Karte**. Die Koordinaten über der Karte werden dabei aktualisiert.
5. Ziehen Sie den Schieberegler **Radius**. Der Hinweis darunter übersetzt Meter in Häuserblocks.
6. Klicken Sie auf <kbd>Create geofence →</kbd> oder <kbd>Update geofence →</kbd>.

<figure><img src="/images/docs/geofence-edit-dark.webp" alt="Das Fenster Edit geofence mit Name, Beschreibung, Radius-Schieberegler auf 75 Metern, Adresssuche und einer Karte mit der Zone" width="1600" height="1250" loading="lazy"><figcaption>Eine Zone bearbeiten. Klicken Sie an eine beliebige Stelle der Karte, um den Mittelpunkt zu verschieben.</figcaption></figure>

## Den richtigen Radius wählen

Smartphones kennen ihre Position nicht exakt. Im Freien ist GPS meist auf 5–20 m genau, in Innenräumen, dicht bebauten Innenstädten oder unter der Erde können es 50 m oder mehr sein. Wählen Sie einen Radius, der den Ort **plus** diese Ungenauigkeit abdeckt.

| Ort | Empfohlener Radius |
|---|---|
| Ein einzelnes Geschäft, Café oder ein Stand | 50–100 m |
| Ein Veranstaltungsort, Hotel, Bürogebäude | 100–250 m |
| Ein Festivalgelände, Campus, Resort | 250–1,000 m |
| Ein Stadtteil oder eine Kleinstadt | 1,000–5,000 m |

> **Testen Sie vor Ort.** Scannen Sie den Code vor dem Druck an den Rändern des Ortes, idealerweise auch in Innenräumen. Werden Personen im Inneren abgewiesen, vergrößern Sie den Radius.

## Einen Code mit einer Zone verknüpfen

Zonen entstehen zusammen mit Codes: Wählen Sie im Fenster **Generate a code** den Typ **Geofence** und füllen Sie die Standortfelder aus. Siehe [QR-Code erstellen](/documentation/create-qr-codes/#geofence-codes). Die neue Zone erscheint dann auch auf der Seite Geofences, wo Sie sie später ohne Neudruck anpassen können.

Sie möchten einen Code, der an mehreren Orten mit jeweils eigener Seite funktioniert? Verwenden Sie einen [Code für mehrere Standorte](/documentation/multi-location/).

## Datenschutz

Der Standort wird nur im Moment des Scannens abgefragt und nur bei Codes, die ihn benötigen. Scannende sehen die übliche Berechtigungsabfrage ihres Smartphones und können ablehnen. Ihre Position wird für die Prüfung verwendet und kann für Ihre Auswertungen mit dem Scan gespeichert werden. ScanFence verfolgt niemanden vor oder nach dem Scan.
