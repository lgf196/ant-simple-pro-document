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