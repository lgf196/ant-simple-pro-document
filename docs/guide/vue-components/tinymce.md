# 富文本编辑器
react 用 draft.js 富文本的比较多，vue 一般用 wangeditor, ckeditor, tinymce 这些多，这里使用的是 tinymce, 功能多，插件也比较强大

## Usage
```vue
<template>
  <div>
    <TinymceEditor v-model:value="content" placeholder="请输入"></TinymceEditor>
  </div>
</template>
<script>
import { defineComponent, ref } from 'vue'
import TinymceEditor from '@/components/tinymce/index.vue'
export default defineComponent({
  components: {
    TinymceEditor
  },
  setup() {
    const content = ref(`\n<p><span style=\"font-size: 20px; font-family: 'PingFang SC';\">题目：给定一个天平，选择4个砝码，并使用这些砝码称出1-40g里所有整数的重量。</span></p>\n`)
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
`height`       | `number`             | 360                | 编辑器高度
`placeholder`           | `string`            | `请输入内容`          | 占位文本
`toolbar`            | `string[]`             |          | 工具栏
`menubar`           | `MenubarItem[]`  | `['file', 'edit', 'insert', 'view', 'format', 'table', 'tools']` | 顶部菜单栏(按顺序显示)

### `toolbar` default value
```javascript
const toolbar = [
  'code undo redo restoredraft | cut copy paste pastetext | forecolor backcolor bold italic underline strikethrough link anchor | alignleft aligncenter alignright alignjustify outdent indent',
  'styleselect formatselect fontselect fontsizeselect | bullist numlist | blockquote subscript superscript removeformat',
  'table image media charmap emoticons hr pagebreak insertdatetime print preview | fullscreen | bdmap indent2em lineheight formatpainter importword customerimageupload'
]
```

### `MenubarItem`
```typescript
type MenubarItem = 'file' | 'edit' | 'insert' | 'view' | 'format' | 'table' | 'tools' | 'help'
```

相关链接:
- [tiny中文文档](http://tinymce.ax-z.cn/)