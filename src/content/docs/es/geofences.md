---
title: Geocercas
description: Dibuje una zona en el mapa para que sus códigos QR solo funcionen para quienes están realmente allí.
---

Una geocerca es un círculo en el mapa: un punto central y un radio de entre **50 m y 5000 m**. Cuando alguien escanea un código vinculado a una geocerca, su teléfono indica dónde está y ScanFence comprueba si ese punto está dentro del círculo.

**Usos habituales:** registros de entrada que solo cuentan en el lugar, pedidos desde la mesa que solo funcionan en el restaurante, contenido de un evento solo para asistentes, control de asistencia del personal en un centro de trabajo.

## La página Geofences

<figure><img src="/images/docs/geofences-dark.webp" alt="La página Geofences con cuatro zonas, sus coordenadas centrales, radio, estado y acciones de edición y eliminación" width="1600" height="1250" loading="lazy"><figcaption>Todas las zonas de su espacio de trabajo en una tabla.</figcaption></figure>

Para cada zona, la tabla muestra su **nombre** y descripción, las coordenadas del **centro**, el **radio** y el **estado**.

- Haga clic en **Active / Inactive** para activar o desactivar una zona.
- <kbd>Edit</kbd> abre la zona para moverla o cambiar su tamaño.
- <kbd>Delete</kbd> elimina la zona de forma definitiva.

## Crear o editar una zona

1. Haga clic en <kbd>+ New geofence</kbd>, o en <kbd>Edit</kbd> en una zona existente.
2. Escriba un **Name** y, si lo desea, una **Description**, como *Muelles de carga 1–4*.
3. Escriba una dirección en **Address search** y haga clic en <kbd>Search</kbd>. El mapa se desplaza hasta allí.
4. Ajuste el centro **haciendo clic en el mapa**. Las coordenadas encima del mapa se actualizan con cada clic.
5. Arrastre el control deslizante **Radius**. La indicación de debajo traduce los metros a manzanas.
6. Haga clic en <kbd>Create geofence →</kbd> o <kbd>Update geofence →</kbd>.

<figure><img src="/images/docs/geofence-edit-dark.webp" alt="La ventana Edit geofence con nombre, descripción, control de radio en 75 metros, búsqueda de dirección y un mapa con la zona" width="1600" height="1250" loading="lazy"><figcaption>Edición de una zona. Haga clic en cualquier punto del mapa para mover su centro.</figcaption></figure>

## Elegir el radio adecuado

Los teléfonos no conocen su posición con exactitud. Al aire libre, el GPS suele tener una precisión de 5 a 20 m; en interiores, en centros urbanos densos o bajo tierra puede ser de 50 m o peor. Elija un radio que cubra el lugar **más** ese margen de error.

| Lugar | Radio recomendado |
|---|---|
| Una sola tienda, cafetería o puesto | 50–100 m |
| Un local, hotel o edificio de oficinas | 100–250 m |
| Un recinto de festival, campus o complejo turístico | 250–1,000 m |
| Un barrio o una localidad pequeña | 1,000–5,000 m |

> **Pruebe en el lugar.** Antes de imprimir, escanee el código en los límites del lugar, a ser posible también en interiores. Si se rechaza a personas que están dentro, aumente el radio.

## Vincular un código a una zona

Las zonas se crean junto con los códigos: elija el tipo **Geofence** en la ventana **Generate a code** y rellene sus campos de ubicación. Consulte [Crear un código QR](/documentation/create-qr-codes/#geofence-codes). La nueva zona aparece también en la página Geofences, donde puede ajustarla más adelante sin volver a imprimir.

¿Quiere un solo código que funcione en varios lugares, cada uno con su propia página? Use un [código multiubicación](/documentation/multi-location/).

## Privacidad

La ubicación solo se solicita en el momento del escaneo y solo para los códigos que la necesitan. Quien escanea ve el aviso de permiso habitual de su teléfono y puede rechazarlo. Su posición se usa para la comprobación y puede guardarse con el escaneo para sus estadísticas; ScanFence no rastrea a nadie antes ni después del escaneo.
