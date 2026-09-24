---
title: Lo que ve quien escanea
description: Qué ocurre en el teléfono de una persona cuando escanea su código y cómo explicárselo a sus visitantes.
---

Quienes escanean sus códigos no necesitan una aplicación ni una cuenta. Usan la cámara del teléfono como con cualquier código QR.

## Códigos estándar

El teléfono abre su página de inmediato. Los códigos dinámicos pasan brevemente por ScanFence, que es donde se cuentan y donde se aplican las reglas y los límites. Quien escanea no lo nota.

## Códigos que comprueban la ubicación

Los códigos con geocerca y multiubicación abren primero una breve página de ScanFence que pide la ubicación del teléfono.

1. El teléfono muestra su aviso habitual, *"app.scanfence.com quiere usar su ubicación"* o similar. La persona toca **Permitir**.
2. ScanFence compara la posición con su zona. Tarda uno o dos segundos, más si el teléfono tiene que buscar primero la señal GPS.
3. El resultado depende de dónde esté la persona:

| Situación | Código con geocerca | Código multiubicación |
|---|---|---|
| Dentro de la zona | Confirmado: *"You're at …"* | Se le envía a la página de esa ubicación |
| Fuera | *"You're outside …"*, con una indicación para acercarse. Puede volver a intentarlo. | Se le envía a la página alternativa |
| Ubicación rechazada o no disponible | Se le pide que active los servicios de ubicación y lo intente de nuevo | Se le envía a la página alternativa |

> **Ponga una frase junto al código** en su cartel, como *"Permita la ubicación cuando se le pida: este código solo funciona en el lugar."* Reduce notablemente los permisos rechazados.

## Si se rechaza a quien escanea

- **Está en el lugar, pero se le rechaza igualmente.** Es posible que su teléfono tenga una señal de ubicación débil, sobre todo en interiores. Pídale que se acerque a una ventana o salga y lo intente de nuevo. Si ocurre a menudo, aumente el [radio](/documentation/geofences/#choosing-the-right-radius) de la zona.
- **La ubicación está desactivada.** En iPhone: *Ajustes → Privacidad y seguridad → Localización*, y permítala para el navegador. En Android: deslice hacia abajo los ajustes rápidos y active *Ubicación*.
- **Antes tocó "No permitir".** El navegador lo recuerda. Tiene que permitir la ubicación para el sitio en la configuración del navegador y volver a escanear.
- **Muchos escaneos seguidos desde una misma red.** Para evitar abusos, las comprobaciones de ubicación están limitadas por red. Tras muchos intentos en una hora, quien escanea ve *"Too many location checks from your network"* y tiene que esperar.

## Códigos desactivados, agotados y eliminados

- Un código que usted puso como **inactivo** muestra *"This QR code is inactive"*.
- Un código que superó su [límite de escaneo](/documentation/scan-limits/) va a su página de límite alcanzado, o muestra un breve mensaje si no definió ninguna.
- Un código en la **papelera** ya no funciona.
