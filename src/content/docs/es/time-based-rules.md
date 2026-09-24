---
title: Reglas horarias
description: Envíe a quienes escanean a otra página en determinadas horas del día, determinados días de la semana o durante un rango de fechas, sin volver a imprimir el código.
---

Una regla horaria da a un código un segundo destino que solo se aplica mientras se cumplen sus condiciones. Fuera de esos momentos, el código funciona como siempre.

**Ejemplos**

- El código de una mesa de restaurante abre el menú del mediodía de 11:30 a 15:00 entre semana y la carta habitual el resto del tiempo.
- Un cartel enlaza a la venta de entradas hasta el evento y a la galería de fotos después.
- Un código en un escaparate muestra "estamos abiertos, pase" en horario comercial y la tienda en línea por la noche.

## Añadir una regla

1. En la tarjeta del código, haga clic en <kbd>Add time-based rules</kbd>. También puede activar **Time-based rules** al crear un código.
2. Active **Time-based rules**.
3. Escriba la **Time-based destination URL**: adónde van las personas mientras se aplica la regla.
4. Active las condiciones que necesite:
   - **Time of day:** una hora de **Open** y de **Close**, por ejemplo de 09:00 a 17:00.
   - **Days of week:** haga clic en los días que quiera incluir. De lunes a viernes está preseleccionado.
   - **Date range:** una fecha de inicio y una de fin.
5. Haga clic en <kbd>Save rules</kbd>.

<figure class="medium"><img src="/images/docs/qr-time-rules-dark.webp" alt="La ventana Edit time-based rules con la hora del día de 09:00 a 17:00 y de lunes a viernes seleccionados" width="1008" height="1197" loading="lazy"><figcaption>Esta regla se aplica entre semana de 9:00 a 17:00. En cualquier otro momento, el código abre su página predeterminada.</figcaption></figure>

## Cómo se combinan las condiciones

**Todas las condiciones activadas deben cumplirse a la vez.** Con *Time of day 09:00–17:00* y *Mon–Fri*, la regla se aplica entre semana en horario de oficina, y no el sábado a mediodía.

Si activa la regla pero ninguna condición, se aplica siempre.

## Cambiar o quitar una regla

Haga clic en <kbd>View time-based rules</kbd> en la tarjeta para ver el horario y luego edítelo. Para quitar una regla, desactive **Time-based rules** y haga clic en <kbd>Save rules</kbd>.

Cada código tiene una regla. Para un código con varias franjas horarias, por ejemplo desayuno, almuerzo y cena, use un [código multiubicación](/documentation/multi-location/), que permite que cada ubicación tenga su propio horario y prioridad.

## Consejos

- Las reglas necesitan un código dinámico. Si activa una regla al crear un código, este se vuelve dinámico automáticamente.
- Antes de imprimir, pruebe una regla nueva escaneando dentro y fuera de su franja horaria.
- Compare el tráfico de la regla y el predeterminado en **Rule type distribution** y **Time-based rule performance** en la página de [Estadísticas](/documentation/analytics/).
