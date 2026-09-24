---
title: Criar um código QR
description: "Os três tipos de código, estático versus dinâmico, e cada campo da janela \"Generate a code\"."
---

Abra **QR Codes** no menu e clique em <kbd>+ Generate QR</kbd>. A janela **Generate a code** se abre. <kbd>Generate QR →</kbd> fica acinzentado até que tudo o que o tipo escolhido exige esteja preenchido.

<figure><img src="/images/docs/qr-new-standard-dark.webp" alt="A janela Generate a code com os três tipos de código Standard, Geofence e Multi-location" width="1344" height="1227" loading="lazy"><figcaption>Escolha o tipo primeiro. O resto do formulário se ajusta a ele.</figcaption></figure>

## Escolha um tipo

| Tipo | Use quando | Quem lê recebe |
|---|---|---|
| **Standard** | Todos, em qualquer lugar, devem receber a mesma coisa. | Seu link ou texto. |
| **Geofence** | O código só deve funcionar em um lugar: um ponto de check-in, uma mesa, uma loja. | Acesso, se estiver dentro da sua zona. Caso contrário, uma tela de "você está fora". |
| **Multi-location** | Um mesmo impresso é usado em vários lugares, e cada lugar deve abrir sua própria página. | A página da zona mais próxima em que a pessoa está, ou uma página alternativa. |

## Campos para todos os tipos

- **QR code name** (opcional). Um nome fácil, como *Campanha de verão 2026*. Ele aparece em listas, análises e exportações, então vale a pena definir.
- **Category** (opcional). Uma categoria com cor por código, por exemplo *Cardápios* ou *Eventos*. Você pode filtrar a lista de códigos por ela. Gerencie as categorias em **Filters → Manage categories** na página QR Codes.
- **Tags** (opcional). Quantas quiser. Escolha uma tag existente com **Add tag**, ou use **Create new tag** para criar uma na hora.

## Códigos padrão

Digite um endereço da web ou qualquer texto simples em **URL or text**. Texto também funciona: o celular simplesmente o exibe.

## Códigos com geocerca

Um código com geocerca pede a localização ao celular de quem lê e só libera o acesso dentro da zona.

1. Digite um **Geofence name**, como *Entrada principal*.
2. Digite um endereço em **Search by address** e clique em **Search**, ou informe **Latitude** e **Longitude** você mesmo. Uma prévia do mapa aparece quando a posição está definida.
3. Defina o **Radius (meters)**. Use pelo menos 50 m: o GPS do celular raramente é mais preciso que isso, principalmente em locais fechados.
4. Em **URL or text · inside fence**, informe o que as pessoas que passarem na verificação devem receber.

<figure><img src="/images/docs/qr-new-geofence-dark.webp" alt="A seção de geocerca da janela Generate a code, com nome, busca de endereço, latitude, longitude e raio" width="1344" height="1350" loading="lazy"><figcaption>Busque o endereço e depois confira o marcador na prévia do mapa.</figcaption></figure>

Cada código com geocerca cria sua própria zona nova, que também aparece na página **Geofences**. Lá você pode movê-la ou mudar o raio depois. Veja [Geocercas](/documentation/geofences/).

## Códigos multilocal

Defina uma **Fallback URL** para quem estiver fora de todas as zonas e clique em **Add location** para cada lugar (até 10). Cada local tem seu próprio endereço, raio e destino e, se quiser, sua própria programação e limite de leituras. Esse tipo tem uma página própria: [Códigos multilocal](/documentation/multi-location/).

<figure><img src="/images/docs/qr-new-multi-dark.webp" alt="A seção multilocal com a URL alternativa e uma lista vazia de até dez locais" width="1344" height="1350" loading="lazy"><figcaption>Multilocal: uma página alternativa e até dez zonas.</figcaption></figure>

## Estático ou dinâmico

Marque **Make this a dynamic QR code** para tornar um código dinâmico. O campo acima passa a se chamar **Destination URL**.

| | Estático | Dinâmico |
|---|---|---|
| O que vai dentro do código impresso | O próprio link | Um link curto do ScanFence que encaminha quem lê |
| Mudar o destino depois | Não, seria preciso reimprimir | Sim, a qualquer momento |
| Leituras contadas e exibidas nas análises | Não (códigos padrão) | Sim |
| Regras de horário e limites de leitura | Não (códigos padrão) | Sim |
| Desativar o código | Não (códigos padrão) | Sim |

> **Regra prática:** se o código vai para algo impresso, faça-o dinâmico. Códigos estáticos servem para coisas que nunca mudam, como a senha do seu Wi-Fi.

Ativar regras de horário nesta janela torna o código dinâmico automaticamente. Códigos multilocal sempre passam pelo ScanFence, por isso não mostram a opção.

## Extras opcionais

Duas seções no fim da janela podem ser configuradas agora ou depois, no cartão do código:

- **Global scarcity limit:** para depois de um número de leituras e envia todos os seguintes para outra página. Veja [Limites de leitura](/documentation/scan-limits/).
- **Time-based rules:** um destino diferente em certos horários, dias ou datas. Veja [Regras de horário](/documentation/time-based-rules/).

## Se faltar algo

A janela diz o que precisa, por exemplo *Please enter URL or text*, *Please complete all geofence location fields* ou *Please add at least one location*. Se aparecer *QR code limit reached*, você usou todos os códigos do seu plano. Mova para a lixeira os códigos de que não precisa mais, ou [faça upgrade](/documentation/plans-and-limits/).
