---
description: >-
  Метод, который проверяет, поддерживается ли добавление на главный экран и добавлено ли уже мини-приложение.
---

# checkHomeScreen

{% hint style="info" %}
### web\_app\_check\_home\_screen
{% endhint %}

## Поддержка

Минимальная версия Telegram API: 8.0+

* Telegram Desktop
* Telegram Mobile (iOS/Android)

## Использование

```javascript
const result = await bridgeCheckHomeScreen({})
```

## Возвращаемое значение

```typescript
{
  status: boolean | 'not_supported'
  data: {
    status: "unsupported" | "unknown" | "added" | "missed"
  }
}
```

## Data
| status      | Описание                                                                                           |
| ----------- | -------------------------------------------------------------------------------------------------- |
| unsupported | Функция не поддерживается, и невозможно добавить значок на главный экран.                          |
| unknown     | Функция поддерживается, и значок можно добавить, но невозможно определить, был ли он уже добавлен. |
| added       | Значок уже добавлен на главный экран.                                                              |
| unknown     | Значок не был добавлен на главный экран.                                                           |