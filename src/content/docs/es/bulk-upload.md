---
title: Carga masiva
description: Cree decenas o cientos de códigos QR a la vez a partir de una hoja de cálculo CSV.
---

La carga masiva es útil cuando necesita muchos códigos parecidos: uno por mesa, por producto o por sucursal. Usted rellena una hoja de cálculo, la guarda como CSV y la sube. ScanFence crea un código por cada fila.

> El equipo de ScanFence es quien activa la carga masiva. Si no ve <kbd>Upload</kbd> en la página QR Codes, [pídanos](mailto:hello@scanfence.com) que la activemos.

## Paso a paso

1. En la página **QR Codes**, haga clic en <kbd>Upload</kbd>.
2. Haga clic en **Download sample CSV →** para obtener `qr-codes-bulk-template.csv` con filas de ejemplo.
3. Ábralo en Excel, Numbers o Google Sheets y rellene una fila por código. Deje la primera fila (los nombres de las columnas) tal como está.
4. Guarde o exporte el archivo como **CSV**.
5. De vuelta en la ventana de carga, elija su archivo en **Upload your CSV file**. La carga empieza en cuanto lo selecciona.
6. **Upload results** muestra entonces cuántos códigos se crearon y, si alguna fila falló, cuáles y por qué.

<figure class="medium"><img src="/images/docs/qr-bulk-upload-dark.webp" alt="La ventana Bulk upload QR codes con las columnas obligatorias, opcionales, de límite de escaneos y de geocerca" width="1344" height="1350" loading="lazy"><figcaption>La ventana de carga enumera todas las columnas que puede tener el archivo.</figcaption></figure>

## Columnas

| Columna | Obligatoria | Qué escribir |
|---|---|---|
| `type` | Sí | `standard` o `geofence` |
| `content` | Sí | El enlace o el texto. En los códigos dinámicos, el destino. |
| `name` | No | Un nombre visible, p. ej. *Mesa 12* |
| `category` | No | El nombre de una categoría existente |
| `tags` | No | Nombres de etiquetas existentes, separados por `;` |
| `is_dynamic` | No | `true` para que el código sea dinámico; si no, déjelo vacío o ponga `false` |
| `global_scan_limit` | No | Un número, p. ej. `100`. Consulte [Límites de escaneo](/documentation/scan-limits/) |
| `limit_reached_url` | No | Adónde van las personas una vez alcanzado el límite |
| `geofence_lat` | Para geocerca | Latitud, p. ej. `48.2082` |
| `geofence_lng` | Para geocerca | Longitud, p. ej. `16.3738` |
| `geofence_radius` | No | Radio en metros, de 50 a 5,000. Valor predeterminado: 50 |

### Ejemplo

```
name,type,category,content,is_dynamic,global_scan_limit,limit_reached_url,geofence_lat,geofence_lng,geofence_radius,tags
Table 1,geofence,Menus,https://example.com/menu,true,,,48.2082,16.3738,60,tables;indoor
Launch offer,standard,Marketing,https://example.com/offer,true,100,https://example.com/sold-out,,,,promo
```

## Consejos

- **Cree primero las categorías y etiquetas.** Los nombres que todavía no existen se omiten y el código se crea sin ellos.
- **Para obtener coordenadas**, haga clic derecho en un punto de Google Maps: la primera entrada del menú es *latitud, longitud*.
- **Los códigos multiubicación** no se pueden configurar con una hoja de cálculo. Créelos en la aplicación. Consulte [Códigos multiubicación](/documentation/multi-location/).
- **Los errores de fila** indican la fila, por ejemplo *Row 4: Missing required fields (type or content)* o *Row 7: Geofence type requires valid geofence_lat and geofence_lng*. Corrija esas filas y vuelva a subir solo esas; las filas correctas ya se crearon.
- Los códigos creados por carga masiva cuentan para el límite de su plan como cualquier otro código.
