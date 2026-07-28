---
description: >-
  Метод, который показывает собственное всплывающее окно, запрашивающее разрешение для бота на управление статусом эмодзи пользователя.
---

## Метод `requestEmojiStatus`

{% hint style="info" %}
### web\_app\_request\_emoji\_status\_access
{% endhint %}

### Поддержка

Минимальная версия Telegram API: 8.0+

- Telegram Web
- Telegram Desktop
- Telegram Mobile (iOS/Android)

### Использование
```javascript
const result = await bridgeRequestEmojiStatus({})

```

### Возвращаемое значение
```typescript
{
  status: boolean | 'not_supported'
}
```

`status: false` означает, что пользователь отменил запрос доступа.
