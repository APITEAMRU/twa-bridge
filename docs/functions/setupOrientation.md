---
description: >-
  Метод, который фиксирует ориентацию мини-приложения в текущем режиме (портретном или альбомном). После блокировки ориентация остается фиксированной, независимо от поворота устройства. Это полезно, если требуется стабильная ориентация во время определенных взаимодействий.
---

# setupOrientation

{% hint style="info" %}
### web\_app\_toggle\_orientation\_lock
{% endhint %}

## Поддержка

Минимальная версия Telegram API: 8.0+

* Telegram Web
* Telegram Desktop
* Telegram Mobile (iOS/Android)

## Использование

```javascript
bridgeSetupOrientation({ locked: true })
```

## Параметры

| Параметр | Тип     | Описание                           |
| -------- | ------- | ---------------------------------- |
| locked   | boolean | Включает/Выключает фиксацию экрана |

## Возвращаемое значение

```typescript
{
  status: boolean | 'not_supported'
}
```
