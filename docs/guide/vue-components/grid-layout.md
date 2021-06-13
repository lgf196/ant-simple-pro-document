# grid 网格布局
react-grid-layout 是比较出名的 用于 UI grid 布局的库。vue 有类似的 vue-grid-layout，这个库也是比较好用的，但是不能直接应用在 ts 环境中，本项目将源码经过调整，简单的添加了类型，只是能让其在 ts 环境中跑起来，具体的类型还是等待维护者尽快的升级。

## Usage
```vue
<template>
  <div>
    <GridLayout
      v-model:layout="layout"
      :col-num="12"
      :row-height="30"
      is-draggable
      is-resizable
      :is-mirrored="false"
      vertical-compact
      :margin="[10, 10]"
      use-css-transforms
    >
      <GridItem
        v-for="item in layout"
        :x="item.x"
        :y="item.y"
        :w="item.w"
        :h="item.h"
        :i="item.i"
        :key="item.i"
      >
        <span class="text">{{item.i}}</span>
      </GridItem>
    </GridLayout>
  </div>
</template>
<script>
import { defineComponent, ref } from 'vue'
import { GridLayout, GridItem } from '@/components/grid-layout'
export default defineComponent({
  setup() {
    const layout = ref([
      {x: 0, y: 0, w: 2, h: 2, i: '0'},
      {x: 2, y: 0, w: 2, h: 4, i: '1'},
      {x: 4, y: 0, w: 2, h: 5, i: '2'},
      {x: 6, y: 0, w: 2, h: 3, i: '3'},
      {x: 8, y: 0, w: 2, h: 3, i: '4'},
      {x: 10, y: 0, w: 2, h: 3, i: '5'},
      {x: 0, y: 5, w: 2, h: 5, i: '6'},
      {x: 2, y: 5, w: 2, h: 5, i: '7'},
      {x: 4, y: 5, w: 2, h: 5, i: '8'},
      {x: 5, y: 10, w: 4, h: 3, i: '9'}
    ])
    return {
      layout
    }
  }
})
</script>
```

## Available Props
[可用参数参考 vue-grid-layout](https://jbaysolutions.github.io/vue-grid-layout/guide/properties.html)
