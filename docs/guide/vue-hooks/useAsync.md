# useAsync
异步请求的 hooks

## Usage
```vue
<template>
  <ul>
    <li v-for="(item, index) in list" :key="index">{{item.name}}</li>
  </ul>
</template>
<script>
import { defineComponent, ref } from 'vue'
function getUsers() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve([
        { name: 'foo' },
        { name: 'bar' },
        { name: 'baz' }
      ])
    }, 1000)
  })
}
export default defineComponent({
  setup() {
    const { data: list } = useAsync(
      () => {
        return getUsers()
      },
      {
        initialData: []
      }
    )
    return {
      list
    }
  }
})
</script>
```
## Available Props
prop                | type                 | default value   | description
--------------------|----------------------|-----------------|--------------
`pro`    | `Promise`             |                 | promise 异步操作
`options`       | `OptionsType`             |  | 参数

### OptionsType
prop                | type                 | default value   | description
--------------------|----------------------|-----------------|--------------
`pro`    | `Promise`             | `''`                | promise 异步操作
`manual`       | `boolean`             | `false` | 是否手动请求
`initialData`       | `any`             | `null` | 初始数据
`onSuccess`       | `() => void`             |  | 成功回调
`onError`       | `(e: Error | null) => void` |  | 失败回调
