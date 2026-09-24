---
title: Análises
description: Mapas, gráficos e exportações das suas leituras, para todo o espaço de trabalho ou para um único código.
---

## A página Analytics

Abra **Analytics** no menu. Por padrão, ela mostra os últimos 7 dias.

<figure><img src="/images/docs/analytics-dark.webp" alt="A página Analytics com blocos de números, período, filtros e o mapa de leituras" width="1600" height="1250" loading="lazy"><figcaption>Análises do período selecionado.</figcaption></figure>

### Blocos de números

- **Today's scans:** leituras desde a meia-noite, atualizadas ao vivo.
- **Active users:** pessoas que fizeram leituras nos últimos 5 minutos.
- **Avg accuracy:** a precisão média do GPS dos celulares, em metros. Quanto menor, melhor.
- **High precision:** leituras com precisão melhor que 20 m.

### Período e filtros

Escolha uma data de **início** e de **fim** em **Date range**. Em **Filters**, clique nas tags para mostrar só os códigos que as têm. **Clear** limpa os filtros.

### Gráficos

| Painel | O que mostra |
|---|---|
| **Scan locations · map** | Onde as leituras aconteceram. Pontos verdes estavam dentro de uma zona, vermelhos fora, azuis mistos ou desconhecidos. Leituras próximas são agrupadas. Aproxime o mapa para separá-las. |
| **Scans over time** | Leituras por dia. Útil para ver o efeito de uma campanha ou de um evento. |
| **Compliance rate** | Dentro versus fora de uma geocerca, em um gráfico de anel. |
| **Location accuracy** | Quantas leituras tiveram GPS excelente (menos de 10 m), bom (10–20 m), razoável (20–50 m) ou ruim (mais de 50 m). Muitas leituras *poor* indicam um local fechado. Pense em usar um raio maior. |
| **Live scan feed** | As dez últimas leituras, à medida que acontecem. |
| **Scans by geofence · top 10** | Seus códigos mais movimentados. |
| **Rule type distribution** | Quantas leituras foram direcionadas por uma regra de horário, pela localização ou para a página padrão. |
| **Time-based rule performance** | Com que frequência cada regra de horário foi acionada. |

### Exportar

<kbd>Export CSV →</kbd> baixa todas as leituras do período escolhido como planilha: data, hora, usuário, geocerca, dentro ou fora, distância, coordenadas, precisão, altitude, velocidade, bateria e tipo de rede. Abra no Excel, Numbers ou Google Sheets.

## Análises de um código

No cartão de qualquer código, clique em <kbd>View analytics</kbd>. A janela mostra o total de leituras do código, as leituras com localização e quando ele foi lido pela última vez. Logo abaixo vêm um mapa e as leituras mais recentes com seus detalhes.

<figure><img src="/images/docs/qr-analytics-dark.webp" alt="A janela de análises de um único código com totais, botões de exportação e um mapa das leituras" width="1600" height="1250" loading="lazy"><figcaption>Análises por código. O mapa colore as leituras conforme quantas aconteceram no mesmo lugar.</figcaption></figure>

Daqui você pode exportar as leituras do código em **CSV** ou como relatório em **PDF**, prático para enviar a um cliente ou a um gestor. A janela mostra as 100 leituras mais recentes. A página Analytics e a exportação dela cobrem mais.

## O que é contado

- Códigos padrão estáticos não são contados: o celular abre seu link sem passar pelo ScanFence. Torne os códigos dinâmicos para acompanhá-los. Veja [Estático ou dinâmico](/documentation/create-qr-codes/#static-or-dynamic).
- Para manter os números confiáveis, leituras repetidas em sequência vindas da mesma rede são contadas só até 30 por hora por código.
