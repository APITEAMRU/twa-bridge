---
description: >-
  Метод, который запрашивает открытие мини-приложения в полноэкранном режиме. 
---

# setupFullScreen

{% hint style="info" %}
### web\_app\_request\_fullscreen
{% endhint %}

{% hint style="warning" %}
### Хотя заголовок прозрачен в полноэкранном режиме, рекомендуется, чтобы мини-приложение задавало цвет заголовка с помощью метода setHeaderColor. Этот цвет помогает определить контрастный цвет для строки состояния и других элементов управления пользовательского интерфейса.
{% endhint %}

## Поддержка

Минимальная версия Telegram API: 8.0+

* Telegram Web
* Telegram Desktop
* Telegram Mobile (iOS/Android)

## Использование

```javascript
bridgeSetupFullScreen({ is_full:true })
```

## Параметры

| Параметр | Тип     | Описание                                   |
| -------- | ------- | ------------------------------------------ |
| is_full  | boolean | Включение/Выключение полноэкранного режима |

## Возвращаемое значение

```typescript
{
  status: boolean | 'not_supported'
}
```
