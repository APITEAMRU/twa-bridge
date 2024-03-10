**Usage**

```ts
const data = await bridgeInvokeCustomMethod({
  methond: 'web_app_close', // Method name.
  params: undefined // Parameters according to method.
})

if (data.status === 'not_supported') {
  return // Method is not supported on this device
}

if (data.status === true) {
  return // Data received: data.data
}

// None of the checks passed, which means an error was returned

console.log({ data })
```