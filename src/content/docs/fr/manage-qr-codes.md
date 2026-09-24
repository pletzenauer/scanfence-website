---
title: Gérer vos codes
description: Retrouvez, téléchargez, modifiez, désactivez et supprimez vos codes QR, et organisez-les avec des catégories et des tags.
---

<figure><img src="/images/docs/qr-codes-dark.webp" alt="La page QR Codes en vue grille avec la recherche, les filtres et les fiches des codes" width="1600" height="1250" loading="lazy"><figcaption>La page QR Codes. Le compteur en haut indique combien de codes votre abonnement autorise.</figcaption></figure>

## La barre d'outils

- **Active / Trash** bascule entre vos codes actifs et ceux que vous avez supprimés.
- **Grid / List** change la disposition. Votre navigateur mémorise ce choix.
- **My QR codes / All users** (admins uniquement) affiche vos propres codes, ceux de tout le monde ou ceux d'un collègue.
- <kbd>Bulk</kbd> vous permet de cocher plusieurs codes et de les placer dans la corbeille en une seule fois.
- <kbd>Upload</kbd> importe de nombreux codes depuis un tableur, si l'import en masse est activé pour votre compte. Voir [Import en masse](/documentation/bulk-upload/).
- <kbd>+ Generate QR</kbd> crée un nouveau code. Voir [Créer un code QR](/documentation/create-qr-codes/).

## Rechercher et filtrer

La zone de recherche trouve les codes par nom, lien, lien de repli, nom de géobarrière ou lien de limite. Cliquez sur **Filters** pour affiner la liste par **catégorie** ou par **tags**. Si plusieurs tags sont sélectionnés, les codes portant l'un d'eux sont affichés. **Clear all filters** réinitialise tout.

## La fiche d'un code

<figure class="narrow"><img src="/images/docs/qr-card-dark.webp" alt="Une fiche de code QR affichant le type, le nom, l'interrupteur d'activation, l'image QR, les tags et les boutons d'action" width="471" height="1356" loading="lazy"><figcaption>Chaque fiche contient le code et toutes ses actions.</figcaption></figure>

De haut en bas :

- **Le type et le nom**, par exemple *Geofence* ou *Standard · Dynamic*.
- **L'interrupteur Active / Inactive.** Cliquez dessus pour désactiver un code dynamique, par exemple à la fin d'une campagne. Les codes inactifs ne fonctionnent plus jusqu'à ce que vous les réactiviez.
- **L'image QR**, suivie de la catégorie, des tags et de la destination.
- <kbd>PNG</kbd> et <kbd>SVG</kbd> téléchargent l'image. Utilisez le SVG pour l'impression : il reste net à toutes les tailles. Le PNG convient aux présentations et aux documents.
- <kbd>Copy</kbd> copie le lien contenu dans le code, pratique pour tester sur un ordinateur.
- <kbd>Delete</kbd> place le code dans la corbeille.
- <kbd>Edit category & tags</kbd> reclasse le code.
- <kbd>Edit redirect URL</kbd> (codes dynamiques) change la destination du code. La modification s'applique dès le scan suivant et le code imprimé reste le même.
- <kbd>View analytics</kbd> ouvre les scans de ce code : totaux, carte, 100 derniers scans et export CSV ou PDF.
- <kbd>View location</kbd> (codes à géobarrière) affiche la zone sur une carte.
- <kbd>Edit locations & stats</kbd> (codes multi-sites) ouvre l'éditeur de lieux.
- <kbd>Add time-based rules</kbd> / <kbd>View time-based rules</kbd>. Voir [Règles horaires](/documentation/time-based-rules/).
- **Scans & limits** affiche le nombre de scans et l'éventuelle limite. Voir [Limites de scans](/documentation/scan-limits/).

## Vue liste

La vue liste affiche plus de codes à l'écran, avec les mêmes actions sur une ligne compacte. Elle convient aux longues listes et à la sélection multiple.

<figure><img src="/images/docs/qr-list-dark.webp" alt="La page QR Codes en vue liste" width="1600" height="1250" loading="lazy"><figcaption>Vue liste.</figcaption></figure>

## Catégories et tags

Utilisez les **catégories** pour le classement principal (une par code, avec une couleur) et les **tags** pour tout le reste (autant que vous voulez).

- **Catégories :** **Filters → Manage categories**. Créez, renommez, changez la couleur ou supprimez. Supprimer une catégorie la retire de tous les codes, mais conserve les codes.
- **Tags :** **My Settings → Tags**, ou créez-les en même temps qu'un code.

## Corbeille et restauration

<kbd>Delete</kbd> ne supprime pas un code définitivement ; il le place dans la **Trash**. Un code dans la corbeille **cesse de fonctionner** immédiatement : les personnes qui le scannent obtiennent une erreur au lieu de votre page.

<figure><img src="/images/docs/qr-trash-dark.webp" alt="La vue corbeille avec les boutons de restauration et de suppression définitive" width="1600" height="1250" loading="lazy"><figcaption>La corbeille. Restaurez un code et il fonctionne de nouveau, exactement comme avant.</figcaption></figure>

Dans la corbeille, vous pouvez :

- <kbd>Restore</kbd> un code. Il revient avec tous ses réglages et fonctionne de nouveau.
- <kbd>Delete forever</kbd> un code. Cette action est irréversible.
- Sélectionner plusieurs codes et les restaurer ou les supprimer ensemble.

Les codes dans la corbeille ne comptent pas dans la limite de votre abonnement.

<div class="warn"><strong>Attention aux codes imprimés.</strong> Avant de supprimer un code déjà imprimé, pensez plutôt à le désactiver, ou à le rediriger vers une page « cette offre est terminée » avec <em>Edit redirect URL</em>.</div>
