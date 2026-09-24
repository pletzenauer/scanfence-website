---
title: Gestionar sus códigos
description: Busque, descargue, edite, desactive y elimine sus códigos QR, y manténgalos ordenados con categorías y etiquetas.
---

<figure><img src="/images/docs/qr-codes-dark.webp" alt="La página QR Codes en vista de cuadrícula con búsqueda, filtros y tarjetas de códigos" width="1600" height="1250" loading="lazy"><figcaption>La página QR Codes. El contador de arriba muestra cuántos códigos permite su plan.</figcaption></figure>

## La barra de herramientas

- **Active / Trash** alterna entre sus códigos activos y los que ha eliminado.
- **Grid / List** cambia la disposición. Su navegador recuerda la elección.
- **My QR codes / All users** (solo administradores) muestra sus propios códigos, los de todos o los de un colega.
- <kbd>Bulk</kbd> le permite marcar varios códigos y moverlos a la papelera de una sola vez.
- <kbd>Upload</kbd> importa muchos códigos desde una hoja de cálculo, si la carga masiva está activada para su cuenta. Consulte [Carga masiva](/documentation/bulk-upload/).
- <kbd>+ Generate QR</kbd> crea un código nuevo. Consulte [Crear un código QR](/documentation/create-qr-codes/).

## Buscar y filtrar

El cuadro de búsqueda encuentra códigos por nombre, enlace, enlace alternativo, nombre de geocerca o enlace de límite. Haga clic en **Filters** para acotar la lista por **categoría** o **etiquetas**. Si selecciona varias etiquetas, se muestran los códigos que tengan cualquiera de ellas. **Clear all filters** lo restablece todo.

## La tarjeta de un código

<figure class="narrow"><img src="/images/docs/qr-card-dark.webp" alt="Tarjeta de un código QR con tipo, nombre, interruptor de activación, imagen QR, etiquetas y botones de acción" width="471" height="1356" loading="lazy"><figcaption>Cada tarjeta contiene el código y todas sus acciones.</figcaption></figure>

De arriba abajo:

- **Tipo y nombre**, por ejemplo *Geofence* o *Standard · Dynamic*.
- **Interruptor Active / Inactive.** Haga clic en él para desactivar un código dinámico, por ejemplo al final de una campaña. Los códigos inactivos dejan de funcionar hasta que los vuelva a activar.
- **La imagen QR**, seguida de la categoría, las etiquetas y el destino.
- <kbd>PNG</kbd> y <kbd>SVG</kbd> descargan la imagen. Use SVG para imprimir: se ve nítido a cualquier tamaño. PNG es adecuado para presentaciones y documentos.
- <kbd>Copy</kbd> copia el enlace que contiene el código, práctico para hacer pruebas en una computadora.
- <kbd>Delete</kbd> mueve el código a la papelera.
- <kbd>Edit category & tags</kbd> reclasifica el código.
- <kbd>Edit redirect URL</kbd> (códigos dinámicos) cambia adónde lleva el código. El cambio se aplica desde el siguiente escaneo y el código impreso sigue siendo el mismo.
- <kbd>View analytics</kbd> abre los escaneos de este código: totales, un mapa, los últimos 100 escaneos y exportación en CSV o PDF.
- <kbd>View location</kbd> (códigos con geocerca) muestra la zona en un mapa.
- <kbd>Edit locations & stats</kbd> (códigos multiubicación) abre el editor de ubicaciones.
- <kbd>Add time-based rules</kbd> / <kbd>View time-based rules</kbd>. Consulte [Reglas horarias](/documentation/time-based-rules/).
- **Scans & limits** muestra el número de escaneos y el límite, si lo hay. Consulte [Límites de escaneo](/documentation/scan-limits/).

## Vista de lista

La vista de lista muestra más códigos en pantalla, con las mismas acciones en una fila compacta. Es adecuada para listas largas y para la selección múltiple.

<figure><img src="/images/docs/qr-list-dark.webp" alt="La página QR Codes en vista de lista" width="1600" height="1250" loading="lazy"><figcaption>Vista de lista.</figcaption></figure>

## Categorías y etiquetas

Use las **categorías** para la agrupación principal (una por código, con un color) y las **etiquetas** para todo lo demás (tantas como quiera).

- **Categorías:** **Filters → Manage categories**. Cree, cambie el nombre, cambie el color o elimine. Al eliminar una categoría, se quita de todos los códigos, pero los códigos se conservan.
- **Etiquetas:** **My Settings → Tags**, o créelas al hacer un código.

## Papelera y restauración

<kbd>Delete</kbd> no elimina un código de forma definitiva; lo mueve a la **papelera**. Un código en la papelera **deja de funcionar** de inmediato, así que quienes lo escaneen verán un error en lugar de su página.

<figure><img src="/images/docs/qr-trash-dark.webp" alt="La vista de papelera con los botones para restaurar y eliminar definitivamente" width="1600" height="1250" loading="lazy"><figcaption>La papelera. Si restaura un código, vuelve a funcionar exactamente como antes.</figcaption></figure>

En la papelera puede:

- <kbd>Restore</kbd> un código. Vuelve con toda su configuración y empieza a funcionar de nuevo.
- <kbd>Delete forever</kbd> un código. Esta acción no se puede deshacer.
- Seleccionar varios códigos y restaurarlos o eliminarlos juntos.

Los códigos en la papelera no cuentan para el límite de su plan.

<div class="warn"><strong>Cuidado con los códigos impresos.</strong> Antes de eliminar un código que ya está impreso, considere desactivarlo o dirigirlo a una página de "esta oferta ha terminado" con <em>Edit redirect URL</em>.</div>
