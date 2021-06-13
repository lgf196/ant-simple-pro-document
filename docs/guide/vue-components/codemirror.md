# 代码编辑器
codemirror 是社区用的比较多的代码编辑器，本项目简单封装了 vue 版本的组件

## Usage
```vue
<template>
  <div>
    <Codemirror
      v-model:value="content"
      :options="{
        mode: 'javascript',
        theme: 'material',
        lineNumbers: true
      }"
    ></Codemirror>
  </div>
</template>
<script>
import { defineComponent, ref } from 'vue'
import Codemirror from '@/components/vue-codemirror/index.vue'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'
require('codemirror/mode/xml/xml')
require('codemirror/mode/javascript/javascript')

const code = `
  function add(a, b) {
    return a + b
  }
  add(1, 9)
`
export default defineComponent({
  components: {
    Codemirror
  },
  setup() {
    const content = ref(code)
    return {
      content
    }
  }
})
</script>
```

## Available Props
prop                | type                 | default value   | description
--------------------|----------------------|-----------------|--------------
`value(v-model)`    | `string`             | `''`                | 输入框内容
`width`       | `number|string`             | `100%`                | 编辑器高度
`height`       | `number|string`             | `600px`                | 编辑器高度
`placeholder`           | `string`            | `请输入内容`          | 占位文本
`options`            | `object`             |          | 配置选项[codemirror configuration](https://codemirror.net/doc/manual.html#config)