---
title: Solução de problemas
description: Respostas rápidas para as perguntas mais comuns, e como falar com a gente quando elas não resolverem.
---

## Entrar na conta

**"Too many failed attempts. Account locked for …"**
Depois de cinco senhas erradas seguidas, o login fica pausado por 15 minutos. Espere, ou redefina sua senha em **Forgot password?**.

**O e-mail de redefinição não chega.**
Confira sua pasta de spam e se você digitou o endereço usado no cadastro. Por segurança, sempre dizemos que um e-mail foi enviado, mesmo quando o endereço não está cadastrado.

**"An account with this email already exists."**
Você já se cadastrou antes. Entre na conta, ou redefina sua senha.

## Criar códigos

**<kbd>+ Generate QR</kbd> está acinzentado.**
Ou você não tem um plano ativo, ou atingiu o limite de códigos do seu plano. Confira o contador no topo da página QR Codes. Veja [Planos e limites](/documentation/plans-and-limits/).

**"Error creating geofence".**
O raio provavelmente está abaixo de 50 m. As geocercas precisam ter entre 50 m e 5.000 m.

**A busca de endereço coloca o marcador no lugar errado.**
Deixe o endereço mais específico (rua, número, cidade, país), ou clique com o botão direito no ponto exato no Google Maps, copie as coordenadas e cole em Latitude e Longitude.

## Leituras

**Pessoas no local recebem a mensagem de que estão fora.**
A localização do GPS delas está imprecisa, geralmente em locais fechados. Aumente o raio. Veja [como escolher o raio certo](/documentation/geofences/#choosing-the-right-radius). **Location accuracy** nas [Análises](/documentation/analytics/) mostra a precisão dos celulares no seu local.

**Quem lê nunca recebe o pedido de localização.**
A pessoa recusou uma vez e o navegador lembra. Veja [Se alguém for recusado](/documentation/scanning/#if-a-scanner-is-refused).

**Mudei o destino, mas as pessoas ainda veem a página antiga.**
Só códigos dinâmicos podem ser alterados. Em um código estático, o link está impresso no próprio padrão. Crie um código dinâmico e reimprima. Se o código for dinâmico, veja se há uma regra de horário ativa neste momento, porque as regras têm prioridade sobre a página padrão.

**O código mostra "inactive" ou "reached its scan limit".**
Ative o código de novo, ou aumente ou zere o limite, no cartão do código. Veja [Limites de leitura](/documentation/scan-limits/).

## Números

**Minhas leituras não são contadas.**
Códigos padrão estáticos não são acompanhados. Torne o código dinâmico. Leituras repetidas muito rápidas da mesma rede são contadas só até 30 por hora por código.

**As análises parecem vazias.**
Confira o período no topo e limpe os filtros de tags.

## Equipe

**Não consigo convidar ninguém.**
Todas as vagas estão ocupadas, ou sua função é *Field user*. Veja [Equipe e funções](/documentation/team/).

**O link de convite de um colega não funciona.**
Os convites expiram depois de 7 dias. Cancele o convite na página Team e envie um novo.

## Contato

Abra **Support** no menu do app, ou escreva para [hello@scanfence.com](mailto:hello@scanfence.com). Informe seu ID de usuário de **My Settings**, o nome do código e, se puder, uma captura de tela. Para ajuda na configuração, revisão de campanha ou migração de outra ferramenta de QR, você pode agendar uma sessão individual paga na página Support.

<figure><img src="/images/docs/support-dark.webp" alt="A página Support com canais de contato e sessões de ajuda que podem ser agendadas" width="1600" height="1250" loading="lazy"><figcaption>A página Support no app.</figcaption></figure>
