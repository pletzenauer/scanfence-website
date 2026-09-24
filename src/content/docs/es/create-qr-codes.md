---
title: Crear un código QR
description: Los tres tipos de código, estático frente a dinámico, y cada campo de la ventana "Generate a code".
---

Abra **QR Codes** en el menú y haga clic en <kbd>+ Generate QR</kbd>. Se abre la ventana **Generate a code**. <kbd>Generate QR →</kbd> permanece en gris hasta que complete todo lo que necesita el tipo elegido.

<figure><img src="/images/docs/qr-new-standard-dark.webp" alt="La ventana Generate a code con los tres tipos de código Standard, Geofence y Multi-location" width="1344" height="1227" loading="lazy"><figcaption>Elija primero el tipo; el resto del formulario se adapta a él.</figcaption></figure>

## Elegir un tipo

| Tipo | Úselo cuando | Quien escanea recibe |
|---|---|---|
| **Standard** | Todas las personas, en cualquier lugar, deben recibir lo mismo. | Su enlace o texto. |
| **Geofence** | El código solo debe funcionar en un lugar: un punto de registro, una mesa, una tienda. | Acceso si se encuentra dentro de su zona; si no, una pantalla que indica que está fuera. |
| **Multi-location** | Un mismo diseño impreso se usa en varios lugares y cada lugar debe abrir su propia página. | La página de la zona más cercana en la que se encuentra, o una página alternativa. |

## Campos para todos los tipos

- **QR code name** (opcional). Un nombre descriptivo, como *Campaña de verano 2026*. Aparece en listas, estadísticas y exportaciones, así que conviene ponerlo.
- **Category** (opcional). Una categoría con color por código, por ejemplo *Menús* o *Eventos*. Puede filtrar la lista de códigos por ella. Gestione las categorías desde **Filters → Manage categories** en la página QR Codes.
- **Tags** (opcional). Tantas como quiera. Elija una etiqueta existente con **Add tag**, o elija **Create new tag** para crear una en el momento.

## Códigos estándar

Escriba una dirección web o cualquier texto en **URL or text**. El texto también sirve: el teléfono simplemente lo muestra.

## Códigos con geocerca

Un código con geocerca pide la ubicación al teléfono de quien escanea y solo le deja pasar si está dentro de la zona.

1. Escriba un **Geofence name**, como *Entrada principal*.
2. Escriba una dirección en **Search by address** y haga clic en **Search**, o introduzca usted mismo **Latitude** y **Longitude**. Cuando la posición está definida, aparece una vista previa del mapa.
3. Defina el **Radius (meters)**. Use al menos 50 m: el GPS de los teléfonos rara vez es más preciso, sobre todo en interiores.
4. Escriba en **URL or text · inside fence** lo que deben recibir quienes superen la comprobación.

<figure><img src="/images/docs/qr-new-geofence-dark.webp" alt="La sección de geocerca de la ventana Generate a code, con nombre, búsqueda por dirección, latitud, longitud y radio" width="1344" height="1350" loading="lazy"><figcaption>Busque la dirección y luego compruebe el marcador en la vista previa del mapa.</figcaption></figure>

Cada código con geocerca crea su propia zona nueva, que también aparece en la página **Geofences**. Allí puede moverla o cambiar su radio más adelante. Consulte [Geocercas](/documentation/geofences/).

## Códigos multiubicación

Defina una **Fallback URL** para quienes estén fuera de todas las zonas y luego haga clic en **Add location** para cada lugar (hasta 10). Cada ubicación tiene su propia dirección, radio y destino y, si lo desea, su propio horario y límite de escaneos. Este tipo tiene su propia página: [Códigos multiubicación](/documentation/multi-location/).

<figure><img src="/images/docs/qr-new-multi-dark.webp" alt="La sección multiubicación con la URL alternativa y una lista vacía de hasta diez ubicaciones" width="1344" height="1350" loading="lazy"><figcaption>Multiubicación: una página alternativa y hasta diez zonas.</figcaption></figure>

## Estático o dinámico

Marque **Make this a dynamic QR code** para que un código sea dinámico. El campo de arriba pasa a llamarse **Destination URL**.

| | Estático | Dinámico |
|---|---|---|
| Qué contiene el código impreso | Su propio enlace | Un enlace corto de ScanFence que redirige a quien escanea |
| Cambiar el destino más tarde | No, tendría que volver a imprimir | Sí, en cualquier momento |
| Escaneos contados y visibles en las estadísticas | No (códigos estándar) | Sí |
| Reglas horarias y límites de escaneo | No (códigos estándar) | Sí |
| Desactivar el código | No (códigos estándar) | Sí |

> **Regla práctica:** si el código va a estar en algo impreso, hágalo dinámico. Los códigos estáticos sirven para cosas que nunca cambian, como la contraseña de su wifi.

Si activa las reglas horarias en esta ventana, el código se vuelve dinámico automáticamente. Los códigos multiubicación siempre pasan por ScanFence, por eso no muestran esta opción.

## Opciones adicionales

Dos secciones al final de la ventana se pueden configurar ahora o más tarde desde la tarjeta del código:

- **Global scarcity limit:** detener el código tras un número de escaneos y enviar a todos los demás a otra página. Consulte [Límites de escaneo](/documentation/scan-limits/).
- **Time-based rules:** un destino distinto en determinadas horas, días o fechas. Consulte [Reglas horarias](/documentation/time-based-rules/).

## Si falta algo

La ventana le indica lo que necesita, por ejemplo *Please enter URL or text*, *Please complete all geofence location fields* o *Please add at least one location*. Si indica *QR code limit reached*, ha usado todos los códigos de su plan. Mueva a la papelera los códigos que ya no necesite o [cambie a un plan superior](/documentation/plans-and-limits/).
