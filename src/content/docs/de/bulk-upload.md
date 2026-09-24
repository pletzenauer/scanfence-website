---
title: Massen-Upload
description: Dutzende oder Hunderte QR-Codes auf einmal aus einer CSV-Tabelle erstellen.
---

Der Massen-Upload ist praktisch, wenn Sie viele ähnliche Codes brauchen: einen pro Tisch, pro Produkt, pro Filiale. Sie füllen eine Tabelle aus, speichern sie als CSV und laden sie hoch. ScanFence erstellt pro Zeile einen Code.

> Der Massen-Upload wird vom ScanFence-Team freigeschaltet. Wenn Sie auf der Seite QR Codes keine Schaltfläche <kbd>Upload</kbd> sehen, [schreiben Sie uns](mailto:hello@scanfence.com), damit wir ihn aktivieren.

## Schritt für Schritt

1. Klicken Sie auf der Seite **QR Codes** auf <kbd>Upload</kbd>.
2. Klicken Sie auf **Download sample CSV →**, um `qr-codes-bulk-template.csv` mit Beispielzeilen zu erhalten.
3. Öffnen Sie die Datei in Excel, Numbers oder Google Sheets und füllen Sie pro Code eine Zeile aus. Lassen Sie die erste Zeile (die Spaltennamen) unverändert.
4. Speichern oder exportieren Sie die Datei als **CSV**.
5. Wählen Sie im Upload-Fenster unter **Upload your CSV file** Ihre Datei aus. Der Upload beginnt, sobald Sie sie ausgewählt haben.
6. **Upload results** zeigt dann, wie viele Codes erstellt wurden und, falls Zeilen fehlgeschlagen sind, welche und warum.

<figure class="medium"><img src="/images/docs/qr-bulk-upload-dark.webp" alt="Das Fenster Bulk upload QR codes mit den Pflicht-, optionalen, Scan-Limit- und Geofence-Spalten" width="1344" height="1350" loading="lazy"><figcaption>Das Upload-Fenster listet alle Spalten auf, die die Datei enthalten kann.</figcaption></figure>

## Spalten

| Spalte | Pflicht | Inhalt |
|---|---|---|
| `type` | Ja | `standard` oder `geofence` |
| `content` | Ja | Der Link oder Text. Bei dynamischen Codes das Ziel. |
| `name` | Nein | Ein Anzeigename, z. B. *Tisch 12* |
| `category` | Nein | Der Name einer bestehenden Kategorie |
| `tags` | Nein | Bestehende Tag-Namen, getrennt durch `;` |
| `is_dynamic` | Nein | `true` für einen dynamischen Code, sonst leer lassen oder `false` |
| `global_scan_limit` | Nein | Eine Zahl, z. B. `100`. Siehe [Scan-Limits](/documentation/scan-limits/) |
| `limit_reached_url` | Nein | Wohin Personen gelangen, sobald das Limit erreicht ist |
| `geofence_lat` | Bei Geofence | Breitengrad, z. B. `48.2082` |
| `geofence_lng` | Bei Geofence | Längengrad, z. B. `16.3738` |
| `geofence_radius` | Nein | Radius in Metern, 50 bis 5,000. Standard 50 |

### Beispiel

```
name,type,category,content,is_dynamic,global_scan_limit,limit_reached_url,geofence_lat,geofence_lng,geofence_radius,tags
Table 1,geofence,Menus,https://example.com/menu,true,,,48.2082,16.3738,60,tables;indoor
Launch offer,standard,Marketing,https://example.com/offer,true,100,https://example.com/sold-out,,,,promo
```

## Tipps

- **Legen Sie Kategorien und Tags zuerst an.** Namen, die noch nicht existieren, werden übersprungen, und der Code wird ohne sie erstellt.
- **Koordinaten finden** Sie per Rechtsklick auf einen Punkt in Google Maps: Der erste Eintrag im Menü lautet *Breitengrad, Längengrad*.
- **Codes für mehrere Standorte** lassen sich nicht per Tabelle anlegen. Erstellen Sie sie in der App. Siehe [Codes für mehrere Standorte](/documentation/multi-location/).
- **Zeilenfehler** nennen die Zeile, zum Beispiel *Row 4: Missing required fields (type or content)* oder *Row 7: Geofence type requires valid geofence_lat and geofence_lng*. Korrigieren Sie diese Zeilen und laden Sie nur sie erneut hoch. Die erfolgreichen Zeilen sind bereits angelegt.
- Per Massen-Upload erstellte Codes zählen wie alle anderen Codes zum Limit Ihres Tarifs.
