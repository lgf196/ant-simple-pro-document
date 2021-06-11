# markdown 编辑器
基于 marked 封装的 markdown 编辑器，参考了 react 版本的 [for-editor](https://github.com/kkfor/for-editor)

## Usage
```vue
<template>
  <div>
    <ForEditor v-model:value="value"></ForEditor>
  </div>
</template>
<script>
import { defineComponent, ref } from 'vue'
import ForEditor from '@/components/for-editor'
export default defineComponent({
  components: {
    ForEditor
  },
  setup() {
    const value = ref(`# ant-simple-pro
#### 简洁，美观，快速上手，支持3大框架(vue3.0,react,angular,typescript)`)
    return {
      value
    }
  }
})
</script>
```

## Available Props
prop                | type                 | default value   | description
--------------------|----------------------|-----------------|--------------
`value(v-model)`    | `string`             |                 | 输入框内容
`placeholder`       | `string`             |                 | 占位文本
`lineNum`           | `boolean`            | `true`          | 是否显示行号
`height`            | `string`             | `'600px'`         | 编辑器高度
`preview`           | `boolean`            | `false`         | 预览模式
`expand`            | `boolean`            | `false`         | 全屏模式
`subfield`          | `boolean`            | `false`         | 双栏模式
`language`          | `string`            | `'zh-CN'`         | 语言(支持 zh-CN:中文简体, en:英文)
`toolbar`           | `Toolbar`            | `false`         | 自定义工具栏

### `Toolbar`
类型: 
```typescript
interface IToolbar {
  h1?: boolean
  h2?: boolean
  h3?: boolean
  h4?: boolean
  img?: boolean
  link?: boolean
  code?: boolean
  preview?: boolean
  expand?: boolean
  undo?: boolean
  redo?: boolean
  save?: boolean
  subfield?: boolean
}
```

默认: 
```javascript
/*
  默认工具栏按钮全部开启, 传入自定义对象
  例如: {
    h1: true, // h1
    code: true, // 代码块
    preview: true, // 预览
  }
  此时, 仅仅显示此三个功能键
  注:传入空对象则不显示工具栏
 */

toolbar: {
  h1: true, // h1
  h2: true, // h2
  h3: true, // h3
  h4: true, // h4
  img: true, // 图片
  link: true, // 链接
  code: true, // 代码块
  preview: true, // 预览
  expand: true, // 全屏
  undo: true, // 撤销
  redo: true, // 重做
  save: true, // 保存
  subfield: true // 单双栏模式
}
```

### 事件回调
field       | type                              | default value | description
------------|-----------------------------------|---------------|--------------
`onChange`  | `Function(value: string): void`   |               | 内容改变
`onSave`    | `Function(value: string): void`   |               | 保存
`addImg`  | `Function(file: File): void`        |               | 添加图片