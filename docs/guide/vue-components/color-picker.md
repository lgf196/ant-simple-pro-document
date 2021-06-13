# 颜色选择器
color picker 是属于通用的表单组件，react 有 react-color，vue 有 vue-color，都是比较出色的库，vue-color 没有支持 vue3，我们将源码改造成了用于 ts 环境的组件。

## Usage
```vue
<template>
  <div :style="{ background: color }">
    <div class="color-picker-list">
      <div class="color-picker">
        <Sketch v-model:value="color"></Sketch>
      </div>
      <div class="color-picker">
        <Swatch v-model:value="color"></Swatch>
      </div>
      <div class="color-picker">
        <Chrome v-model:value="color"></Chrome>
      </div>
      <div class="color-picker">
        <Compact v-model:value="color"></Compact>
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent, ref } from 'vue'
import { Sketch, Swatch, Chrome, Compact } from '@/components/vue-color'
export default defineComponent({
  components: {
    Sketch,
    Swatch,
    Chrome,
    Compact
  },
  setup() {
    const color = ref('#fff')
    return {
      color
    }
  }
})
</script>
<style scoped>
.color-picker-list {
  display: flex;
  flex-wrap: wrap;
}
.color-picker {
  flex: 0 0 50%;
}
</style>
```

## Available Props
### Chrome
prop                | type                 | default value   | description
--------------------|----------------------|-----------------|--------------
`value(v-model)`    | `string`             | `''`                | 色值
`disableAlpha`       | `boolean`             | `false`                | 是否禁用透明度
`disableFields`           | `boolean`            | `false`          | 是否禁用颜色格式切换

### Compact
prop                | type                 | default value   | description
--------------------|----------------------|-----------------|--------------
`value(v-model)`    | `string`             | `''`                | 色值
`palette`       | `string[]`             |                 | 调色板色值列表
#### palette default value
```javascript
[
  '#4D4D4D',
  '#999999',
  '#FFFFFF',
  '#F44E3B',
  '#FE9200',
  '#FCDC00',
  '#DBDF00',
  '#A4DD00',
  '#68CCCA',
  '#73D8FF',
  '#AEA1FF',
  '#FDA1FF',
  '#333333',
  '#808080',
  '#CCCCCC',
  '#D33115',
  '#E27300',
  '#FCC400',
  '#B0BC00',
  '#68BC00',
  '#16A5A5',
  '#009CE0',
  '#7B64FF',
  '#FA28FF',
  '#000000',
  '#666666',
  '#B3B3B3',
  '#9F0500',
  '#C45100',
  '#FB9E00',
  '#808900',
  '#194D33',
  '#0C797D',
  '#0062B1',
  '#653294',
  '#AB149E'
]
```

### Grayscale
prop                | type                 | default value   | description
--------------------|----------------------|-----------------|--------------
`value(v-model)`    | `string`             | `''`                | 色值
`palette`       | `string[]`             |                 | 调色板色值列表

#### palette default value
```javascript
[
  '#FFFFFF',
  '#F2F2F2',
  '#E6E6E6',
  '#D9D9D9',
  '#CCCCCC',
  '#BFBFBF',
  '#B3B3B3',
  '#A6A6A6',
  '#999999',
  '#8C8C8C',
  '#808080',
  '#737373',
  '#666666',
  '#595959',
  '#4D4D4D',
  '#404040',
  '#333333',
  '#262626',
  '#0D0D0D',
  '#000000'
]
```

### Material
prop                | type                 | default value   | description
--------------------|----------------------|-----------------|--------------
`value(v-model)`    | `string`             | `''`                | 色值

### Photoshop
prop                | type                 | default value   | description
--------------------|----------------------|-----------------|--------------
`value(v-model)`    | `string`             | `''`                | 色值
`disableFields`       | `boolean`             | `false`                | 是否禁用右边操作区
`hasResetButton`           | `boolean`            | `true`          | 是否显示重置按钮
`acceptLabel`           | `boolean`            | `ok`          | 确认按钮文本
`cancelLabel`           | `boolean`            | `cancel`          | 取消按钮文本
`resetLabel`           | `boolean`            | `reset`          | 重置按钮文本
`newLabel`           | `boolean`            | `new`          | 当前颜色文本
`currentLabel`           | `boolean`            | `current`          | 上次颜色文本

#### Events
name                | description
--------------------|--------------
`ok`    | 确认
`cancel`| 取消
`reset`  重置

### Photoshop
prop                | type                 | default value   | description
--------------------|----------------------|-----------------|--------------
`value(v-model)`    | `string`             | `''`                | 色值
`presetColors`       | `string[]`             |                 | 预设颜色
`disableAlpha`           | `boolean`            | `false`          | 是否禁用透明度
`disableFields`           | `boolean`            | `false`          | 禁用输入
#### presetColors default value
```javascript
[
  '#D0021B',
  '#F5A623',
  '#F8E71C',
  '#8B572A',
  '#7ED321',
  '#417505',
  '#BD10E0',
  '#9013FE',
  '#4A90E2',
  '#50E3C2',
  '#B8E986',
  '#000000',
  '#4A4A4A',
  '#9B9B9B',
  '#FFFFFF',
  'rgba(0,0,0,0)'
]
```

### Slider
prop                | type                 | default value   | description
--------------------|----------------------|-----------------|--------------
`value(v-model)`    | `string`             | `''`                | 色值
`swatches`       | `Array<SwatchItem | number>`             |                 | 预设颜色
#### swatches default value
```javascript
[
  { s: 0.5, l: 0.8 },
  { s: 0.5, l: 0.65 },
  { s: 0.5, l: 0.5 },
  { s: 0.5, l: 0.35 },
  { s: 0.5, l: 0.2 }
]
```

### Swatches
prop                | type                 | default value   | description
--------------------|----------------------|-----------------|--------------
`value(v-model)`    | `string`             | `''`                | 色值
`palette`       | `string[]`             |                 | 预设颜色
#### palette default value
```javascript
[
  'red',
  'pink',
  'purple',
  'deepPurple',
  'indigo',
  'blue',
  'lightBlue',
  'cyan',
  'teal',
  'green',
  'lightGreen',
  'lime',
  'yellow',
  'amber',
  'orange',
  'deepOrange',
  'brown',
  'blueGrey',
  'black'
]
```

### Twitter
prop                | type                 | default value   | description
--------------------|----------------------|-----------------|--------------
`value(v-model)`    | `string`             | `''`                | 色值
`width`       | `string|number`             | `276`                | 宽度
`defaultColors`       | `string[]`             |                 | 预设颜色
`triangle`       | `'hide'|'top-left'|'top-right'`  |   `top-left`| 三角形位置
#### defaultColors default value
```javascript
[
  '#FF6900',
  '#FCB900',
  '#7BDCB5',
  '#00D084',
  '#8ED1FC',
  '#0693E3',
  '#ABB8C3',
  '#EB144C',
  '#F78DA7',
  '#9900EF'
]
```
