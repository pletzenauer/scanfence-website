---
title: Panel
description: Las cifras del día y los últimos escaneos en tiempo real, la primera pantalla tras iniciar sesión.
---

<figure><img src="/images/docs/dashboard-dark.webp" alt="El panel con cuatro recuadros de cifras y la tabla de actividad de escaneos reciente" width="1600" height="1250" loading="lazy"><figcaption>El panel se actualiza en tiempo real, sin necesidad de recargar.</figcaption></figure>

## Los cuatro recuadros

| Recuadro | Muestra |
|---|---|
| **Scans · today** | Todos los escaneos de los códigos de su espacio de trabajo desde la medianoche. |
| **Compliance** | El porcentaje de los escaneos de hoy con comprobación de ubicación que se produjeron dentro de una geocerca. Con un 90 % o más aparece *healthy*; por debajo, *watch*. |
| **Geofences** | Cuántas de sus zonas están activas. |
| **Active users** | Cuántas personas hay en su espacio de trabajo. |

Una tasa de cumplimiento en descenso suele significar una de dos cosas: hay personas que prueban los códigos lejos del lugar, o una zona es demasiado pequeña para la precisión del GPS en ese sitio. [Estadísticas](/documentation/analytics/) le muestra cuál de las dos.

## Actividad de escaneos reciente

La tabla muestra los últimos diez escaneos a medida que ocurren:

- **When:** fecha y hora del escaneo.
- **User · QR:** quién escaneó y qué código. El público general aparece como *Anonymous*.
- **Verdict:** *Verified* dentro de una zona, *Blocked* fuera.
- **Where:** la zona con la que se comprobó el escaneo.
- **Delta:** la distancia al centro de la zona.

## Avisos que puede ver

- **Invitaciones a equipos:** alguien le invitó a su espacio de trabajo. Haga clic en <kbd>Review</kbd> para aceptar o rechazar. Consulte [Equipo y roles](/documentation/team/#joining-a-team).
- **Sin suscripción activa:** su cuenta funciona, pero para crear y escanear códigos necesita un plan. Haga clic en <kbd>View plans →</kbd>.
