---
title: Statistiques
description: Cartes, graphiques et exports de vos scans, pour tout l'espace de travail ou pour un seul code.
---

## La page Analytics

Ouvrez **Analytics** dans le menu. Elle affiche par défaut les 7 derniers jours.

<figure><img src="/images/docs/analytics-dark.webp" alt="La page Analytics avec les tuiles de chiffres, la période, les filtres et la carte des scans" width="1600" height="1250" loading="lazy"><figcaption>Les statistiques pour la période choisie.</figcaption></figure>

### Tuiles de chiffres

- **Today's scans :** les scans depuis minuit, mis à jour en direct.
- **Active users :** les personnes ayant scanné au cours des 5 dernières minutes.
- **Avg accuracy :** la précision moyenne du GPS des téléphones, en mètres. Plus la valeur est basse, mieux c'est.
- **High precision :** les scans dont la précision est inférieure à 20 m.

### Période et filtres

Choisissez une date de **début** et de **fin** sous **Date range**. Sous **Filters**, cliquez sur des tags pour n'afficher que les codes qui les portent ; **Clear** réinitialise les filtres.

### Graphiques

| Panneau | Ce qu'il vous indique |
|---|---|
| **Scan locations · map** | Où les scans ont eu lieu. Les points verts étaient dans une zone, les rouges en dehors, les bleus sont mixtes ou inconnus. Les scans proches sont regroupés ; zoomez pour les séparer. |
| **Scans over time** | Les scans par jour. Utile pour repérer l'effet d'une campagne ou d'un événement. |
| **Compliance rate** | À l'intérieur ou à l'extérieur d'une géobarrière, sous forme de graphique en anneau. |
| **Location accuracy** | Le nombre de scans avec un GPS excellent (moins de 10 m), bon (10–20 m), moyen (20–50 m) ou faible (plus de 50 m). Beaucoup de scans *poor* suggèrent un lieu en intérieur. Envisagez un rayon plus grand. |
| **Live scan feed** | Les dix derniers scans, en temps réel. |
| **Scans by geofence · top 10** | Vos codes les plus scannés. |
| **Rule type distribution** | Combien de scans ont été redirigés par une règle horaire, par la position ou vers la page par défaut. |
| **Time-based rule performance** | La fréquence de déclenchement de chaque règle horaire. |

### Export

<kbd>Export CSV →</kbd> télécharge tous les scans de la période choisie sous forme de tableur : date, heure, utilisateur, géobarrière, intérieur ou extérieur, distance, coordonnées, précision, altitude, vitesse, batterie et type de réseau. Ouvrez-le dans Excel, Numbers ou Google Sheets.

## Statistiques d'un code

Sur la fiche d'un code, cliquez sur <kbd>View analytics</kbd>. La fenêtre affiche le total des scans du code, les scans avec position et la date du dernier scan, puis une carte et les scans les plus récents avec leurs détails.

<figure><img src="/images/docs/qr-analytics-dark.webp" alt="La fenêtre de statistiques d'un code avec les totaux, les boutons d'export et une carte des lieux de scan" width="1600" height="1250" loading="lazy"><figcaption>Statistiques par code. La carte colore les scans selon leur nombre au même endroit.</figcaption></figure>

Depuis cette fenêtre, vous pouvez exporter les scans du code en **CSV** ou en rapport **PDF**, pratique pour l'envoyer à un client ou à un responsable. La fenêtre affiche les 100 derniers scans ; la page Analytics et son export vont plus loin.

## Ce qui est comptabilisé

- Les codes standard statiques ne sont pas comptabilisés : le téléphone ouvre votre lien sans passer par ScanFence. Rendez vos codes dynamiques pour les suivre. Voir [Statique ou dynamique](/documentation/create-qr-codes/#static-or-dynamic).
- Pour garder des chiffres fiables, les séries de scans répétés depuis un même réseau ne sont comptées que jusqu'à 30 par heure et par code.
