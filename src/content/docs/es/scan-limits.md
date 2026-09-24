---
title: Límites de escaneo
description: "Deje pasar solo los primeros N escaneos, por ejemplo: los primeros 100 reciben un café gratis, y envíe a todos los demás a la página que elija."
---

Un límite de escaneo (llamado **global scarcity limit** en la aplicación) cuenta cada escaneo de un código. Cuando el recuento llega a su límite, todas las personas que escaneen después van a una **página de límite alcanzado** en lugar del destino normal.

**Ejemplos:** los primeros 100 visitantes reciben un cupón; un sorteo termina tras 500 participaciones; una edición limitada se agota.

## Definir un límite al crear un código

1. En la ventana **Generate a code**, marque **Global scarcity limit**. El límite empieza en 50.
2. Escriba el **Total scan limit**.
3. Escriba la **Limit-reached URL**, por ejemplo una página de "lo sentimos, ya no quedan".

## Definir o cambiar un límite más adelante

En la tarjeta del código, el cuadro **Scans & limits** muestra el recuento, por ejemplo *Total 37 / 100*, con una barra de progreso.

- Haga clic en <kbd>Edit</kbd> para cambiar el **Global scan limit** (0 significa ilimitado) y la **Redirect URL when limit reached**, y luego en <kbd>Save changes</kbd>.
- Haga clic en <kbd>Reset</kbd> para poner el contador de nuevo en 0 y empezar una nueva ronda. Esto también restablece los contadores de las reglas del código.

## Conviene saber

- Si deja vacía la URL de límite alcanzado, las personas ven un breve mensaje: *This QR code has reached its scan limit*.
- Para que el recuento sea justo, los escaneos repetidos desde la misma red se cuentan como máximo 30 veces por hora y por código. Esos escaneos adicionales siguen abriendo la página; simplemente no consumen su límite.
- Los [códigos multiubicación](/documentation/multi-location/) también pueden tener un límite distinto por ubicación.
