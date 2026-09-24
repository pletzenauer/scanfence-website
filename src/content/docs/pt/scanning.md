---
title: O que quem lê vê
description: O que acontece no celular de alguém quando lê o seu código, e como explicar isso aos seus visitantes.
---

Quem lê seus códigos não precisa de app nem de conta. Basta usar a câmera do celular, como em qualquer código QR.

## Códigos padrão

O celular abre sua página na hora. Códigos dinâmicos fazem um desvio rápido pelo ScanFence, que é onde são contados e onde valem as regras e os limites. Quem lê nem percebe.

## Códigos que verificam a localização

Códigos com geocerca e multilocal primeiro abrem uma página curta do ScanFence que pede a localização do celular.

1. O celular mostra o pedido habitual, *"app.scanfence.com would like to use your location"* ou algo parecido. A pessoa toca em **Allow**.
2. O ScanFence compara a posição com a sua zona. Isso leva um ou dois segundos, ou mais se o celular precisar encontrar sinal de GPS antes.
3. O resultado depende de onde a pessoa está:

| Situação | Código com geocerca | Código multilocal |
|---|---|---|
| Dentro da zona | Confirmado: *"You're at …"* | Enviada para a página daquele local |
| Fora | *"You're outside …"*, com uma dica para chegar mais perto. A pessoa pode tentar de novo. | Enviada para a página alternativa |
| Localização recusada ou indisponível | Recebe um pedido para ativar os serviços de localização e tentar de novo | Enviada para a página alternativa |

> **Coloque uma frase ao lado do código** na sua placa, como *"Permita a localização quando for pedido: este código só funciona no local."* Isso reduz bastante as permissões recusadas.

## Se alguém for recusado

- **A pessoa está no local, mas mesmo assim é recusada.** O celular pode estar com uma localização imprecisa, principalmente em locais fechados. Peça que ela vá para perto de uma janela ou para fora e tente de novo. Se isso acontecer com frequência, aumente o [raio](/documentation/geofences/#choosing-the-right-radius) da zona.
- **A localização está desativada.** No iPhone: *Settings → Privacy & Security → Location Services*, e permita para o navegador. No Android: abra as configurações rápidas e ative *Location*.
- **A pessoa tocou em "Don't allow" antes.** O navegador lembra disso. Ela precisa permitir a localização para o site nas configurações do navegador e ler o código de novo.
- **Muitas leituras seguidas da mesma rede.** Para evitar abusos, as verificações de localização são limitadas por rede. Depois de muitas tentativas em uma hora, quem lê vê *"Too many location checks from your network"* e precisa esperar.

## Códigos desativados, esgotados e excluídos

- Um código que você deixou **inativo** mostra *"This QR code is inactive"*.
- Um código acima do [limite de leitura](/documentation/scan-limits/) vai para a sua página de limite atingido, ou mostra uma mensagem curta se você não definiu uma.
- Um código na **lixeira** não funciona mais.
