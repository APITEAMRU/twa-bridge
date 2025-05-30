## Метод `setHeaderColor`
### web_app_set_header_color

### Описание
Метод, который устанавливает цвет заголовка приложения в формате #RRGGBB.
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
const result = bridgeSetHeaderColor({ color: '#3498db' })

// Использование системного цвета
bridgeSetHeaderColor({ color_key: 'bg_color' })
```

### Параметры
| Параметр  | Тип    | Описание  | Примеры    |
| --------- | ------ | --------- | ---------- |
| color     | string | Цвет фона | "#ff0000"  |
| color_key | string | Цвет фона | "bg_color" |

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