---
title: Créer un code QR
description: "Les trois types de codes, statique ou dynamique, et chaque champ de la fenêtre « Generate a code »."
---

Ouvrez **QR Codes** dans le menu et cliquez sur <kbd>+ Generate QR</kbd>. La fenêtre **Generate a code** s'ouvre. <kbd>Generate QR →</kbd> reste grisé tant que tout ce dont le type choisi a besoin n'est pas rempli.

<figure><img src="/images/docs/qr-new-standard-dark.webp" alt="La fenêtre Generate a code avec les trois types de codes Standard, Geofence et Multi-location" width="1344" height="1227" loading="lazy"><figcaption>Choisissez d'abord le type ; le reste du formulaire s'adapte.</figcaption></figure>

## Choisir un type

| Type | À utiliser quand | Les personnes qui scannent obtiennent |
|---|---|---|
| **Standard** | Tout le monde, partout, doit obtenir la même chose. | Votre lien ou votre texte. |
| **Geofence** | Le code ne doit fonctionner qu'à un seul endroit : un point de pointage, une table, une boutique. | L'accès si elles se trouvent dans votre zone ; sinon un écran « vous êtes hors zone ». |
| **Multi-location** | Un même visuel imprimé est utilisé à plusieurs endroits, et chaque endroit doit ouvrir sa propre page. | La page de la zone la plus proche où elles se trouvent, ou une page de repli. |

## Champs communs à tous les types

- **QR code name** (facultatif). Un nom parlant comme *Summer campaign 2026*. Il apparaît dans les listes, les statistiques et les exports, cela vaut donc la peine de le renseigner.
- **Category** (facultatif). Une catégorie par code, avec une couleur, par exemple *Menus* ou *Events*. Vous pouvez filtrer la liste des codes par catégorie. Gérez les catégories via **Filters → Manage categories** sur la page QR Codes.
- **Tags** (facultatif). Autant que vous voulez. Choisissez un tag existant avec **Add tag**, ou choisissez **Create new tag** pour en ajouter un sur le moment.

## Codes standard

Saisissez une adresse web ou un simple texte dans **URL or text**. Le texte fonctionne aussi : le téléphone l'affiche simplement.

## Codes à géobarrière

Un code à géobarrière demande sa position au téléphone de la personne qui scanne et ne la laisse passer que si elle est dans la zone.

1. Saisissez un **Geofence name**, comme *Main entrance*.
2. Tapez une adresse dans **Search by address** et cliquez sur **Search**, ou saisissez vous-même la **Latitude** et la **Longitude**. Un aperçu de carte apparaît une fois la position définie.
3. Réglez le **Radius (meters)**. Prévoyez au moins 50 m : le GPS d'un téléphone est rarement plus précis, surtout en intérieur.
4. Saisissez ce que doivent obtenir les personnes qui passent le contrôle dans **URL or text · inside fence**.

<figure><img src="/images/docs/qr-new-geofence-dark.webp" alt="La section géobarrière de la fenêtre Generate a code, avec le nom, la recherche d'adresse, la latitude, la longitude et le rayon" width="1344" height="1350" loading="lazy"><figcaption>Recherchez l'adresse, puis vérifiez l'épingle sur l'aperçu de la carte.</figcaption></figure>

Chaque code à géobarrière crée sa propre nouvelle zone, qui apparaît aussi sur la page **Geofences**. Vous pourrez l'y déplacer ou modifier son rayon plus tard. Voir [Géobarrières](/documentation/geofences/).

## Codes multi-sites

Définissez une **Fallback URL** pour toutes les personnes situées hors de toutes les zones, puis cliquez sur **Add location** pour chaque lieu (10 au maximum). Chaque lieu a sa propre adresse, son rayon et sa destination, et éventuellement son propre planning et sa propre limite de scans. Ce type a sa propre page : [Codes multi-sites](/documentation/multi-location/).

<figure><img src="/images/docs/qr-new-multi-dark.webp" alt="La section multi-sites avec l'URL de repli et une liste vide pouvant contenir jusqu'à dix lieux" width="1344" height="1350" loading="lazy"><figcaption>Multi-sites : une page de repli et jusqu'à dix zones.</figcaption></figure>

## Statique ou dynamique

Cochez **Make this a dynamic QR code** pour rendre un code dynamique. Le champ au-dessus s'intitule alors **Destination URL**.

| | Statique | Dynamique |
|---|---|---|
| Ce que contient le code imprimé | Votre lien lui-même | Un lien court ScanFence qui redirige la personne |
| Changer la destination plus tard | Non, il faudrait réimprimer | Oui, à tout moment |
| Scans comptés et affichés dans les statistiques | Non (codes standard) | Oui |
| Règles horaires et limites de scans | Non (codes standard) | Oui |
| Désactiver le code | Non (codes standard) | Oui |

> **En règle générale :** si le code est imprimé sur un support, rendez-le dynamique. Les codes statiques conviennent pour ce qui ne change jamais, comme votre mot de passe Wi-Fi.

Activer les règles horaires dans cette fenêtre rend le code dynamique automatiquement. Les codes multi-sites passent toujours par ScanFence, l'option ne s'affiche donc pas pour eux.

## Options supplémentaires

Deux sections en bas de la fenêtre peuvent être réglées maintenant ou plus tard depuis la fiche du code :

- **Global scarcity limit :** s'arrêter après un certain nombre de scans et envoyer toutes les personnes suivantes vers une autre page. Voir [Limites de scans](/documentation/scan-limits/).
- **Time-based rules :** une autre destination à certaines heures, certains jours ou certaines dates. Voir [Règles horaires](/documentation/time-based-rules/).

## S'il manque quelque chose

La fenêtre vous indique ce qu'il lui faut, par exemple *Please enter URL or text*, *Please complete all geofence location fields* ou *Please add at least one location*. Si elle affiche *QR code limit reached*, vous avez utilisé tous les codes de votre abonnement. Placez les codes dont vous n'avez plus besoin dans la corbeille, ou [passez à un abonnement supérieur](/documentation/plans-and-limits/).
