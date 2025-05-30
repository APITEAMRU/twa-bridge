## Метод `setBackgroundColor`
### web_app_set_background_color

### Описание
Метод, который устанавливает цвет фона приложения в формате #RRGGBB.
Вы также можете использовать ключевые слова `bg_color` и `secondary_bg_color`.

### Требования
Минимальная версия Telegram API: 6.1+

### Поддержка платформ
- Telegram Web
- Telegram Desktop
- Telegram Mobile (iOS/Android)

### Использование
```javascript
// Установка HEX-цвета
const result = bridgeSetBackgroundColor({ color: '#3498db' })

// Использование системного цвета
bridgeSetBackgroundColor({ color: 'bg_color' })
```

### Параметры
| Параметр | Тип    | Описание  | Примеры               |
| -------- | ------ | --------- | --------------------- |
| color    | string | Цвет фона | "#ff0000", "bg_color" |

### Возвращаемое значение
```typescript
{
  status: boolean | 'not_supported'
}
```

### Системные цвета
| Значение           | Описание      |
| ------------------ | ------------- |
| bg_color           | Основной фон  |
| secondary_bg_color | Вторичный фон |