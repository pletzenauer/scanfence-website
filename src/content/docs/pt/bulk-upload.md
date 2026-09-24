---
title: Upload em massa
description: Crie dezenas ou centenas de códigos QR de uma vez a partir de uma planilha CSV.
---

O upload em massa ajuda quando você precisa de muitos códigos parecidos: um por mesa, por produto, por filial. Você preenche uma planilha, salva como CSV e faz o upload. O ScanFence cria um código por linha.

> O upload em massa é ativado pela equipe do ScanFence. Se você não vê <kbd>Upload</kbd> na página QR Codes, [peça para nós](mailto:hello@scanfence.com) ativarmos.

## Passo a passo

1. Na página **QR Codes**, clique em <kbd>Upload</kbd>.
2. Clique em **Download sample CSV →** para baixar `qr-codes-bulk-template.csv` com linhas de exemplo.
3. Abra no Excel, Numbers ou Google Sheets e preencha uma linha por código. Mantenha a primeira linha (os nomes das colunas) como está.
4. Salve ou exporte como **CSV**.
5. De volta à janela de upload, escolha seu arquivo em **Upload your CSV file**. O upload começa assim que você o seleciona.
6. Em seguida, **Upload results** mostra quantos códigos foram criados e, se alguma linha falhou, quais e por quê.

<figure class="medium"><img src="/images/docs/qr-bulk-upload-dark.webp" alt="A janela Bulk upload QR codes listando as colunas obrigatórias, opcionais, de limite de leituras e de geocerca" width="1344" height="1350" loading="lazy"><figcaption>A janela de upload lista todas as colunas que o arquivo pode ter.</figcaption></figure>

## Colunas

| Coluna | Obrigatória | O que colocar |
|---|---|---|
| `type` | Sim | `standard` ou `geofence` |
| `content` | Sim | O link ou texto. Em códigos dinâmicos, o destino. |
| `name` | Não | Um nome de exibição, por exemplo *Mesa 12* |
| `category` | Não | O nome de uma categoria existente |
| `tags` | Não | Nomes de tags existentes, separados por `;` |
| `is_dynamic` | Não | `true` para tornar o código dinâmico. Caso contrário, deixe vazio ou `false` |
| `global_scan_limit` | Não | Um número, por exemplo `100`. Veja [Limites de leitura](/documentation/scan-limits/) |
| `limit_reached_url` | Não | Para onde as pessoas vão quando o limite é atingido |
| `geofence_lat` | Para geocerca | Latitude, por exemplo `48.2082` |
| `geofence_lng` | Para geocerca | Longitude, por exemplo `16.3738` |
| `geofence_radius` | Não | Raio em metros, de 50 a 5,000. Padrão 50 |

### Exemplo

```
name,type,category,content,is_dynamic,global_scan_limit,limit_reached_url,geofence_lat,geofence_lng,geofence_radius,tags
Table 1,geofence,Menus,https://example.com/menu,true,,,48.2082,16.3738,60,tables;indoor
Launch offer,standard,Marketing,https://example.com/offer,true,100,https://example.com/sold-out,,,,promo
```

## Dicas

- **Crie as categorias e tags antes.** Nomes que ainda não existem são ignorados, e o código é criado sem eles.
- **Encontre coordenadas** clicando com o botão direito em um ponto no Google Maps: o primeiro item do menu é *latitude, longitude*.
- **Códigos multilocal** não podem ser configurados por planilha. Crie-os no app. Veja [Códigos multilocal](/documentation/multi-location/).
- **Erros de linha** indicam a linha, por exemplo *Row 4: Missing required fields (type or content)* ou *Row 7: Geofence type requires valid geofence_lat and geofence_lng*. Corrija essas linhas e envie só elas de novo. As linhas que deram certo já foram criadas.
- Códigos enviados em massa contam para o limite do seu plano como qualquer outro código.
