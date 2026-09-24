---
title: Estadísticas
description: Mapas, gráficos y exportaciones de sus escaneos, para todo el espacio de trabajo o para un solo código.
---

## La página Analytics

Abra **Analytics** en el menú. De forma predeterminada muestra los últimos 7 días.

<figure><img src="/images/docs/analytics-dark.webp" alt="La página Analytics con recuadros de cifras, rango de fechas, filtros y el mapa de escaneos" width="1600" height="1250" loading="lazy"><figcaption>Estadísticas del rango de fechas seleccionado.</figcaption></figure>

### Recuadros de cifras

- **Today's scans:** escaneos desde la medianoche, actualizados en tiempo real.
- **Active users:** personas que escanearon en los últimos 5 minutos.
- **Avg accuracy:** la precisión media del GPS de los teléfonos, en metros. Cuanto más bajo, mejor.
- **High precision:** escaneos con una precisión mejor que 20 m.

### Rango de fechas y filtros

Elija una fecha de **inicio** y de **fin** en **Date range**. En **Filters**, haga clic en las etiquetas para mostrar solo los códigos que las tienen; **Clear** restablece los filtros.

### Gráficos

| Panel | Qué le indica |
|---|---|
| **Scan locations · map** | Dónde se produjeron los escaneos. Los puntos verdes estaban dentro de una zona, los rojos fuera y los azules son mixtos o desconocidos. Los escaneos cercanos se agrupan; acerque el mapa para separarlos. |
| **Scans over time** | Escaneos por día. Útil para ver el efecto de una campaña o de un evento. |
| **Compliance rate** | Dentro frente a fuera de una geocerca, en un gráfico de anillo. |
| **Location accuracy** | Cuántos escaneos tuvieron un GPS excelente (menos de 10 m), bueno (10–20 m), aceptable (20–50 m) o deficiente (más de 50 m). Muchos escaneos *poor* suelen indicar un lugar cerrado. Considere un radio mayor. |
| **Live scan feed** | Los últimos diez escaneos a medida que ocurren. |
| **Scans by geofence · top 10** | Sus códigos con más actividad. |
| **Rule type distribution** | Cuántos escaneos se redirigieron por una regla horaria, por ubicación o a la página predeterminada. |
| **Time-based rule performance** | Con qué frecuencia se activó cada regla horaria. |

### Exportar

<kbd>Export CSV →</kbd> descarga todos los escaneos del rango de fechas elegido como hoja de cálculo: fecha, hora, usuario, geocerca, dentro o fuera, distancia, coordenadas, precisión, altitud, velocidad, batería y tipo de red. Ábrala en Excel, Numbers o Google Sheets.

## Estadísticas de un código

En la tarjeta de cualquier código, haga clic en <kbd>View analytics</kbd>. La ventana muestra el total de escaneos del código, los escaneos con ubicación y cuándo se escaneó por última vez, seguido de un mapa y los escaneos más recientes con sus detalles.

<figure><img src="/images/docs/qr-analytics-dark.webp" alt="La ventana de estadísticas de un código con totales, botones de exportación y un mapa de ubicaciones de escaneo" width="1600" height="1250" loading="lazy"><figcaption>Estadísticas por código. El mapa colorea los escaneos según cuántos se produjeron en el mismo lugar.</figcaption></figure>

Desde aquí puede exportar los escaneos del código en **CSV** o como informe en **PDF**, práctico para enviarlo a un cliente o a un responsable. La ventana muestra los últimos 100 escaneos; la página Analytics y su exportación abarcan más.

## Qué se cuenta

- Los códigos estándar estáticos no se cuentan: el teléfono abre su enlace sin pasar por ScanFence. Haga los códigos dinámicos para poder medirlos. Consulte [Estático o dinámico](/documentation/create-qr-codes/#static-or-dynamic).
- Para que las cifras sean fiables, las ráfagas de escaneos repetidos desde la misma red se cuentan como máximo 30 por hora y por código.
