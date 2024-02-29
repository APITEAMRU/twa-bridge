## SDK
[![npm version](https://img.shields.io/npm/v/@apiteam/twa-bridge)](https://www.npmjs.com/package/@apiteam/twa-bridge)

npm package for [Telegram Web Apps (TWA)](https://core.telegram.org/bots/webapps) SDK.

```
npm i @apiteam/twa-bridge
```

### Motivation
Telegram distributes SDK via [link](https://core.telegram.org/bots/webapps#initializing-web-apps). It's kinda old fashion way to work with a library:

```html
<html lang="en">
<head>
    <title>TWA</title>
    <meta charset="UTF-8">
    <script src="https://telegram.org/js/telegram-web-app.js"></script>
    <script>
        window.Telegram.WebApp.showPopup({ message: 'message'  });
    </script>
</head>
<body></body>
</html>
```

This package allows to work with SDK as with a npm package:

```js
import { bridgeOpenPopup } from '@apiteam/twa-bridge/solid'

bridgeOpenPopup({ message: 'message' })
```

And yes, it supports TS.

### Solid
```js
import { createIsViewportChanged } from '@apiteam/twa-bridge/solid'

const viewport = createIsViewportChanged()
```

### Errors

| ID  | Description                                                       |
| --- | ----------------------------------------------------------------- |
| 1   | Method not supported                                              |
| 2   | Ooof! Something is wrong. Init data is missing                    |
| 3   | Title too long, maximum length 64 characters                      |
| 4   | Your message is too short, at least 1 character                   |
| 5   | Your message is too long, maximum 256 characters                  |
| 6   | You are passing too few buttons, at least 1 button                |
| 7   | You are passing too many buttons, maximum 3 buttons               |
| 8   | The button text ignores the following values: "ok, close, cancel" |
| 9   | EDIT_MESSAGE               