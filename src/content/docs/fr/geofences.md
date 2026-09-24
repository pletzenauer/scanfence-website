---
title: Géobarrières
description: Tracez une zone sur la carte pour que vos codes QR ne fonctionnent que pour les personnes réellement sur place.
---

Une géobarrière est un cercle sur la carte : un point central et un rayon compris entre **50 m et 5 000 m**. Quand quelqu'un scanne un code lié à une géobarrière, son téléphone indique où il se trouve, et ScanFence vérifie si ce point est dans le cercle.

**Usages courants :** des pointages qui ne comptent que sur place, des commandes à table qui ne fonctionnent qu'au restaurant, du contenu d'événement réservé aux personnes présentes, le suivi de présence du personnel sur un chantier.

## La page Geofences

<figure><img src="/images/docs/geofences-dark.webp" alt="La page Geofences listant quatre zones avec les coordonnées du centre, le rayon, le statut et les actions de modification et de suppression" width="1600" height="1250" loading="lazy"><figcaption>Toutes les zones de votre espace de travail dans un seul tableau.</figcaption></figure>

Pour chaque zone, le tableau affiche son **nom** et sa description, les coordonnées du **centre**, le **rayon** et le **statut**.

- Cliquez sur **Active / Inactive** pour activer ou désactiver une zone.
- <kbd>Edit</kbd> ouvre la zone pour la déplacer ou changer sa taille.
- <kbd>Delete</kbd> supprime définitivement la zone.

## Créer ou modifier une zone

1. Cliquez sur <kbd>+ New geofence</kbd>, ou sur <kbd>Edit</kbd> pour une zone existante.
2. Saisissez un **Name** et, si vous le souhaitez, une **Description**, comme *Loading bay 1–4*.
3. Tapez une adresse dans **Address search** et cliquez sur <kbd>Search</kbd>. La carte s'y positionne.
4. Ajustez le centre en **cliquant sur la carte**. Les coordonnées au-dessus de la carte se mettent à jour à chaque clic.
5. Faites glisser le curseur **Radius**. L'indication en dessous traduit les mètres en pâtés de maisons.
6. Cliquez sur <kbd>Create geofence →</kbd> ou <kbd>Update geofence →</kbd>.

<figure><img src="/images/docs/geofence-edit-dark.webp" alt="La fenêtre Edit geofence avec le nom, la description, le curseur de rayon réglé sur 75 mètres, la recherche d'adresse et une carte avec la zone" width="1600" height="1250" loading="lazy"><figcaption>Modification d'une zone. Cliquez n'importe où sur la carte pour déplacer son centre.</figcaption></figure>

## Choisir le bon rayon

Les téléphones ne connaissent pas leur position exacte. En extérieur, le GPS est généralement précis à 5–20 m près ; en intérieur, dans les centres-villes denses ou en sous-sol, l'écart peut atteindre 50 m ou plus. Choisissez un rayon qui couvre le lieu **plus** cette marge d'incertitude.

| Lieu | Rayon conseillé |
|---|---|
| Une boutique, un café ou un stand | 50–100 m |
| Une salle, un hôtel, un immeuble de bureaux | 100–250 m |
| Un site de festival, un campus, un complexe de vacances | 250–1,000 m |
| Un quartier ou une petite ville | 1,000–5,000 m |

> **Testez sur place.** Avant d'imprimer, scannez le code aux limites du lieu, idéalement aussi en intérieur. Si des personnes à l'intérieur sont refusées, agrandissez le rayon.

## Lier un code à une zone

Les zones sont créées en même temps que les codes : choisissez le type **Geofence** dans la fenêtre **Generate a code** et remplissez ses champs de position. Voir [Créer un code QR](/documentation/create-qr-codes/#geofence-codes). La nouvelle zone apparaît ensuite aussi sur la page Geofences, où vous pourrez l'ajuster plus tard sans réimprimer.

Vous voulez un seul code qui fonctionne à plusieurs endroits, chacun avec sa propre page ? Utilisez un [code multi-sites](/documentation/multi-location/).

## Confidentialité

La position n'est demandée qu'au moment du scan, et uniquement pour les codes qui en ont besoin. Les personnes qui scannent voient la demande d'autorisation habituelle de leur téléphone et peuvent refuser. Leur position sert au contrôle et peut être enregistrée avec le scan pour vos statistiques ; ScanFence ne suit personne avant ni après le scan.
