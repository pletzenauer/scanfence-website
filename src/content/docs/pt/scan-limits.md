---
title: Limites de leitura
description: "Deixe passar só as primeiras N leituras, \"os 100 primeiros ganham um café\", e envie todos os seguintes para uma página à sua escolha."
---

Um limite de leitura (chamado **global scarcity limit** no app) conta cada leitura de um código. Quando a contagem atinge o seu limite, todas as pessoas seguintes vão para uma **página de limite atingido** em vez do destino normal.

**Exemplos:** os 100 primeiros visitantes ganham um cupom; um sorteio termina depois de 500 inscrições; um lançamento limitado se esgota.

## Definir um limite ao criar um código

1. Na janela **Generate a code**, marque **Global scarcity limit**. O limite começa em 50.
2. Informe o **Total scan limit**.
3. Informe a **Limit-reached URL**, por exemplo uma página de "desculpe, acabou".

## Definir ou mudar um limite depois

No cartão do código, a caixa **Scans & limits** mostra a contagem, por exemplo *Total 37 / 100*, com uma barra de progresso.

- Clique em <kbd>Edit</kbd> para mudar o **Global scan limit** (0 significa ilimitado) e a **Redirect URL when limit reached**, e depois em <kbd>Save changes</kbd>.
- Clique em <kbd>Reset</kbd> para zerar o contador e começar uma nova rodada. Isso também zera os contadores das regras do código.

## Bom saber

- Se você deixar a URL de limite atingido vazia, as pessoas veem uma mensagem curta: *This QR code has reached its scan limit*.
- Para manter a contagem justa, leituras repetidas da mesma rede são contadas só até 30 vezes por hora por código. Essas leituras extras ainda abrem a página. Elas apenas não consomem o seu limite.
- [Códigos multilocal](/documentation/multi-location/) também podem ter um limite separado para cada local.
