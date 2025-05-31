---
description: >-
  Метод, который открывает ссылку Telegram внутри приложения Telegram. Мини-приложение не будет закрыто после вызова этого метода.
---

# openTgLink

{% hint style="info" %}
### web\_app\_open\_tg\_link
{% endhint %}

## Поддержка

Минимальная версия Telegram API: 7.0+

* Telegram Web
* Telegram Desktop
* Telegram Mobile (iOS/Android)

## Использование

```javascript
bridgeOpenTgLink({ path_full: "apiteamru" })
```

## Параметры

| Параметр      | Тип     | Описание                                                                             |
| ------------- | ------- | ------------------------------------------------------------------------------------ |
| path_full     | string  | Должно быть значение, взятое из ссылки в следующем формате: https://t.me/{path_full} |
| force_request | boolean | Необязательно.                                                                       |

## Возвращаемое значение

```typescript
{
  status: boolean | 'not_supported'
}
```
