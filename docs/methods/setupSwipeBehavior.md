---
description: >-
  Метод, который включает и выключает вертикальные свайпы для закрытия или сворачивания Mini App.
---

# setupSwipeBehavior

{% hint style="info" %}
### web\_app\_setup\_swipe\_behavior
{% endhint %}

## Поддержка

Минимальная версия Telegram API: 7.7+

* Telegram Web
* Telegram Desktop
* Telegram Mobile (iOS/Android)

## Использование

```javascript
bridgeSetupSwipeBehavior({ allow_vertical_swipe: false })
```

## Параметры

| Параметр             | Тип     | Описание                 |
| -------------------- | ------- | ------------------------ |
| allow_vertical_swipe | boolean | Включает/Выключает свайп |

## Возвращаемое значение

```typescript
{
  status: boolean | 'not_supported'
}
```
