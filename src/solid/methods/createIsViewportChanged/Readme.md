**Использование**

```ts
const viewport = createIsViewportChanged()

console.log({ 
  height: viewport().height,
  width: viewport().width, // May be undefined
  is_expanded: viewport().is_expanded,
  is_state_stable: viewport().is_state_stable,
 })
```