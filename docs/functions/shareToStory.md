---
description: >-
  Метод, который открывает собственный редактор историй с медиа, указанными в параметре media_url как HTTPS URL.
---

# shareToStory

{% hint style="info" %}
### web\_app\_share\_to\_story
{% endhint %}

## Поддержка

Минимальная версия Telegram API: 7.8+

* Telegram Web
* Telegram Desktop
* Telegram Mobile (iOS/Android)

## Использование

```javascript
bridgeShareToStory({ 
  media: "https://i1.sndcdn.com/artworks-000196299556-zqzzcl-t500x500.jpg",
  text: "Каспийский Груз 18+ ft. Rigos"
})
```

## Параметры

| Параметр         | Тип    | Описание                                                                                                                      |
| ---------------- | ------ | ----------------------------------------------------------------------------------------------------------------------------- |
| media            | string | Ссылка на контент, только HTTPS                                                                                               |
| text             | string | Необязательно. Текст, который необходимо вставить в поле ввода после текущего имени бота. Максимальная длина — 2048 символов. |
| widget_link      | Object | Необязательно.                                                                                                                |
| widget_link.url  | string | URL-адрес, который будет включен в историю.                                                                                   |
| widget_link.name | string | Необязательно. Имя, которое будет отображаться для ссылки виджета. Максимальная длина — 48 символа.                           |

## Возвращаемое значение

```typescript
{
  status: boolean | 'not_supported'
  error_id: undefined | 1 | 2
}
```

## error_ids
| ID  | Описание                                      |
| --- | --------------------------------------------- |
| 1   | Текст (text) слишком длинный                  |
| 2   | Имя (widget_link.name) ссылки слишком длинное |