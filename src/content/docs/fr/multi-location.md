---
title: Codes multi-sites
description: Un seul code imprimé, jusqu'à dix lieux, chacun avec sa propre destination, son planning et sa limite de scans.
---

Un code multi-sites vérifie où se trouve la personne qui scanne et l'envoie vers la page de la zone dans laquelle elle se tient. Si elle se trouve dans plusieurs zones à la fois, la plus proche l'emporte. Toute personne située hors de toutes les zones est envoyée vers la **fallback URL**.

**Exemple :** une chaîne imprime le même chevalet de table pour tous ses cafés. Dans chaque café, le code ouvre le menu de ce café ; à la maison, il ouvre le site de la chaîne.

## En créer un

1. Sur **QR Codes**, cliquez sur <kbd>+ Generate QR</kbd> et choisissez **Multi-location**.
2. Saisissez la **Fallback URL (Default)** : la page vers laquelle vont les personnes qui ne sont dans aucun de vos lieux ou qui ne partagent pas leur position.
3. Cliquez sur **Add location** et remplissez :
   - **Label/Name**, par ex. *Café Old Town*
   - **Search by address**, ou **Latitude** et **Longitude**
   - **Radius (meters)**
   - **Destination URL** pour ce lieu
4. Répétez l'opération pour **10 lieux** au maximum. Les entrées incomplètes sont marquées *(incomplete)* jusqu'à ce que tous les champs soient remplis.
5. Cliquez sur <kbd>Generate QR →</kbd>.

## Options par lieu

Chaque lieu peut avoir son propre :

- **Planning horaire** avec **Time of day**, **Days of week** et **Date range**, ainsi qu'une **Priority** de 1 à 10. Utilisez-le quand un lieu ne doit compter que pendant ses heures d'ouverture.
- **Limite de rareté :** les N premiers scans dans ce lieu obtiennent sa page ; toutes les personnes suivantes sont envoyées vers la **Fallback URL (when limit reached)** propre au lieu.

## Modifier les lieux et voir leurs chiffres

Sur la fiche du code, cliquez sur <kbd>Edit locations & stats</kbd>. La fenêtre **Location rules & statistics** affiche toutes les zones sur une même carte, avec une couleur par lieu. Sous la carte, vous pouvez rechercher dans la liste, ajouter, modifier ou supprimer des lieux, et voir pour chacun les statistiques de scans, le nombre maximal de scans et les règles horaires.

<figure><img src="/images/docs/multi-overview-dark.webp" alt="La fenêtre Location rules and statistics avec trois cafés représentés par des cercles colorés sur un plan de ville" width="1600" height="1250" loading="lazy"><figcaption>Trois lieux d'un même code sur une carte commune. Les utilisateurs terrain peuvent consulter cette fenêtre, mais pas la modifier.</figcaption></figure>

## Conseils

- Évitez autant que possible que les zones se chevauchent. Là où elles se chevauchent, le centre le plus proche l'emporte.
- Un code multi-sites compte comme un seul code dans votre abonnement, quel que soit le nombre de lieux.
- Les codes multi-sites passent toujours par ScanFence : vous pouvez donc modifier chaque lieu plus tard sans réimprimer.
