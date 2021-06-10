# 右键菜单

右键菜单应该还是是比较常见的功能，一般都是通过触发事件控制一个菜单的显示隐藏。这里直接封装成了一个方法，类似 message() 之类的调用。

## Usage

```vue
<template>
  <div class="container" @contextmenu="onContextmenu">
    点击右键
  </div>
</template>
<script>
import { createContextMenu } from '@/components/context-menu/create-context-menu'
export default {
  setup() {
    function onContextmenu(event) {
      createContextMenu({
        event,
        menus: [
          {
            label: '菜单一',
            handler() {
              console.log('click menu 1')
            }
          },
          {
            label: '菜单二',
            handler() {
              console.log('click menu 2')
            }
          }
        ]
      })
    }
    return {
      onContextmenu
    }
  }
}
</script>
<style scoped>
.container {
  height: 300px;
  border: 1px solid pink;
}
</style>
```

## Available Props
prop       | type                 | default value | description
-----------|----------------------|---------------|--------------
`event`    | `MouseEvent`         |               | 事件源参数
`menuClass`| `string`             | `''`          | class 类名
`menus`    | `ContextMenuItem[]`  | `[]`          | 菜单列表
`width`    | `number`             | `160`         | 菜单项宽度

### `ContextMenuItem`
field       | type                              | default value | description
------------|-----------------------------------|---------------|--------------
`label`     | `string`                          |               | 菜单名
`icon`      | `string`                          |               | 菜单项图标
`disabled`  | `ContextMenuItem[]`               | `false`       | 是否禁用菜单
`handler`   | `(data: ContextMenuItem) => void` |               | 点击菜单处理函数
`children`  | `ContextMenuItem[]`               |               | 子菜单列表
