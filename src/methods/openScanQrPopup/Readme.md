**Использование**

```ts
const data = await bridgeOpenScanQrPopup({
  text: 'text', // Optional. Text to be displayed in the QR scanner.
  is_close: true // [Custom] Optional. Сlose QR scanner after receiving data
})

if (data.status === 'not_supported') {
  return // Method is not supported on this device
}

if (data.status === 'closed') {
  return // The QR scanner was closed by the user
}

if (data.status === true) {
  return // Data received: data.data
}

// None of the checks passed, which means an error was returned

console.log({ data })
```