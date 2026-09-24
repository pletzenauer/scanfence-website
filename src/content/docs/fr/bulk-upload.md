---
title: Import en masse
description: Créez des dizaines ou des centaines de codes QR en une fois à partir d'un tableur CSV.
---

L'import en masse est pratique quand vous avez besoin de nombreux codes similaires : un par table, par produit, par agence. Vous remplissez un tableur, l'enregistrez en CSV et l'importez. ScanFence crée un code par ligne.

> L'import en masse est activé par l'équipe ScanFence. Si vous ne voyez pas <kbd>Upload</kbd> sur la page QR Codes, [demandez-nous](mailto:hello@scanfence.com) de l'activer.

## Étape par étape

1. Sur la page **QR Codes**, cliquez sur <kbd>Upload</kbd>.
2. Cliquez sur **Download sample CSV →** pour obtenir `qr-codes-bulk-template.csv` avec des lignes d'exemple.
3. Ouvrez-le dans Excel, Numbers ou Google Sheets et remplissez une ligne par code. Laissez la première ligne (les noms de colonnes) telle quelle.
4. Enregistrez ou exportez au format **CSV**.
5. De retour dans la fenêtre d'import, choisissez votre fichier sous **Upload your CSV file**. L'import démarre dès que vous l'avez sélectionné.
6. **Upload results** indique ensuite combien de codes ont été créés et, si certaines lignes ont échoué, lesquelles et pourquoi.

<figure class="medium"><img src="/images/docs/qr-bulk-upload-dark.webp" alt="La fenêtre Bulk upload QR codes listant les colonnes obligatoires, facultatives, de limite de scans et de géobarrière" width="1344" height="1350" loading="lazy"><figcaption>La fenêtre d'import liste toutes les colonnes que le fichier peut contenir.</figcaption></figure>

## Colonnes

| Colonne | Obligatoire | Contenu |
|---|---|---|
| `type` | Oui | `standard` ou `geofence` |
| `content` | Oui | Le lien ou le texte. Pour les codes dynamiques, la destination. |
| `name` | Non | Un nom d'affichage, par ex. *Table 12* |
| `category` | Non | Le nom d'une catégorie existante |
| `tags` | Non | Des noms de tags existants, séparés par `;` |
| `is_dynamic` | Non | `true` pour rendre le code dynamique, sinon laissez vide ou `false` |
| `global_scan_limit` | Non | Un nombre, par ex. `100`. Voir [Limites de scans](/documentation/scan-limits/) |
| `limit_reached_url` | Non | La page vers laquelle les gens sont envoyés une fois la limite atteinte |
| `geofence_lat` | Pour geofence | Latitude, par ex. `48.2082` |
| `geofence_lng` | Pour geofence | Longitude, par ex. `16.3738` |
| `geofence_radius` | Non | Rayon en mètres, de 50 à 5,000. 50 par défaut |

### Exemple

```
name,type,category,content,is_dynamic,global_scan_limit,limit_reached_url,geofence_lat,geofence_lng,geofence_radius,tags
Table 1,geofence,Menus,https://example.com/menu,true,,,48.2082,16.3738,60,tables;indoor
Launch offer,standard,Marketing,https://example.com/offer,true,100,https://example.com/sold-out,,,,promo
```

## Conseils

- **Créez d'abord les catégories et les tags.** Les noms qui n'existent pas encore sont ignorés et le code est créé sans eux.
- **Trouvez les coordonnées** en faisant un clic droit sur un point dans Google Maps : la première entrée du menu est *latitude, longitude*.
- **Les codes multi-sites** ne peuvent pas être créés par tableur. Créez-les dans l'application. Voir [Codes multi-sites](/documentation/multi-location/).
- **Les erreurs de ligne** indiquent la ligne concernée, par exemple *Row 4: Missing required fields (type or content)* ou *Row 7: Geofence type requires valid geofence_lat and geofence_lng*. Corrigez ces lignes et importez-les seules à nouveau ; les lignes réussies sont déjà créées.
- Les codes importés en masse comptent dans la limite de votre abonnement comme n'importe quel autre code.
