---
description: >-
  Метод, который предлагает пользователю добавить мини-приложение на главный экран.
---

# addToHomeScreen

{% hint style="info" %}
### web\_app\_add\_to\_home\_screen
{% endhint %}

{% hint style="warning" %}
### Метод не проверяет добавлено ли мини-приложение на главный экран.
{% endhint %}

## Поддержка

Минимальная версия Telegram API: 8.0+

* Telegram Desktop
* Telegram Mobile (iOS/Android)

## Использование

```javascript
bridgeAddToHomeScreen({})
```

## Возвращаемое значение

```typescript
{
  status: boolean | 'not_supported'
}
```