---
title: Limites de scans
description: "Ne laissez passer que les N premiers scans, « un café offert aux 100 premiers », et envoyez toutes les personnes suivantes vers la page de votre choix."
---

Une limite de scans (appelée **global scarcity limit** dans l'application) compte chaque scan d'un code. Une fois la limite atteinte, toutes les personnes qui scannent ensuite sont envoyées vers une **page de limite atteinte** au lieu de la destination habituelle.

**Exemples :** les 100 premiers visiteurs reçoivent un bon ; un jeu-concours s'arrête après 500 participations ; une édition limitée est épuisée.

## Définir une limite en créant un code

1. Dans la fenêtre **Generate a code**, cochez **Global scarcity limit**. La limite commence à 50.
2. Saisissez la **Total scan limit**.
3. Saisissez la **Limit-reached URL**, par exemple une page « désolé, tout est parti ».

## Définir ou modifier une limite plus tard

Sur la fiche du code, l'encadré **Scans & limits** affiche le compteur, par exemple *Total 37 / 100*, avec une barre de progression.

- Cliquez sur <kbd>Edit</kbd> pour modifier la **Global scan limit** (0 signifie illimité) et la **Redirect URL when limit reached**, puis sur <kbd>Save changes</kbd>.
- Cliquez sur <kbd>Reset</kbd> pour remettre le compteur à 0 et lancer une nouvelle série. Cela réinitialise aussi les compteurs des règles du code.

## Bon à savoir

- Si vous laissez l'URL de limite atteinte vide, les personnes voient un bref message *This QR code has reached its scan limit*.
- Pour garder un comptage équitable, les scans répétés depuis un même réseau ne sont comptés que jusqu'à 30 fois par heure et par code. Ces scans supplémentaires ouvrent quand même la page ; ils n'entament simplement pas votre limite.
- Les [codes multi-sites](/documentation/multi-location/) peuvent aussi avoir une limite distincte par lieu.
