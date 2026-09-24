---
title: Gerenciar seus códigos
description: Encontre, baixe, edite, desative e exclua seus códigos QR, e mantenha tudo organizado com categorias e tags.
---

<figure><img src="/images/docs/qr-codes-dark.webp" alt="A página QR Codes em visualização de grade, com busca, filtros e cartões de códigos" width="1600" height="1250" loading="lazy"><figcaption>A página QR Codes. O contador no topo mostra quantos códigos o seu plano permite.</figcaption></figure>

## A barra de ferramentas

- **Active / Trash** alterna entre seus códigos ativos e os que você excluiu.
- **Grid / List** muda o layout. Seu navegador lembra da escolha.
- **My QR codes / All users** (só admins) mostra seus próprios códigos, os de todos ou os de um colega.
- <kbd>Bulk</kbd> permite marcar vários códigos e movê-los para a lixeira de uma vez.
- <kbd>Upload</kbd> importa muitos códigos de uma planilha, se o upload em massa estiver ativado na sua conta. Veja [Upload em massa](/documentation/bulk-upload/).
- <kbd>+ Generate QR</kbd> cria um código novo. Veja [Criar um código QR](/documentation/create-qr-codes/).

## Buscar e filtrar

A caixa de busca encontra códigos por nome, link, link alternativo, nome da geocerca ou link de limite. Clique em **Filters** para restringir a lista por **categoria** ou **tags**. Com várias tags selecionadas, aparecem os códigos que têm qualquer uma delas. **Clear all filters** limpa tudo.

## O cartão de um código

<figure class="narrow"><img src="/images/docs/qr-card-dark.webp" alt="Um cartão de código QR mostrando tipo, nome, botão de ativação, a imagem QR, tags e botões de ação" width="471" height="1356" loading="lazy"><figcaption>Cada cartão reúne o código e todas as ações dele.</figcaption></figure>

De cima para baixo:

- **Tipo e nome**, por exemplo *Geofence* ou *Standard · Dynamic*.
- **Botão Active / Inactive.** Clique nele para desativar um código dinâmico, por exemplo no fim de uma campanha. Códigos inativos param de funcionar até você ativá-los de novo.
- **A imagem QR**, seguida da categoria, das tags e do destino.
- <kbd>PNG</kbd> e <kbd>SVG</kbd> baixam a imagem. Use SVG para impressão: ele fica nítido em qualquer tamanho. PNG é bom para apresentações e documentos.
- <kbd>Copy</kbd> copia o link que o código contém, prático para testar no computador.
- <kbd>Delete</kbd> move o código para a lixeira.
- <kbd>Edit category & tags</kbd> reclassifica o código.
- <kbd>Edit redirect URL</kbd> (códigos dinâmicos) muda para onde o código leva. A mudança vale a partir da próxima leitura, e o código impresso continua o mesmo.
- <kbd>View analytics</kbd> abre as leituras deste código: totais, um mapa, as 100 últimas leituras e exportação em CSV ou PDF.
- <kbd>View location</kbd> (códigos com geocerca) mostra a zona em um mapa.
- <kbd>Edit locations & stats</kbd> (códigos multilocal) abre o editor de locais.
- <kbd>Add time-based rules</kbd> / <kbd>View time-based rules</kbd>. Veja [Regras de horário](/documentation/time-based-rules/).
- **Scans & limits** mostra o número de leituras e o limite, se houver. Veja [Limites de leitura](/documentation/scan-limits/).

## Visualização em lista

A visualização em lista mostra mais códigos na tela, com as mesmas ações em uma linha compacta. É boa para listas longas e seleção em massa.

<figure><img src="/images/docs/qr-list-dark.webp" alt="A página QR Codes em visualização de lista" width="1600" height="1250" loading="lazy"><figcaption>Visualização em lista.</figcaption></figure>

## Categorias e tags

Use **categorias** para o agrupamento principal (uma por código, com cor) e **tags** para todo o resto (quantas quiser).

- **Categorias:** **Filters → Manage categories**. Crie, renomeie, mude a cor ou exclua. Excluir uma categoria a remove de todos os códigos, mas mantém os códigos.
- **Tags:** **My Settings → Tags**, ou crie-as enquanto faz um código.

## Lixeira e restauração

<kbd>Delete</kbd> não remove um código de vez. Ele vai para a **Trash**. Um código na lixeira **para de funcionar** na hora, e quem o lê recebe um erro em vez da sua página.

<figure><img src="/images/docs/qr-trash-dark.webp" alt="A lixeira com os botões de restaurar e excluir para sempre" width="1600" height="1250" loading="lazy"><figcaption>A lixeira. Restaure um código e ele volta a funcionar exatamente como antes.</figcaption></figure>

Na lixeira você pode:

- <kbd>Restore</kbd> um código. Ele volta com todas as configurações e começa a funcionar de novo.
- <kbd>Delete forever</kbd> um código. Isso não pode ser desfeito.
- Selecionar vários códigos e restaurá-los ou excluí-los juntos.

Códigos na lixeira não contam para o limite do seu plano.

<div class="warn"><strong>Cuidado com códigos impressos.</strong> Antes de excluir um código que já foi impresso, pense em desativá-lo, ou em apontá-lo para uma página de "esta oferta terminou" com <em>Edit redirect URL</em>.</div>
