---
title: Códigos multilocal
description: Um código impresso, até dez lugares, cada um com seu próprio destino, programação e limite de leituras.
---

Um código multilocal verifica onde a pessoa está e a envia para a página da zona em que ela se encontra. Se ela estiver em várias zonas ao mesmo tempo, vale a mais próxima. Quem estiver fora de todas as zonas vai para a **URL alternativa**.

**Exemplo:** uma rede imprime o mesmo display de mesa para todos os seus cafés. Em cada café, o código abre o cardápio daquele café. Em casa, abre o site da rede.

## Criar um código

1. Em **QR Codes**, clique em <kbd>+ Generate QR</kbd> e escolha **Multi-location**.
2. Informe a **Fallback URL (Default)**: para onde as pessoas vão quando não estão em nenhum dos seus locais ou não compartilham a localização.
3. Clique em **Add location** e preencha:
   - **Label/Name**, por exemplo *Café Centro Histórico*
   - **Search by address**, ou **Latitude** e **Longitude**
   - **Radius (meters)**
   - **Destination URL** deste lugar
4. Repita para até **10 locais**. Entradas incompletas ficam marcadas como *(incomplete)* até que todos os campos sejam preenchidos.
5. Clique em <kbd>Generate QR →</kbd>.

## Extras por local

Cada local pode ter seus próprios:

- **Programação por horário** com **Time of day**, **Days of week** e **Date range**, além de uma **Priority** de 1 a 10. Use quando um lugar só deve valer durante o horário de funcionamento.
- **Limite de escassez:** as primeiras N leituras neste local recebem a página dele. Depois disso, todos recebem a **Fallback URL (when limit reached)** do próprio local.

## Editar locais e ver os números

No cartão do código, clique em <kbd>Edit locations & stats</kbd>. A janela **Location rules & statistics** mostra todas as zonas em um só mapa, com uma cor por local. Abaixo do mapa, você pode buscar na lista, adicionar, editar ou excluir locais e ver as estatísticas de leitura, o máximo de leituras e as regras de horário de cada um.

<figure><img src="/images/docs/multi-overview-dark.webp" alt="A janela Location rules and statistics com três cafés mostrados como círculos coloridos em um mapa da cidade" width="1600" height="1250" loading="lazy"><figcaption>Três locais de um código em um mapa compartilhado. Usuários de campo podem ver esta janela, mas não alterá-la.</figcaption></figure>

## Dicas

- Sempre que possível, evite que as zonas se sobreponham. Onde houver sobreposição, vale o centro mais próximo.
- Um código multilocal conta como um código no seu plano, não importa quantos locais tenha.
- Códigos multilocal sempre passam pelo ScanFence, então você pode editar qualquer local depois sem reimprimir.
