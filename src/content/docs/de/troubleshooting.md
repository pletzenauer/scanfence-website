---
title: Fehlerbehebung
description: Schnelle Antworten auf die häufigsten Fragen und wie Sie uns erreichen, wenn diese nicht weiterhelfen.
---

## Anmeldung

**"Too many failed attempts. Account locked for …"**
Nach fünf falschen Passwörtern in Folge wird die Anmeldung für 15 Minuten gesperrt. Warten Sie, oder setzen Sie Ihr Passwort über **Forgot password?** zurück.

**Die E-Mail zum Zurücksetzen kommt nicht an.**
Prüfen Sie Ihren Spam-Ordner und ob Sie die Adresse eingegeben haben, mit der Sie sich registriert haben. Aus Sicherheitsgründen melden wir immer, dass eine E-Mail versendet wurde, auch wenn die Adresse nicht registriert ist.

**"An account with this email already exists."**
Sie haben sich bereits registriert. Melden Sie sich stattdessen an oder setzen Sie Ihr Passwort zurück.

## Codes erstellen

**<kbd>+ Generate QR</kbd> ist ausgegraut.**
Entweder haben Sie keinen aktiven Tarif, oder Sie haben das Code-Limit Ihres Tarifs erreicht. Prüfen Sie den Zähler oben auf der Seite QR Codes. Siehe [Tarife und Limits](/documentation/plans-and-limits/).

**"Error creating geofence".**
Der Radius liegt vermutlich unter 50 m. Geofences müssen zwischen 50 m und 5.000 m groß sein.

**Die Adresssuche setzt die Markierung an die falsche Stelle.**
Geben Sie die Adresse genauer an (Straße, Hausnummer, Ort, Land), oder klicken Sie in Google Maps mit der rechten Maustaste auf die genaue Stelle, kopieren Sie die Koordinaten und fügen Sie sie unter Latitude und Longitude ein.

## Scannen

**Personen vor Ort erhalten die Meldung, sie seien außerhalb.**
Ihre GPS-Ortung ist ungenau, typischerweise in Innenräumen. Vergrößern Sie den Radius, siehe [Den richtigen Radius wählen](/documentation/geofences/#choosing-the-right-radius). **Location accuracy** unter [Auswertungen](/documentation/analytics/) zeigt, wie genau Smartphones an Ihrem Standort sind.

**Scannende werden nie nach ihrem Standort gefragt.**
Sie haben ihn einmal abgelehnt, und der Browser merkt sich das. Siehe [Wenn Scannende abgewiesen werden](/documentation/scanning/#if-a-scanner-is-refused).

**Ich habe das Ziel geändert, aber Personen erhalten noch die alte Seite.**
Nur dynamische Codes lassen sich ändern. Bei einem statischen Code ist der Link direkt im Muster gedruckt. Erstellen Sie einen dynamischen Code und drucken Sie neu. Ist der Code dynamisch, prüfen Sie, ob gerade eine Zeitregel aktiv ist, denn Regeln haben Vorrang vor der Standardseite.

**Der Code zeigt „inactive“ oder „reached its scan limit“.**
Schalten Sie ihn auf der Karte des Codes wieder ein, oder erhöhen bzw. setzen Sie das Limit dort zurück. Siehe [Scan-Limits](/documentation/scan-limits/).

## Zahlen

**Meine Scans werden nicht gezählt.**
Statische Standard-Codes werden nicht erfasst. Machen Sie den Code dynamisch. Sehr schnelle Wiederholungsscans aus einem Netzwerk werden nur bis zu 30 Mal pro Stunde und Code gezählt.

**Die Auswertung ist leer.**
Prüfen Sie den Zeitraum oben und entfernen Sie die Tag-Filter.

## Team

**Ich kann niemanden einladen.**
Alle Plätze sind belegt, oder Ihre Rolle ist *Field user*. Siehe [Team und Rollen](/documentation/team/).

**Der Einladungslink einer Kollegin oder eines Kollegen funktioniert nicht.**
Einladungen laufen nach 7 Tagen ab. Ziehen Sie sie auf der Seite Team zurück und senden Sie eine neue.

## Kontakt

Öffnen Sie **Support** im Menü der App oder schreiben Sie an [hello@scanfence.com](mailto:hello@scanfence.com). Nennen Sie Ihre Benutzer-ID aus **My Settings**, den Namen des Codes und, wenn möglich, fügen Sie einen Screenshot bei. Für Hilfe bei der Einrichtung, eine Kampagnenprüfung oder den Umzug von einem anderen QR-Tool können Sie auf der Support-Seite eine kostenpflichtige persönliche Sitzung buchen.

<figure><img src="/images/docs/support-dark.webp" alt="Die Seite Support mit Kontaktwegen und buchbaren Hilfe-Sitzungen" width="1600" height="1250" loading="lazy"><figcaption>Die Support-Seite in der App.</figcaption></figure>
