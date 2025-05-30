---
description: >-
  Метод, который устанавливает цвет нижней панели приложения в формате #RRGGBB. Вы также можете использовать ключевые слова `bg_color`, `secondary_bg_color` и `bottom_bar_bg_color`. Этот цвет также применяется к панели навигации на Android.
---

# setBottomBarColor

{% hint style="info" %}
### web\_app\_set\_bottom\_bar\_color
{% endhint %}

## Поддержка

Минимальная версия Telegram API: 7.10+

* Telegram Web
* Telegram Desktop
* Telegram Mobile (iOS/Android)

## Использование

```javascript
bridgeSetBottomBarColor({ color: "#ffffff" })
```

## Параметры

| Параметр  | Тип                                                     | Описание                          |
| --------- | ------------------------------------------------------- | --------------------------------- |
| color_key | "bg_color", "secondary_bg_color", "bottom_bar_bg_color" | Необязательно. Стандартные цвета. |
| color     | string                                                  | Необязательно. HEX цвет.          |

## Возвращаемое значение

```typescript
{
  status: boolean | 'not_supported'
}
```