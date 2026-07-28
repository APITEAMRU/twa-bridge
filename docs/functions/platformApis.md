---
description: >-
  API Telegram Mini Apps версий 7.10–9.6: вторичная кнопка, геолокация, датчики, хранилища и запрос чата.
---

# Платформенные API 7.10–9.6

## Secondary Button — 7.10

`bridgeSetupSecondaryButton(data)` обновляет дополнительную кнопку. Поддерживаются `is_visible`, `is_active`, `is_progress_visible`, `text`, `color`, `text_color`, `has_shine_effect`, `position` (`left`, `right`, `top`, `bottom`) и `icon_custom_emoji_id` (Telegram 9.5+).

```ts
bridgeSetupSecondaryButton({
	is_visible: true,
	text: 'Назад',
	position: 'bottom',
})
```

Нажатие приходит событием `secondary_button_pressed`.

## Геолокация — 8.0

| Функция | Действие |
| --- | --- |
| `bridgeCheckLocation()` | Проверяет доступность геолокации и наличие разрешения. |
| `bridgeOpenLocationSettings()` | Открывает настройки доступа к геолокации. Вызывать только в ответ на действие пользователя. |
| `bridgeRequestLocation()` | Запрашивает текущую координату. |

```ts
const result = await bridgeRequestLocation()

if (result.status && result.data?.available) {
	console.log(result.data.latitude, result.data.longitude)
}
```

`bridgeCheckLocation()` возвращает в `data` поля `available`, `access_requested` и `access_granted`. У `bridgeRequestLocation()` `data` — либо `{ available: false }`, либо координаты и доступные значения точности, высоты, курса и скорости.

## Датчики — 8.0

| Датчик | Запуск | Остановка | Событие данных |
| --- | --- | --- | --- |
| Акселерометр | `bridgeStartAccelerometer({ refresh_rate? })` | `bridgeStopAccelerometer()` | `accelerometer_changed` — `{ x, y, z }` |
| Ориентация | `bridgeStartDeviceOrientation({ refresh_rate?, need_absolute? })` | `bridgeStopDeviceOrientation()` | `device_orientation_changed` — `{ absolute, alpha, beta, gamma }` |
| Гироскоп | `bridgeStartGyroscope({ refresh_rate? })` | `bridgeStopGyroscope()` | `gyroscope_changed` — `{ x, y, z }` |

`refresh_rate` измеряется в миллисекундах и допускает значения от 20 до 1000. Запуск возвращает `Promise`: при ошибке результат имеет `status: false` и `data.error`. Остановка завершается после события `…_stopped`.

```ts
const started = await bridgeStartAccelerometer({ refresh_rate: 100 })

if (started.status) {
	listener.on('accelerometer_changed', ({ x, y, z }) => {
		console.log(x, y, z)
	})
}
```

## Хранилища устройства — 9.0

`bridgeDeviceStorage` — постоянное хранилище, привязанное к боту и устройству. `bridgeSecureStorage` работает так же, но использует защищённое хранилище клиента Telegram.

| Метод | Device storage | Secure storage |
| --- | --- | --- |
| Записать | `setItem({ key, value, req_id? })` | `setItem({ key, value, req_id? })` |
| Прочитать | `getItem({ key, req_id? })` | `getItem({ key, req_id? })` |
| Удалить ключ | `removeItem({ key, req_id? })` | `removeItem({ key, req_id? })` |
| Очистить | `clear({ req_id? })` | `clear({ req_id? })` |
| Восстановить ключ | — | `restoreItem({ key, req_id? })` |

`value: null` удаляет значение. Если `req_id` не передан, bridge создаёт его сам. У `getItem` результат находится в `data.value`; при ошибке — `status: false` и `data.error`.

```ts
await bridgeDeviceStorage.setItem({ key: 'language', value: 'ru' })

const result = await bridgeDeviceStorage.getItem({ key: 'language' })
if (result.status) console.log(result.data?.value)
```

## Остальные API

- `bridgeHideKeyboard()` (9.1) — скрывает экранную клавиатуру.
- `bridgeRequestChat({ req_id })` (9.6) — открывает сценарий выбора чата, настроенный ботом. Возвращает `Promise`; при ошибке содержит `data.error`.
