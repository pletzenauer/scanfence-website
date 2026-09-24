---
title: Tijdsregels
description: Stuur scanners op bepaalde tijden van de dag, op bepaalde weekdagen of in een periode naar een andere pagina, zonder de code opnieuw te drukken.
---

Een tijdsregel geeft een code een tweede bestemming die alleen geldt zolang aan de voorwaarden wordt voldaan. Buiten die tijden werkt de code zoals gewoonlijk.

**Voorbeelden**

- Een tafelcode in een restaurant opent op werkdagen van 11:30 tot 15:00 de lunchkaart en anders de gewone kaart.
- Een poster linkt tot het evenement naar de ticketshop en daarna naar de fotogalerij.
- Een code in een etalage toont tijdens openingstijden dat de winkel open is en 's avonds de webshop.

## Een regel toevoegen

1. Klik op de kaart van de code op <kbd>Add time-based rules</kbd>. U kunt **Time-based rules** ook al inschakelen bij het aanmaken van een code.
2. Schakel **Time-based rules** in.
3. Voer de **Time-based destination URL** in: waar mensen naartoe gaan zolang de regel geldt.
4. Schakel de voorwaarden in die u nodig hebt:
   - **Time of day:** een tijd voor **Open** en **Close**, bijvoorbeeld 09:00 tot 17:00.
   - **Days of week:** klik op de dagen die meetellen. Maandag tot en met vrijdag is vooraf geselecteerd.
   - **Date range:** een begin- en einddatum.
5. Klik op <kbd>Save rules</kbd>.

<figure class="medium"><img src="/images/docs/qr-time-rules-dark.webp" alt="Het venster Edit time-based rules met tijd van de dag 09:00 tot 17:00 en maandag tot en met vrijdag geselecteerd" width="1008" height="1197" loading="lazy"><figcaption>Deze regel geldt op werkdagen van 9:00 tot 17:00. Op alle andere momenten opent de code zijn standaardpagina.</figcaption></figure>

## Hoe voorwaarden samenwerken

**Alle ingeschakelde voorwaarden moeten tegelijk waar zijn.** Met *Time of day 09:00–17:00* en *Mon–Fri* geldt de regel op werkdagen tijdens kantooruren, en niet op zaterdag om twaalf uur.

Schakelt u de regel in zonder voorwaarde, dan geldt die altijd.

## Een regel wijzigen of verwijderen

Klik op de kaart op <kbd>View time-based rules</kbd> om de planning te zien en bewerk die daarna. Om een regel te verwijderen, schakelt u **Time-based rules** uit en klikt u op <kbd>Save rules</kbd>.

Elke code heeft één regel. Voor een code met meerdere tijdvensters, bijvoorbeeld ontbijt, lunch en diner, gebruikt u een [code voor meerdere locaties](/documentation/multi-location/). Daarbij kan elke locatie een eigen planning en prioriteit hebben.

## Tips

- Regels werken alleen met een dynamische code. Schakelt u een regel in bij het aanmaken van een code, dan wordt die automatisch dynamisch.
- Test een nieuwe regel vóór het drukken door binnen en buiten het tijdvenster te scannen.
- Vergelijk het verkeer via regels en via de standaardpagina onder **Rule type distribution** en **Time-based rule performance** op de pagina [Analyses](/documentation/analytics/).
