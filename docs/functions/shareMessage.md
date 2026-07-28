---
description: >-
  Метод, который открывает диалоговое окно, позволяющее пользователю поделиться сообщением, предоставленным ботом. Идентификатор сообщения, переданный этому методу, должен принадлежать `PreparedInlineMessage`, ранее полученному с помощью метода API бота `savePreparedInlineMessage`.
---

# shareMessage

{% hint style="info" %}
### web\_app\_send\_prepared\_message
{% endhint %}

## Поддержка

Минимальная версия Telegram API: 8.0+

* Telegram Web
* Telegram Desktop
* Telegram Mobile (iOS/Android)

## Использование

```javascript
bridgeShareMessage({ id: "prepared-message-id" })
```

## Параметры

| Параметр | Тип    | Описание      |
| -------- | ------ | ------------- |
| id       | string | Идентификатор `PreparedInlineMessage`, полученный из `savePreparedInlineMessage`. |

## Возвращаемое значение

```typescript
{
  status: boolean | 'not_supported'
  data?: { error: string }
}
```
