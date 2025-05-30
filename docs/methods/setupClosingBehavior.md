## Метод `setupClosingBehavior`
### web_app_setup_closing_behavior

### Описание
Метод, который устанавливает цвет заголовка приложения в формате #RRGGBB.
Вы также можете использовать ключевые слова `bg_color` и `secondary_bg_color`.

### Требования
Минимальная версия Telegram API: 6.2+

### Поддержка платформ
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