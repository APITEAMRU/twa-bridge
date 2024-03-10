**Usage**

```ts
const data = await bridgeReadTextFromClipboard()

if (data.status === 'not_supported') {
  return // Method is not supported on this device
}

if (data.status === true) {
  return // Data received: data.data
}

// None of the checks passed, which means an error was returned

console.log({ data })
```