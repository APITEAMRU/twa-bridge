---
description: >-
  Метод, для вызова кастомных событий.
---


## invokeCustomMethod

{% hint style="info" %}
### web\_app\_invoke\_custom\_method
{% endhint %}

### Поддержка

Минимальная версия Telegram API: 6.9+

- Telegram Web
- Telegram Desktop
- Telegram Mobile (iOS/Android)

### Использование
```javascript
// Использование системного цвета
bridgeInvokeCustomMethod({ method: "test_method", params: { test_id: 1 } })
```

### Параметры
| Параметр | Тип     | Описание                                 |
| -------- | ------- | ---------------------------------------- |
| req_id   | string  | Необязательный. Уникальный идентификатор |
| method   | string  | Имя метода.                              |
| params   | unknown | Параметры согласно методу.               |

### Возвращаемое значение
```typescript
{
  status: boolean | 'not_supported'
  data: undefined | {
    req_id: string
    result: undefined | unknown
    error: undefined | string
  }
}
```