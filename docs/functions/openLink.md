---
description: >-
  Метод, который открывает ссылку во внешнем браузере. Мини-приложение не будет
  закрыто.
---

# openLink

{% hint style="info" %}
### web\_app\_open\_link
{% endhint %}

## Поддержка

Минимальная версия Telegram API: 6.2+

* Telegram Web
* Telegram Desktop
* Telegram Mobile (iOS/Android)

## Использование

```javascript
bridgeOpenLink({ url: "https://t.me/apiteamru" })
```

## Параметры

| Параметр           | Тип     | Описание                                                                                                 |
| ------------------ | ------- | -------------------------------------------------------------------------------------------------------- |
| url                | string  | URL-адрес, который должен быть открыт приложением Telegram. Должен быть полным путем с протоколом https. |
| try\_instant\_view | boolean | \[v6.4] Необязательно. Ссылка будет открыта в режиме мгновенного просмотра, если это возможно.           |
| try\_browser       | boolean | \[v7.6] Необязательно.                                                                                   |

## Возвращаемое значение

```typescript
{
  status: boolean | 'not_supported'
}
```
