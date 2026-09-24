---
title: Códigos multiubicación
description: Un código impreso, hasta diez lugares, cada uno con su propio destino, horario y límite de escaneos.
---

Un código multiubicación comprueba dónde está quien escanea y lo envía a la página de la zona en la que se encuentra. Si está en varias zonas a la vez, se elige la más cercana. Quien esté fuera de todas las zonas va a la **URL alternativa**.

**Ejemplo:** una cadena imprime el mismo cartel de mesa para todas sus cafeterías. En cada cafetería, el código abre el menú de esa cafetería; en casa, abre el sitio web de la cadena.

## Crear uno

1. En **QR Codes**, haga clic en <kbd>+ Generate QR</kbd> y elija **Multi-location**.
2. Escriba la **Fallback URL (Default)**: adónde van las personas cuando no están en ninguna de sus ubicaciones o no comparten su ubicación.
3. Haga clic en **Add location** y rellene:
   - **Label/Name**, p. ej. *Café Casco Antiguo*
   - **Search by address**, o **Latitude** y **Longitude**
   - **Radius (meters)**
   - **Destination URL** para este lugar
4. Repita hasta un máximo de **10 ubicaciones**. Las entradas incompletas se marcan como *(incomplete)* hasta que se rellenen todos los campos.
5. Haga clic en <kbd>Generate QR →</kbd>.

## Opciones por ubicación

Cada ubicación puede tener su propio:

- **Horario**, con **Time of day**, **Days of week** y **Date range**, además de una **Priority** del 1 al 10. Úselo cuando un lugar solo deba contar durante su horario de apertura.
- **Límite de escasez:** los primeros N escaneos en esta ubicación reciben su página; todos los demás reciben la **Fallback URL (when limit reached)** propia de la ubicación.

## Editar ubicaciones y ver sus cifras

En la tarjeta del código, haga clic en <kbd>Edit locations & stats</kbd>. La ventana **Location rules & statistics** muestra todas las zonas en un mapa, con un color por ubicación. Debajo del mapa puede buscar en la lista, añadir, editar o eliminar ubicaciones, y ver las estadísticas de escaneo, el máximo de escaneos y las reglas horarias de cada una.

<figure><img src="/images/docs/multi-overview-dark.webp" alt="La ventana Location rules and statistics con tres cafeterías representadas como círculos de colores en un mapa de la ciudad" width="1600" height="1250" loading="lazy"><figcaption>Tres ubicaciones de un código en un mapa compartido. Los usuarios de campo pueden ver esta ventana, pero no modificarla.</figcaption></figure>

## Consejos

- Siempre que pueda, evite que las zonas se superpongan. Donde se superpongan, gana el centro más cercano.
- Un código multiubicación cuenta como un solo código en su plan, tenga las ubicaciones que tenga.
- Los códigos multiubicación siempre pasan por ScanFence, así que puede editar cada ubicación más adelante sin volver a imprimir.
