# @apiteam/twa-bridge

Минималистичный TypeScript-мост для [Telegram Mini Apps](https://core.telegram.org/bots/webapps). Он отправляет методы в клиент Telegram, проверяет поддержку API и предоставляет типизированные события в одном интерфейсе.

Полная справка по методам находится в [документации](https://docs.apiteam.ru) и в каталоге [`docs`](docs/).

## Установка

```bash
npm install @apiteam/twa-bridge
```

## Быстрый старт

```ts
import {
	bridgeReady,
	bridgeShareToStory,
	listener,
} from '@apiteam/twa-bridge'

bridgeReady()

listener.on('theme_changed', ({ theme_params }) => {
	console.log(theme_params.bg_color)
})

bridgeShareToStory({
	media_url: 'https://example.com/photo.jpg',
	text: 'Моя история',
})
```

Для каждого метода есть `support…`-функция, например `supportShareToStory()`. При неподдерживаемой версии Telegram bridge-методы возвращают `{ status: 'not_supported' }`.

## События

`listener` использует `EventEmitter` из `@minsize/utils` и экспортирует `on`, `once` и `off`. Имя события и его payload выводятся из типа `EventsData`.

```ts
import { listener } from '@apiteam/twa-bridge'

const onLocation = data => {
	if (data.available) {
		console.log(data.latitude, data.longitude)
	}
}

listener.on('location_requested', onLocation)
listener.off('location_requested', onLocation)
```

При инициализации bridge сохраняет существующий объект `window.Telegram`, поэтому `window.Telegram.WebApp` из официального SDK остаётся доступен. Bridge назначает обработчик только в `window.Telegram.WebView.receiveEvent` — не подключайте второй SDK, который записывает в этот же обработчик, без явного объединения обработчиков.

Подробнее: [Listener и события](docs/functions/listener.md).

## Методы

Высокоуровневые функции имеют префикс `bridge`: например, `bridgeRequestLocation`, `bridgeStartAccelerometer`, `bridgeDeviceStorage` и `bridgeRequestChat`. Для прямого вызова по имени Telegram-метода используйте `bridgeSend` и константы `Method`:

```ts
import { bridgeSend, Method } from '@apiteam/twa-bridge'

await bridgeSend(Method.RequestLocation)
```

`bridgeSend` выбирает соответствующую bridge-функцию, если она есть, поэтому сохраняются проверка версии и обработка результата. Низкоуровневый `sender(eventType, eventData)` отправляет событие в Telegram без этих обёрток.

Новые API Telegram 7.10–9.6, включая геолокацию, датчики, device/secure storage, скрытие клавиатуры и запрос чата, описаны в разделе [Новые платформенные API](docs/functions/platformApis.md).

## Поддержка

Если есть ошибка или нужен метод, [создайте issue](https://github.com/apiteamru/twa-bridge/issues).
