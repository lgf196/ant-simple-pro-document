# 表情选择器
emoji-mart 是 react 常用的表情库，vue 有对应的 emoji-mart，这个库是不支持 vue3 的，但是作者另开发了 emoji-mart-vue-fast，这个是 vue3 的版本，但是没有支持 ts，我们在本地简单的加个模块声明就可以用了

## Usage
在 .d.ts 文件中，增加对 emoji-mart-vue-fast 的模块声明
```typescript

declare module 'emoji-mart-vue-fast' {
  import { defineComponent } from 'vue'
  const component: ReturnType<defineComponent>
  const Picker: component
  const Emoji: component
  const Anchors: component
  const Preview: component
  const Search: component
  const Category: component
  const Skins: component
  const EmojiIndex: any
  const EmojiView: any
  const EmojiData: any
  const sanitize: any
  const uncompress: any
  const store: any
  const frequently: any
  export {
    Picker,
    Emoji,
    Anchors,
    Preview,
    Search,
    Category,
    Skins,
    EmojiIndex,
    EmojiView,
    EmojiData,
    sanitize,
    uncompress,
    store,
    frequently
  }
}

```
