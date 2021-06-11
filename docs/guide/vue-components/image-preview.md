# 图片预览
图片预览是很常见的功能，这里直接使用的 element-ui 的 image-viewer 组件，改造成了 imagePreview() 方法来调用

## Usage
```vue
<template>
  <div>
    <a-button type="primary" @click="onClick">点击预览</a-button>
  </div>
</template>
<script>
import { defineComponent, ref } from 'vue'
import { imagePreview } from '@/components/image/image-preview'
export default defineComponent({
  setup() {
    function onClick() {
      imagePreview({
        urls: [
          'https://qiniu.qyhever.com/1622446115669029310beb158es_1024_58be73a22631b',
          'https://qiniu.qyhever.com/16112900187552ffa9698851611588493080453.jpg'
        ]
      })
    }
    return {
      onClick
    }
  }
})
</script>
```

## Available Props
prop                | type                 | default value   | description
--------------------|----------------------|-----------------|--------------
`urlList`    | `string[]`             | `[]`                | 图片链接列表
`zIndex`       | `number`             | `2000`                | 层级
`initialIndex`  | `number`            | `0`          | 默认显示第几张
`maskClosable`  | `boolean`             | `true`         | 是否点击遮罩关闭
`onSwitch`  | `Function(index: number): void` |     | 切换图片回调
