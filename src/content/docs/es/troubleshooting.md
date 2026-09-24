---
title: Solución de problemas
description: Respuestas rápidas a las preguntas más frecuentes y cómo contactarnos si no le ayudan.
---

## Inicio de sesión

**"Too many failed attempts. Account locked for …"**
Tras cinco contraseñas incorrectas seguidas, el inicio de sesión se bloquea durante 15 minutos. Espere o restablezca su contraseña con **Forgot password?**.

**No llega el correo para restablecer la contraseña.**
Revise la carpeta de spam y compruebe que escribió la dirección con la que se registró. Por seguridad, siempre indicamos que se envió un correo, aunque la dirección no esté registrada.

**"An account with this email already exists."**
Ya se había registrado. Inicie sesión o restablezca su contraseña.

## Crear códigos

**<kbd>+ Generate QR</kbd> aparece en gris.**
O no tiene un plan activo, o ha alcanzado el límite de códigos de su plan. Revise el contador en la parte superior de la página QR Codes. Consulte [Planes y límites](/documentation/plans-and-limits/).

**"Error creating geofence".**
Probablemente el radio es inferior a 50 m. Las geocercas deben medir entre 50 m y 5000 m.

**La búsqueda de dirección coloca el marcador en el lugar equivocado.**
Precise más la dirección (calle, número, localidad, país), o haga clic derecho en el punto exacto en Google Maps, copie las coordenadas y péguelas en Latitude y Longitude.

## Escaneo

**A personas que están en el lugar se les dice que están fuera.**
Su señal GPS es imprecisa, normalmente en interiores. Aumente el radio; consulte [elegir el radio adecuado](/documentation/geofences/#choosing-the-right-radius). **Location accuracy** en [Estadísticas](/documentation/analytics/) muestra la precisión de los teléfonos en su local.

**Nunca se pide la ubicación a quienes escanean.**
La rechazaron una vez y el navegador lo recuerda. Consulte [Si se rechaza a quien escanea](/documentation/scanning/#if-a-scanner-is-refused).

**Cambié el destino, pero las personas siguen viendo la página anterior.**
Solo se pueden cambiar los códigos dinámicos. En un código estático, el enlace está impreso en el propio patrón; cree un código dinámico y vuelva a imprimir. Si el código es dinámico, compruebe si hay una regla horaria activa en este momento, ya que las reglas tienen prioridad sobre la página predeterminada.

**El código muestra "inactive" o "reached its scan limit".**
Vuelva a activarlo, o aumente o restablezca el límite, en la tarjeta del código. Consulte [Límites de escaneo](/documentation/scan-limits/).

## Cifras

**Mis escaneos no se cuentan.**
Los códigos estándar estáticos no se miden; haga el código dinámico. Los escaneos repetidos muy rápidos desde una misma red se cuentan como máximo 30 por hora y por código.

**Las estadísticas aparecen vacías.**
Revise el rango de fechas en la parte superior y quite los filtros de etiquetas.

## Equipo

**No puedo invitar a nadie.**
Todos los puestos están ocupados, o su rol es *Field user*. Consulte [Equipo y roles](/documentation/team/).

**El enlace de invitación de un colega no funciona.**
Las invitaciones caducan a los 7 días. Cancélela en la página Team y envíe una nueva.

## Contacto

Abra **Support** en el menú de la aplicación o escriba a [hello@scanfence.com](mailto:hello@scanfence.com). Incluya su ID de usuario de **My Settings**, el nombre del código y, si puede, una captura de pantalla. Para ayuda con la configuración, una revisión de campaña o una migración desde otra herramienta de QR, puede reservar una sesión de ayuda personalizada de pago desde la página Support.

<figure><img src="/images/docs/support-dark.webp" alt="La página Support con canales de contacto y sesiones de ayuda que se pueden reservar" width="1600" height="1250" loading="lazy"><figcaption>La página Support de la aplicación.</figcaption></figure>
