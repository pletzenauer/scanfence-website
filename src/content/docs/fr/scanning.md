---
title: Ce que voient les personnes qui scannent
description: Ce qui se passe sur le téléphone de quelqu'un qui scanne votre code, et comment l'expliquer à vos visiteurs.
---

Les personnes qui scannent vos codes n'ont besoin ni d'application ni de compte. Elles utilisent l'appareil photo de leur téléphone comme pour n'importe quel code QR.

## Codes standard

Le téléphone ouvre votre page immédiatement. Les codes dynamiques font un bref détour par ScanFence, où ils sont comptés et où les règles et limites s'appliquent. Les personnes qui scannent ne le remarquent pas.

## Codes qui vérifient la position

Les codes à géobarrière et multi-sites ouvrent d'abord une courte page ScanFence qui demande la position du téléphone.

1. Le téléphone affiche sa demande habituelle, *« app.scanfence.com souhaite utiliser votre position »* ou similaire. La personne appuie sur **Autoriser**.
2. ScanFence compare la position avec votre zone. Cela prend une ou deux secondes, davantage si le téléphone doit d'abord capter un signal GPS.
3. Le résultat dépend de l'endroit où se trouve la personne :

| Situation | Code à géobarrière | Code multi-sites |
|---|---|---|
| Dans la zone | Confirmé : *"You're at …"* | Envoyée vers la page de ce lieu |
| En dehors | *"You're outside …"*, avec une invitation à se rapprocher. Elle peut réessayer. | Envoyée vers la page de repli |
| Position refusée ou indisponible | Invitée à activer la localisation et à réessayer | Envoyée vers la page de repli |

> **Ajoutez une phrase à côté du code** sur votre affiche, par exemple *« Autorisez la localisation si on vous la demande : ce code ne fonctionne que sur place. »* Cela réduit nettement les refus d'autorisation.

## Si une personne est refusée

- **Elle est sur place mais quand même refusée.** Son téléphone a peut-être une mauvaise localisation, surtout en intérieur. Demandez-lui de s'approcher d'une fenêtre ou de sortir, puis de réessayer. Si cela arrive souvent, augmentez le [rayon](/documentation/geofences/#choosing-the-right-radius) de la zone.
- **La localisation est désactivée.** Sur iPhone : *Réglages → Confidentialité et sécurité → Service de localisation*, puis l'autoriser pour le navigateur. Sur Android : faites glisser les réglages rapides vers le bas et activez *Localisation*.
- **Elle a appuyé sur « Ne pas autoriser » auparavant.** Le navigateur s'en souvient. Elle doit autoriser la localisation pour le site dans les réglages de son navigateur, puis scanner à nouveau.
- **Beaucoup de scans d'affilée depuis un même réseau.** Pour éviter les abus, les vérifications de position sont limitées par réseau. Après de nombreuses tentatives en une heure, les personnes voient *"Too many location checks from your network"* et doivent patienter.

## Codes désactivés, épuisés et supprimés

- Un code que vous avez rendu **inactif** affiche *"This QR code is inactive"*.
- Un code qui a dépassé sa [limite de scans](/documentation/scan-limits/) mène à votre page de limite atteinte, ou affiche un bref message si vous n'en avez pas défini.
- Un code dans la **corbeille** ne fonctionne plus.
