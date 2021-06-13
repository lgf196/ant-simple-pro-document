# useAsync
监听键盘按键的 hooks，基于 hotkeys-js 的封装

## Usage
```vue
<template>
  <div>按下<code>ctrl+d</code></div>
</template>

<script>
import { defineComponent } from 'vue'
import { useHotkeys } from '@/hooks'
export default defineComponent({
  setup() {
    useHotkeys('ctrl+d', event => {
      event.preventDefault()
      alert('你按下了 ctrl + d')
    })
  }
})
</script>
```

## Available Props
prop                | type                 | default value   | description
--------------------|----------------------|-----------------|--------------
`key`    | `string`             |                 | 按键字符串组合
`callback` | `(event: KeyboardEvent, handler: HotkeysEvent) => void`  |  | 按键触发回调
`options` | `Options`  | `{}` | 选项参数

### Options
- `filter: (event: KeyboardEvent): boolean` 用于过滤是否根据键盘事件触发回调。
- `filterPreventDefault: boolean` 防止/允许按键的默认浏览器的行为，当过滤器返回`false`（默认值：`true`）
- `enableOnTags: string[]` 用于启用收听表单字段中的热键。可用值为 `INPUT`、`TEXTAREA`和`SELECT`。
- `splitKey: string` 用于更改 `keys` 参数中的拆分字符。默认是`+`，但是如果你想监听`+`字符，你可以设置splitKey为 `-` 来监听 `ctrl-+`
- `keyup: boolean` 是否要监听 `keyup` 事件
- `keydown: boolean` 是否要监听 `keydown` 事件
- `enabled: boolean` 设置为 `false` 禁用热键（默认值：`true`）