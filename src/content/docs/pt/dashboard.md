---
title: Painel
description: Os números de hoje e um feed ao vivo das últimas leituras, a primeira tela depois do login.
---

<figure><img src="/images/docs/dashboard-dark.webp" alt="O painel com quatro blocos de números e a tabela de atividade recente de leituras" width="1600" height="1250" loading="lazy"><figcaption>O painel se atualiza ao vivo, sem precisar recarregar.</figcaption></figure>

## Os quatro blocos

| Bloco | Mostra |
|---|---|
| **Scans · today** | Todas as leituras dos códigos do seu espaço de trabalho desde a meia-noite. |
| **Compliance** | A parcela das leituras de hoje com verificação de localização que aconteceram dentro de uma geocerca. 90 % ou mais aparece como *healthy*, abaixo disso *watch*. |
| **Geofences** | Quantas das suas zonas estão ativas. |
| **Active users** | Quantas pessoas estão no seu espaço de trabalho. |

Uma taxa de conformidade em queda costuma significar uma de duas coisas: pessoas estão tentando usar os códigos longe do local, ou uma zona é pequena demais para a precisão do GPS ali. As [Análises](/documentation/analytics/) mostram qual é o caso.

## Atividade recente de leituras

A tabela lista as dez últimas leituras à medida que acontecem:

- **When:** data e hora da leitura.
- **User · QR:** quem leu e qual código. Pessoas do público aparecem como *Anonymous*.
- **Verdict:** *Verified* dentro de uma zona, *Blocked* fora.
- **Where:** a zona usada na verificação.
- **Delta:** a distância até o centro da zona.

## Avisos que você pode ver

- **Convites de equipe:** alguém convidou você para o espaço de trabalho dele. Clique em <kbd>Review</kbd> para aceitar ou recusar. Veja [Equipe e funções](/documentation/team/#joining-a-team).
- **Sem assinatura ativa:** sua conta funciona, mas criar e ler códigos exige um plano. Clique em <kbd>View plans →</kbd>.
