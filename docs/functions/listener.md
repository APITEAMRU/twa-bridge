---
description: >-
  Подписка на типизированные события Telegram Mini Apps через listener.
---

# Listener и события

`listener` получает события Telegram Mini Apps и использует `EventEmitter` из `@minsize/utils`. Доступны методы `on`, `once` и `off`.

```ts
import { listener } from '@apiteam/twa-bridge'

const onFullscreen = ({ is_fullscreen }: { is_fullscreen: boolean }) => {
	console.log(is_fullscreen ? 'fullscreen' : 'normal')
}

listener.on('fullscreen_changed', onFullscreen)
listener.off('fullscreen_changed', onFullscreen)
```

Для одноразовой подписки:

```ts
listener.once('home_screen_added', () => {
	console.log('Приложение добавлено на главный экран')
})
```

## Типы событий

Имя события ограничено ключами `EventsData`; callback получает payload именно этого события. В частности, доступны типизированные события API 8.0–9.6:

| Группа | События |
| --- | --- |
| Геолокация | `location_checked`, `location_requested` |
| Датчики | `accelerometer_*`, `device_orientation_*`, `gyroscope_*` |
| Экран | `fullscreen_changed`, `fullscreen_failed`, `visibility_changed`, `safe_area_changed`, `content_safe_area_changed` |
| Хранилища | `device_storage_*`, `secure_storage_*` |
| Прочее | `secondary_button_pressed`, `requested_chat_sent`, `requested_chat_failed` |

## Совместимость с официальным SDK

При загрузке bridge не заменяет объект `window.Telegram`: существующий `window.Telegram.WebApp` и другие поля остаются нетронутыми. Для Android bridge устанавливает свой обработчик в `window.Telegram.WebView.receiveEvent`, чтобы получать нативные события Telegram. Поэтому другой SDK, который тоже присваивает значение этому конкретному обработчику, нужно инициализировать с объединением обработчиков.
