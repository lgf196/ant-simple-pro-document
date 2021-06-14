# useResizeWidth

监听游览器窗口改变时，返回`width`,`height`

## Usage

```vue
<template>
  <div>按下<code>ctrl+d</code></div>
</template>

<script>
import { useResizeWidth } from '@/hooks'
export default defineComponent({
  setup() {
   const { width,height } = useResizeWidth()
  }
})
</script>
```
