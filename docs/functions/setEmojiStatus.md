---
description: >-
  Метод, который открывает диалоговое окно, позволяющее пользователю установить указанный пользовательский эмодзи в качестве своего статуса.
---

# setEmojiStatus

{% hint style="info" %}
### web\_app\_set\_emoji\_status
{% endhint %}

## Поддержка

Минимальная версия Telegram API: 8.0+

* Telegram Web
* Telegram Desktop
* Telegram Mobile (iOS/Android)

## Использование

```javascript
const result = await bridgeSetEmojiStatus({ custom_emoji_id: "123" })
```

## Параметры

| Параметр        | Тип    | Описание                                                                                               |
| --------------- | ------ | ------------------------------------------------------------------------------------------------------ |
| custom_emoji_id | string | Идентификатор                                                                                          |
| duration        | number | Необязательно. Продолжительность, в течение которой статус будет оставаться установленным, в секундах. |

## Возвращаемое значение

```typescript
{
  status: boolean | 'not_supported'
}
```