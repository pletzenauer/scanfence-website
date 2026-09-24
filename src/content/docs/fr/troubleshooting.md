---
title: Dépannage
description: Des réponses rapides aux questions les plus fréquentes, et comment nous joindre si elles ne suffisent pas.
---

## Connexion

**"Too many failed attempts. Account locked for …"**
Après cinq mots de passe erronés d'affilée, la connexion est suspendue pendant 15 minutes. Patientez, ou réinitialisez votre mot de passe avec **Forgot password?**.

**L'e-mail de réinitialisation n'arrive pas.**
Vérifiez votre dossier de spam et que vous avez bien saisi l'adresse utilisée à l'inscription. Par sécurité, nous indiquons toujours qu'un e-mail a été envoyé, même si l'adresse n'est pas enregistrée.

**"An account with this email already exists."**
Vous vous êtes déjà inscrit. Connectez-vous plutôt, ou réinitialisez votre mot de passe.

## Création de codes

**<kbd>+ Generate QR</kbd> est grisé.**
Soit vous n'avez pas d'abonnement actif, soit vous avez atteint la limite de codes de votre abonnement. Vérifiez le compteur en haut de la page QR Codes. Voir [Abonnements et limites](/documentation/plans-and-limits/).

**"Error creating geofence".**
Le rayon est probablement inférieur à 50 m. Les géobarrières doivent mesurer entre 50 m et 5 000 m.

**La recherche d'adresse place l'épingle au mauvais endroit.**
Précisez l'adresse (rue, numéro, ville, pays), ou faites un clic droit sur l'endroit exact dans Google Maps, copiez les coordonnées et collez-les dans Latitude et Longitude.

## Scan

**Des personnes sur place sont indiquées comme hors zone.**
Leur localisation GPS est imprécise, généralement en intérieur. Augmentez le rayon ; voir [choisir le bon rayon](/documentation/geofences/#choosing-the-right-radius). **Location accuracy** dans les [Statistiques](/documentation/analytics/) montre la précision des téléphones sur votre lieu.

**La position n'est jamais demandée aux personnes qui scannent.**
Elles l'ont refusée une fois et le navigateur s'en souvient. Voir [Si une personne est refusée](/documentation/scanning/#if-a-scanner-is-refused).

**J'ai changé la destination mais les gens arrivent toujours sur l'ancienne page.**
Seuls les codes dynamiques peuvent être modifiés. Pour un code statique, le lien est inscrit dans le motif lui-même ; créez un code dynamique et réimprimez. Si le code est dynamique, vérifiez si une règle horaire est active en ce moment, car les règles priment sur la page par défaut.

**Le code affiche « inactive » ou « reached its scan limit ».**
Réactivez-le, ou augmentez ou réinitialisez la limite, depuis la fiche du code. Voir [Limites de scans](/documentation/scan-limits/).

## Chiffres

**Mes scans ne sont pas comptés.**
Les codes standard statiques ne sont pas suivis ; rendez le code dynamique. Les scans répétés très rapprochés depuis un même réseau ne sont comptés que jusqu'à 30 par heure et par code.

**Les statistiques semblent vides.**
Vérifiez la période en haut de la page et effacez les filtres de tags.

## Équipe

**Je ne peux inviter personne.**
Toutes les places sont prises, ou votre rôle est *Field user*. Voir [Équipe et rôles](/documentation/team/).

**Le lien d'invitation d'un collègue ne fonctionne pas.**
Les invitations expirent au bout de 7 jours. Annulez-la sur la page Team et envoyez-en une nouvelle.

## Contact

Ouvrez **Support** dans le menu de l'application, ou écrivez à [hello@scanfence.com](mailto:hello@scanfence.com). Indiquez votre identifiant utilisateur figurant dans **My Settings**, le nom du code et, si possible, une capture d'écran. Pour une aide à la configuration, une revue de campagne ou une migration depuis un autre outil de codes QR, vous pouvez réserver une séance d'accompagnement payante depuis la page Support.

<figure><img src="/images/docs/support-dark.webp" alt="La page Support avec les moyens de contact et les séances d'aide réservables" width="1600" height="1250" loading="lazy"><figcaption>La page Support dans l'application.</figcaption></figure>
