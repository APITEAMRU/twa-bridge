---
description: >-
  Высокоуровневые функции @apiteam/twa-bridge для Telegram Mini Apps.
---

# Функции

Функции с префиксом `bridge` отправляют метод Telegram и проверяют минимальную версию API. Если метод недоступен на текущей платформе или в текущей версии Telegram, результат содержит `status: 'not_supported'`.

Методы, которым Telegram возвращает событие, возвращают `Promise`. Успешный результат имеет `status: true`; отказ пользователя или ошибка Telegram — `status: false` и, когда клиент его передаёт, поле `data` с причиной.

Все исходящие данные и payload событий типизированы. Для низкоуровневых интеграций доступны `bridgeSend`, `sender`, перечисление `Method` и тип `SenderData`.

## Разделы

- [Listener и события](listener.md)
- [Новые платформенные API: 7.10–9.6](platformApis.md)
- [Список низкоуровневых методов Telegram](../methods/README.md)
