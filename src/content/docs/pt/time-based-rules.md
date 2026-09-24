---
title: Regras de horário
description: Envie quem lê para uma página diferente em certos horários, em certos dias da semana ou durante um período, sem reimprimir o código.
---

Uma regra de horário dá a um código um segundo destino, que vale só enquanto as condições dela são atendidas. Fora desses horários, o código funciona normalmente.

**Exemplos**

- O código de uma mesa de restaurante abre o cardápio de almoço das 11:30 às 15:00 nos dias úteis e o cardápio normal no resto do tempo.
- Um cartaz leva à bilheteria até o evento e à galeria de fotos depois dele.
- O código de uma vitrine mostra "estamos abertos, pode entrar" no horário de funcionamento e a loja online à noite.

## Adicionar uma regra

1. No cartão do código, clique em <kbd>Add time-based rules</kbd>. Você também pode ativar **Time-based rules** ao criar um código.
2. Ative **Time-based rules**.
3. Informe a **Time-based destination URL**: para onde as pessoas vão enquanto a regra vale.
4. Ative as condições de que precisa:
   - **Time of day:** um horário de **Open** e de **Close**, por exemplo das 09:00 às 17:00.
   - **Days of week:** clique nos dias que quer incluir. De segunda a sexta já vem selecionado.
   - **Date range:** uma data de início e uma de fim.
5. Clique em <kbd>Save rules</kbd>.

<figure class="medium"><img src="/images/docs/qr-time-rules-dark.webp" alt="A janela Edit time-based rules com horário das 09:00 às 17:00 e de segunda a sexta selecionados" width="1008" height="1197" loading="lazy"><figcaption>Esta regra vale nos dias úteis, das 9:00 às 17:00. Em todos os outros horários, o código abre a página padrão.</figcaption></figure>

## Como as condições se combinam

**Todas as condições ativadas precisam ser verdadeiras ao mesmo tempo.** Com *Time of day 09:00–17:00* e *Mon–Fri*, a regra vale nos dias úteis em horário comercial, e não no sábado ao meio-dia.

Se você ativar a regra sem nenhuma condição, ela vale o tempo todo.

## Alterar ou remover uma regra

Clique em <kbd>View time-based rules</kbd> no cartão para ver a programação e depois editá-la. Para remover uma regra, desative **Time-based rules** e clique em <kbd>Save rules</kbd>.

Cada código tem uma regra. Para um código com vários horários, por exemplo café da manhã, almoço e jantar, use um [código multilocal](/documentation/multi-location/), que permite que cada local tenha sua própria programação e prioridade.

## Dicas

- As regras exigem um código dinâmico. Ativar uma regra ao criar um código o torna dinâmico automaticamente.
- Teste uma regra nova lendo o código dentro e fora do horário dela antes de imprimir.
- Compare o tráfego da regra e o padrão em **Rule type distribution** e **Time-based rule performance** na página de [Análises](/documentation/analytics/).
