---
description: >-
  Метод, который устанавливает цвет заголовка приложения в формате #RRGGBB. Вы также можете использовать ключевые слова `bg_color` и `secondary_bg_color`.
---

## setupClosingBehavior

{% hint style="info" %}
### web\_app\_setup\_closing\_behavior
{% endhint %}

### Поддержка

Минимальная версия Telegram API: 6.2+

- Telegram Web
- Telegram Desktop
- Telegram Mobile (iOS/Android)

### Использование
```javascript
// Использование системного цвета
bridgeSetupClosingBehavior({ need_confirmation: true })
```

### Параметры
| Параметр          | Тип     | Описание                                                               |
| ----------------- | ------- | ---------------------------------------------------------------------- |
| need_confirmation | boolean | Будет ли пользователю выдано уведомление в случае закрытия приложения? |

### Возвращаемое значение
```typescript
{
  status: boolean | 'not_supported'
}
```