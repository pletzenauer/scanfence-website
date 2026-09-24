---
title: Was Scannende sehen
description: Was auf dem Smartphone passiert, wenn jemand Ihren Code scannt, und wie Sie es Ihren Besuchern erklären.
---

Wer Ihre Codes scannt, braucht keine App und kein Konto. Die Kamera des Smartphones genügt, wie bei jedem QR-Code.

## Standard-Codes

Das Smartphone öffnet Ihre Seite sofort. Dynamische Codes machen einen kurzen Umweg über ScanFence. Dort werden sie gezählt, und Regeln und Limits greifen. Scannende bemerken davon nichts.

## Codes mit Standortprüfung

Geofence-Codes und Codes für mehrere Standorte öffnen zuerst eine kurze ScanFence-Seite, die nach dem Standort des Smartphones fragt.

1. Das Smartphone zeigt die übliche Abfrage, etwa *„app.scanfence.com möchte Ihren Standort verwenden“*. Die scannende Person tippt auf **Erlauben**.
2. ScanFence vergleicht die Position mit Ihrer Zone. Das dauert ein bis zwei Sekunden, länger, wenn das Smartphone erst ein GPS-Signal finden muss.
3. Das Ergebnis hängt davon ab, wo sich die Person befindet:

| Situation | Geofence-Code | Code für mehrere Standorte |
|---|---|---|
| Innerhalb der Zone | Bestätigt: *"You're at …"* | Weiter zur Seite dieses Standorts |
| Außerhalb | *"You're outside …"*, mit dem Hinweis, näher heranzugehen. Ein erneuter Versuch ist möglich. | Weiter zur Ausweichseite |
| Standort abgelehnt oder nicht verfügbar | Aufforderung, die Ortungsdienste einzuschalten und es erneut zu versuchen | Weiter zur Ausweichseite |

> **Schreiben Sie einen Satz neben den Code** auf Ihr Schild, etwa *„Bitte Standort erlauben: Dieser Code funktioniert nur vor Ort.“* Das verringert abgelehnte Berechtigungen deutlich.

## Wenn Scannende abgewiesen werden

- **Die Person ist vor Ort und wird trotzdem abgewiesen.** Das Smartphone hat möglicherweise eine ungenaue Ortung, besonders in Innenräumen. Bitten Sie die Person, an ein Fenster oder nach draußen zu gehen und es erneut zu versuchen. Kommt das häufig vor, vergrößern Sie den [Radius](/documentation/geofences/#choosing-the-right-radius) der Zone.
- **Die Ortung ist ausgeschaltet.** Auf dem iPhone: *Einstellungen → Datenschutz & Sicherheit → Ortungsdienste*, und für den Browser erlauben. Auf Android: die Schnelleinstellungen herunterziehen und *Standort* einschalten.
- **Die Person hat früher „Nicht erlauben“ gewählt.** Der Browser merkt sich das. Sie muss den Standort für die Website in den Browser-Einstellungen erlauben und dann erneut scannen.
- **Viele Scans hintereinander aus einem Netzwerk.** Zum Schutz vor Missbrauch sind Standortprüfungen pro Netzwerk begrenzt. Nach vielen Versuchen innerhalb einer Stunde sehen Scannende *"Too many location checks from your network"* und müssen warten.

## Abgeschaltete, aufgebrauchte und gelöschte Codes

- Ein Code, den Sie auf **inaktiv** gestellt haben, zeigt *"This QR code is inactive"*.
- Ein Code über seinem [Scan-Limit](/documentation/scan-limits/) leitet auf Ihre Seite für erreichte Limits weiter oder zeigt eine kurze Meldung, falls Sie keine festgelegt haben.
- Ein Code im **Papierkorb** funktioniert nicht mehr.
