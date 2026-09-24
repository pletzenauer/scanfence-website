---
title: QR-Code erstellen
description: "Die drei Code-Typen, statisch oder dynamisch, und alle Felder im Fenster \"Generate a code\"."
---

Öffnen Sie **QR Codes** im Menü und klicken Sie auf <kbd>+ Generate QR</kbd>. Das Fenster **Generate a code** öffnet sich. <kbd>Generate QR →</kbd> bleibt ausgegraut, bis alles ausgefüllt ist, was der gewählte Typ benötigt.

<figure><img src="/images/docs/qr-new-standard-dark.webp" alt="Das Fenster Generate a code mit den drei Code-Typen Standard, Geofence und Multi-location" width="1344" height="1227" loading="lazy"><figcaption>Wählen Sie zuerst den Typ. Der Rest des Formulars passt sich daran an.</figcaption></figure>

## Typ wählen

| Typ | Geeignet, wenn | Scannende erhalten |
|---|---|---|
| **Standard** | Alle überall dasselbe bekommen sollen. | Ihren Link oder Text. |
| **Geofence** | Der Code nur an einem Ort funktionieren soll: an einem Check-in-Punkt, einem Tisch, einem Geschäft. | Zugang, wenn sie sich in Ihrer Zone befinden, andernfalls einen Hinweis, dass sie außerhalb sind. |
| **Multi-location** | Ein gedrucktes Motiv an mehreren Orten verwendet wird und jeder Ort seine eigene Seite öffnen soll. | Die Seite der nächstgelegenen Zone, in der sie sich befinden, oder eine Ausweichseite. |

## Felder für alle Typen

- **QR code name** (optional). Ein sprechender Name wie *Sommerkampagne 2026*. Er erscheint in Listen, Auswertungen und Exporten und lohnt sich daher.
- **Category** (optional). Eine farbcodierte Kategorie pro Code, zum Beispiel *Speisekarten* oder *Veranstaltungen*. Sie können die Codeliste danach filtern. Kategorien verwalten Sie auf der Seite QR Codes unter **Filters → Manage categories**.
- **Tags** (optional). Beliebig viele. Wählen Sie mit **Add tag** einen bestehenden Tag oder legen Sie mit **Create new tag** direkt einen neuen an.

## Standard-Codes

Geben Sie unter **URL or text** eine Webadresse oder beliebigen Text ein. Auch Text funktioniert: Das Smartphone zeigt ihn einfach an.

## Geofence-Codes

Ein Geofence-Code fragt das Smartphone der scannenden Person nach seinem Standort und lässt sie nur innerhalb der Zone durch.

1. Geben Sie einen **Geofence name** ein, etwa *Haupteingang*.
2. Geben Sie unter **Search by address** eine Adresse ein und klicken Sie auf **Search**, oder tragen Sie **Latitude** und **Longitude** selbst ein. Sobald die Position feststeht, erscheint eine Kartenvorschau.
3. Legen Sie den **Radius (meters)** fest. Verwenden Sie mindestens 50 m: Das GPS von Smartphones ist selten genauer, besonders in Innenräumen.
4. Geben Sie unter **URL or text · inside fence** ein, was Personen erhalten sollen, die die Prüfung bestehen.

<figure><img src="/images/docs/qr-new-geofence-dark.webp" alt="Der Geofence-Bereich im Fenster Generate a code mit Name, Adresssuche, Breitengrad, Längengrad und Radius" width="1344" height="1350" loading="lazy"><figcaption>Suchen Sie die Adresse und prüfen Sie dann die Markierung in der Kartenvorschau.</figcaption></figure>

Jeder Geofence-Code legt eine eigene neue Zone an, die dann auch auf der Seite **Geofences** erscheint. Dort können Sie sie später verschieben oder ihren Radius ändern. Siehe [Geofences](/documentation/geofences/).

## Codes für mehrere Standorte

Legen Sie eine **Fallback URL** für alle fest, die sich außerhalb sämtlicher Zonen befinden, und klicken Sie dann für jeden Ort auf **Add location** (bis zu 10). Jeder Standort hat eine eigene Adresse, einen eigenen Radius und ein eigenes Ziel, optional auch einen eigenen Zeitplan und ein eigenes Scan-Limit. Dieser Typ hat eine eigene Seite: [Codes für mehrere Standorte](/documentation/multi-location/).

<figure><img src="/images/docs/qr-new-multi-dark.webp" alt="Der Bereich für mehrere Standorte mit der Fallback-URL und einer leeren Liste für bis zu zehn Standorte" width="1344" height="1350" loading="lazy"><figcaption>Mehrere Standorte: eine Ausweichseite plus bis zu zehn Zonen.</figcaption></figure>

## Statisch oder dynamisch

Setzen Sie ein Häkchen bei **Make this a dynamic QR code**, um einen Code dynamisch zu machen. Das Feld darüber heißt dann **Destination URL**.

| | Statisch | Dynamisch |
|---|---|---|
| Was im gedruckten Code steckt | Ihr Link selbst | Ein kurzer ScanFence-Link, der weiterleitet |
| Ziel später ändern | Nein, Sie müssten neu drucken | Ja, jederzeit |
| Scans gezählt und in Auswertungen sichtbar | Nein (Standard-Codes) | Ja |
| Zeitregeln und Scan-Limits | Nein (Standard-Codes) | Ja |
| Code abschalten | Nein (Standard-Codes) | Ja |

> **Faustregel:** Wenn der Code auf etwas Gedrucktes kommt, machen Sie ihn dynamisch. Statische Codes eignen sich für Dinge, die sich nie ändern, etwa Ihr WLAN-Passwort.

Wenn Sie in diesem Fenster Zeitregeln aktivieren, wird der Code automatisch dynamisch. Codes für mehrere Standorte laufen immer über ScanFence und zeigen die Option daher nicht an.

## Optionale Extras

Zwei Bereiche unten im Fenster können Sie jetzt oder später über die Karte des Codes einstellen:

- **Global scarcity limit:** nach einer bestimmten Zahl von Scans stoppen und alle Weiteren auf eine andere Seite leiten. Siehe [Scan-Limits](/documentation/scan-limits/).
- **Time-based rules:** ein anderes Ziel zu bestimmten Uhrzeiten, an bestimmten Tagen oder Daten. Siehe [Zeitregeln](/documentation/time-based-rules/).

## Wenn etwas fehlt

Das Fenster sagt Ihnen, was es braucht, zum Beispiel *Please enter URL or text*, *Please complete all geofence location fields* oder *Please add at least one location*. Erscheint *QR code limit reached*, haben Sie alle Codes Ihres Tarifs verbraucht. Verschieben Sie nicht mehr benötigte Codes in den Papierkorb oder [wechseln Sie in einen größeren Tarif](/documentation/plans-and-limits/).
