---
title: Geocercas
description: Desenhe uma zona no mapa para que seus códigos QR só funcionem para quem está de fato no local.
---

Uma geocerca é um círculo no mapa: um ponto central e um raio entre **50 m e 5.000 m**. Quando alguém lê um código vinculado a uma geocerca, o celular informa onde está, e o ScanFence verifica se esse ponto fica dentro do círculo.

**Usos comuns:** check-ins que só valem no local, pedidos na mesa que só funcionam dentro do restaurante, conteúdo de evento só para quem está lá, registro de presença de funcionários em um local de trabalho.

## A página Geofences

<figure><img src="/images/docs/geofences-dark.webp" alt="A página Geofences listando quatro zonas com coordenadas do centro, raio, status e ações de editar e excluir" width="1600" height="1250" loading="lazy"><figcaption>Todas as zonas do seu espaço de trabalho em uma tabela.</figcaption></figure>

Para cada zona, a tabela mostra o **nome** e a descrição, as coordenadas do **centro**, o **raio** e o **status**.

- Clique em **Active / Inactive** para ativar ou desativar uma zona.
- <kbd>Edit</kbd> abre a zona para movê-la ou mudar o tamanho.
- <kbd>Delete</kbd> remove a zona de vez.

## Criar ou editar uma zona

1. Clique em <kbd>+ New geofence</kbd>, ou em <kbd>Edit</kbd> em uma zona existente.
2. Digite um **Name** e, se quiser, uma **Description**, como *Docas de carga 1–4*.
3. Digite um endereço em **Address search** e clique em <kbd>Search</kbd>. O mapa vai até lá.
4. Ajuste o centro **clicando no mapa**. As coordenadas acima do mapa se atualizam a cada clique.
5. Arraste o controle **Radius**. A dica logo abaixo converte os metros em quarteirões.
6. Clique em <kbd>Create geofence →</kbd> ou <kbd>Update geofence →</kbd>.

<figure><img src="/images/docs/geofence-edit-dark.webp" alt="A janela Edit geofence com nome, descrição, controle de raio em 75 metros, busca de endereço e um mapa com a zona" width="1600" height="1250" loading="lazy"><figcaption>Editando uma zona. Clique em qualquer ponto do mapa para mover o centro.</figcaption></figure>

## Como escolher o raio certo

Celulares não sabem a posição exata. Ao ar livre, o GPS costuma ter precisão de 5–20 m. Em locais fechados, em centros urbanos densos ou no subsolo, pode chegar a 50 m ou pior. Escolha um raio que cubra o local **mais** essa incerteza.

| Local | Raio sugerido |
|---|---|
| Uma única loja, café ou estande | 50–100 m |
| Um espaço de eventos, hotel, prédio de escritórios | 100–250 m |
| Uma área de festival, campus, resort | 250–1,000 m |
| Um bairro ou cidade pequena | 1,000–5,000 m |

> **Teste no local.** Antes de imprimir, leia o código nas bordas do local, de preferência também em áreas internas. Se pessoas que estão dentro forem recusadas, aumente o raio.

## Vincular um código a uma zona

As zonas são criadas junto com os códigos: escolha o tipo **Geofence** na janela **Generate a code** e preencha os campos de localização. Veja [Criar um código QR](/documentation/create-qr-codes/#geofence-codes). A nova zona também aparece na página Geofences, onde você pode ajustá-la depois sem reimprimir.

Quer um código que funcione em vários lugares, cada um com sua própria página? Use um [código multilocal](/documentation/multi-location/).

## Privacidade

A localização só é solicitada no momento da leitura, e só para códigos que precisam dela. Quem lê vê o pedido de permissão habitual do celular e pode recusar. A posição é usada para a verificação e pode ser salva com a leitura para as suas análises. O ScanFence não rastreia ninguém antes nem depois da leitura.
