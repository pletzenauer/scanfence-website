---
title: Tableau de bord
description: Les chiffres du jour et un flux en direct des derniers scans, le premier écran après la connexion.
---

<figure><img src="/images/docs/dashboard-dark.webp" alt="Le tableau de bord avec quatre tuiles de chiffres et le tableau de l'activité récente des scans" width="1600" height="1250" loading="lazy"><figcaption>Le tableau de bord se met à jour en direct, sans rechargement.</figcaption></figure>

## Les quatre tuiles

| Tuile | Affiche |
|---|---|
| **Scans · today** | Tous les scans des codes de votre espace de travail depuis minuit. |
| **Compliance** | La part des scans du jour avec contrôle de position qui ont eu lieu dans une géobarrière. À partir de 90 %, la tuile indique *healthy*, en dessous *watch*. |
| **Geofences** | Le nombre de vos zones actives. |
| **Active users** | Le nombre de personnes dans votre espace de travail. |

Un taux de conformité en baisse signifie généralement l'une de deux choses : des personnes essaient les codes loin du lieu, ou une zone est trop petite pour la précision GPS sur place. Les [Statistiques](/documentation/analytics/) vous montrent laquelle.

## Activité récente des scans

Le tableau liste les dix derniers scans en temps réel :

- **When :** date et heure du scan.
- **User · QR :** qui a scanné et quel code. Les personnes du public apparaissent comme *Anonymous*.
- **Verdict :** *Verified* à l'intérieur d'une zone, *Blocked* à l'extérieur.
- **Where :** la zone utilisée pour le contrôle.
- **Delta :** la distance par rapport au centre de la zone.

## Bandeaux que vous pouvez voir

- **Invitations d'équipe :** quelqu'un vous a invité dans son espace de travail. Cliquez sur <kbd>Review</kbd> pour accepter ou refuser. Voir [Équipe et rôles](/documentation/team/#joining-a-team).
- **Aucun abonnement actif :** votre compte fonctionne, mais créer et scanner des codes nécessite un abonnement. Cliquez sur <kbd>View plans →</kbd>.
