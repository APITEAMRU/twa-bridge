---
description: >-
  Метод, который отображает собственное всплывающее окно, предлагающее пользователю загрузить файл.
---

## Метод `downloadFile`

{% hint style="info" %}
### web\_app\_request\_file\_download
{% endhint %}

### Поддержка

Минимальная версия Telegram API: 8.0+

- Telegram Web
- Telegram Desktop
- Telegram Mobile (iOS/Android)

### Использование
```javascript
const result = await bridgeDownloadFile({ 
  url: "https://i1.sndcdn.com/artworks-000196299556-zqzzcl-t500x500.jpg",
  file_name: "Каспийский Груз 18+ ft. Rigos"
})

```

### Параметры
| Параметр  | Тип    | Описание                                 |
| --------- | ------ | ---------------------------------------- |
| url       | string | HTTPS URL-адрес файла для загрузки.      |
| file_name | string | Предлагаемое имя для загружаемого файла. |

### Возвращаемое значение
```typescript
{
  status: boolean | 'not_supported'
}
```

`status: false` означает, что пользователь отменил загрузку. При `status: true` Telegram начал загрузку.
