---
title: Règles horaires
description: Envoyez les personnes qui scannent vers une autre page à certaines heures, certains jours de la semaine ou pendant une période, sans réimprimer le code.
---

Une règle horaire donne à un code une seconde destination, qui ne s'applique que lorsque ses conditions sont remplies. En dehors de ces moments, le code fonctionne normalement.

**Exemples**

- Le code d'une table de restaurant ouvre le menu du midi de 11:30 à 15:00 en semaine, et la carte habituelle le reste du temps.
- Une affiche renvoie vers la billetterie jusqu'à l'événement, puis vers la galerie photo.
- Le code d'une vitrine affiche « nous sommes ouverts, entrez » pendant les heures d'ouverture et la boutique en ligne la nuit.

## Ajouter une règle

1. Sur la fiche du code, cliquez sur <kbd>Add time-based rules</kbd>. Vous pouvez aussi activer **Time-based rules** lors de la création d'un code.
2. Activez **Time-based rules**.
3. Saisissez la **Time-based destination URL** : la page vers laquelle vont les gens pendant que la règle s'applique.
4. Activez les conditions dont vous avez besoin :
   - **Time of day :** une heure **Open** et **Close**, par exemple de 09:00 à 17:00.
   - **Days of week :** cliquez sur les jours à inclure. Du lundi au vendredi est présélectionné.
   - **Date range :** une date de début et de fin.
5. Cliquez sur <kbd>Save rules</kbd>.

<figure class="medium"><img src="/images/docs/qr-time-rules-dark.webp" alt="La fenêtre Edit time-based rules avec une plage horaire de 09:00 à 17:00 et du lundi au vendredi sélectionnés" width="1008" height="1197" loading="lazy"><figcaption>Cette règle s'applique en semaine de 9:00 à 17:00. Le reste du temps, le code ouvre sa page par défaut.</figcaption></figure>

## Comment les conditions se combinent

**Toutes les conditions activées doivent être remplies en même temps.** Avec *Time of day 09:00–17:00* et *Mon–Fri*, la règle s'applique en semaine aux heures de bureau, et pas le samedi à midi.

Si vous activez la règle sans aucune condition, elle s'applique en permanence.

## Modifier ou supprimer une règle

Cliquez sur <kbd>View time-based rules</kbd> sur la fiche pour voir le planning, puis modifiez-le. Pour supprimer une règle, désactivez **Time-based rules** et cliquez sur <kbd>Save rules</kbd>.

Chaque code a une seule règle. Pour un code avec plusieurs plages horaires, par exemple petit-déjeuner, déjeuner et dîner, utilisez un [code multi-sites](/documentation/multi-location/), qui permet à chaque lieu d'avoir son propre planning et sa propre priorité.

## Conseils

- Les règles nécessitent un code dynamique. Activer une règle lors de la création d'un code le rend dynamique automatiquement.
- Testez une nouvelle règle en scannant pendant et en dehors de sa plage horaire avant d'imprimer.
- Comparez le trafic des règles et celui par défaut sous **Rule type distribution** et **Time-based rule performance** sur la page [Statistiques](/documentation/analytics/).
