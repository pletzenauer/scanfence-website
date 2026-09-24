---
title: Auswertungen
description: Karten, Diagramme und Exporte Ihrer Scans, für den ganzen Workspace oder für einen einzelnen Code.
---

## Die Seite Analytics

Öffnen Sie **Analytics** im Menü. Standardmäßig sehen Sie die letzten 7 Tage.

<figure><img src="/images/docs/analytics-dark.webp" alt="Die Seite Analytics mit Kennzahl-Kacheln, Zeitraum, Filtern und der Scan-Karte" width="1600" height="1250" loading="lazy"><figcaption>Auswertungen für den gewählten Zeitraum.</figcaption></figure>

### Kennzahl-Kacheln

- **Today's scans:** Scans seit Mitternacht, live aktualisiert.
- **Active users:** Personen, die in den letzten 5 Minuten gescannt haben.
- **Avg accuracy:** wie genau das GPS der Smartphones im Schnitt war, in Metern. Niedriger ist besser.
- **High precision:** Scans mit einer Genauigkeit von unter 20 m.

### Zeitraum und Filter

Wählen Sie unter **Date range** ein **Start-** und **Enddatum**. Unter **Filters** klicken Sie auf Tags, um nur Codes mit diesen Tags anzuzeigen. **Clear** setzt die Filter zurück.

### Diagramme

| Bereich | Zeigt Ihnen |
|---|---|
| **Scan locations · map** | Wo gescannt wurde. Grüne Punkte lagen innerhalb einer Zone, rote außerhalb, blaue sind gemischt oder unbekannt. Nahe beieinanderliegende Scans werden gruppiert. Zoomen Sie hinein, um sie aufzuteilen. |
| **Scans over time** | Scans pro Tag. Hilfreich, um die Wirkung einer Kampagne oder Veranstaltung zu erkennen. |
| **Compliance rate** | Innerhalb gegenüber außerhalb eines Geofence, als Ringdiagramm. |
| **Location accuracy** | Wie viele Scans ein sehr gutes (unter 10 m), gutes (10–20 m), mittleres (20–50 m) oder schlechtes (über 50 m) GPS hatten. Viele *poor*-Scans deuten auf einen Ort in Innenräumen hin. Erwägen Sie einen größeren Radius. |
| **Live scan feed** | Die letzten zehn Scans in Echtzeit. |
| **Scans by geofence · top 10** | Ihre meistgenutzten Codes. |
| **Rule type distribution** | Wie viele Scans über eine Zeitregel, über den Standort oder auf die Standardseite geleitet wurden. |
| **Time-based rule performance** | Wie oft jede Zeitregel gegriffen hat. |

### Export

<kbd>Export CSV →</kbd> lädt alle Scans im gewählten Zeitraum als Tabelle herunter: Datum, Uhrzeit, Benutzer, Geofence, innerhalb oder außerhalb, Entfernung, Koordinaten, Genauigkeit, Höhe, Geschwindigkeit, Akkustand und Netzwerktyp. Öffnen Sie die Datei in Excel, Numbers oder Google Sheets.

## Auswertung für einen Code

Klicken Sie auf der Karte eines Codes auf <kbd>View analytics</kbd>. Das Fenster zeigt die Gesamtzahl der Scans, die Scans mit Standort und den Zeitpunkt des letzten Scans, darunter eine Karte und die neuesten Scans mit Details.

<figure><img src="/images/docs/qr-analytics-dark.webp" alt="Das Auswertungsfenster eines einzelnen Codes mit Summen, Export-Schaltflächen und einer Karte der Scan-Orte" width="1600" height="1250" loading="lazy"><figcaption>Auswertung pro Code. Die Karte färbt Scans danach, wie viele am selben Ort stattfanden.</figcaption></figure>

Von hier aus exportieren Sie die Scans des Codes als **CSV** oder als **PDF**-Bericht, praktisch zum Weitergeben an Kunden oder Vorgesetzte. Das Fenster zeigt die letzten 100 Scans. Die Seite Analytics und ihr Export umfassen mehr.

## Was gezählt wird

- Statische Standard-Codes werden nicht gezählt: Das Smartphone öffnet Ihren Link direkt, ohne ScanFence dazwischen. Machen Sie Codes dynamisch, um sie zu erfassen. Siehe [Statisch oder dynamisch](/documentation/create-qr-codes/#static-or-dynamic).
- Damit die Zahlen aussagekräftig bleiben, werden gehäufte Wiederholungsscans aus demselben Netzwerk nur bis zu 30 Mal pro Stunde und Code gezählt.
