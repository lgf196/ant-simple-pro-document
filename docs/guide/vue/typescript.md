# Vue3 + Typescript
总结一些 vue3 + typescript 的注意事项

## 一些基础用法
### .vue + hooks
```vue
<template>
  <div>
    <button @click="onClick">打开</button>
    <p>{{ count }}</p>
    <p>{{ doubleCount }}</p>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, Ref, ref } from 'vue'

function useDouble(options: { count: Ref<number> }) {
  const { count } = options
  const doubleCount = computed(() => {
    return count.value * 2
  })
  return { doubleCount }
}

export default defineComponent({
  setup() {
    const count = ref(0)
    const { doubleCount } = useDouble({ count })
    function onClick() {
      count.value += 1
    }
    return {
      count,
      doubleCount,
      onClick
    }
  }
})
</script>
```

### .vue + .tsx
index.vue
```vue
<template>
  <div>
    <a-button type="primary" @click="onClick">打开</a-button>
    <Dialog v-model:visible="visible"></Dialog>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import Dialog from './dialog'

export default defineComponent({
  components: {
    Dialog
  },
  setup() {
    const visible = ref(false)
    function onClick() {
      visible.value = true
    }
    return {
      visible,
      onClick
    }
  }
})
</script>
```

dialog.tsx
```tsx
import { defineComponent } from 'vue'

export default defineComponent({
  emits: ['update:visible', 'ok'],
  props: {
    visible: {
      type: Boolean,
      default: false
    }
  },
  setup(props, { emit }) {
    function onCancel() {
      emit('update:visible', false)
    }

    function onOk() {
      emit('ok')
      emit('update:visible', false)
    }

    return () => {
      const { visible } = props
      return (
        <a-modal visible={visible} title="modal" onCancel={onCancel} onOk={onOk}>
          <p>some contents...</p>
          <p>some contents...</p>
          <p>some contents...</p>
        </a-modal>
      )
    }
  }
})
```

### .tsx + .tsx + hooks
```tsx
import { defineComponent, ref, Ref, computed } from 'vue'

function useDouble(options: { count: Ref<number> }) {
  const { count } = options
  const doubleCount = computed(() => {
    return count.value * 2
  })
  return { doubleCount }
}

const Counter = defineComponent({
  emits: ['update:visible', 'ok'],
  props: {
    visible: {
      type: Boolean,
      default: false
    }
  },
  setup(props, { emit }) {
    const count = ref(0)
    const { doubleCount } = useDouble({ count })
    function onCancel() {
      emit('update:visible', false)
    }
    function onOk() {
      emit('update:visible', false)
      emit('ok')
    }
    function onClick() {
      count.value += 1
    }
    return () => {
      const { visible } = props
      return (
        <a-modal title="modal" visible={visible} onCancel={onCancel} onOk={onOk}>
          <p>some contents...</p>
          <p>{count.value}</p>
          <p>{doubleCount.value}</p>
          <a-button type="primary" onClick={onClick}>
            增加
          </a-button>
        </a-modal>
      )
    }
  }
})

export default defineComponent({
  setup() {
    const visible = ref(false)
    function onClick() {
      visible.value = true
    }
    return () => {
      return (
        <div>
          <a-button type="primary" onClick={onClick}>
            打开
          </a-button>
          <Counter v-model={[visible.value, 'visible']}></Counter>
        </div>
      )
    }
  }
})
```

## 注意事项
### props 类型报错
props 的验证属性 validator 和 default 没有使用箭头函数，导致 props 被推断为 Array 类型，获取不到 props。

props 相关的属性是函数的统一要用箭头函数，避免签名错误。

相关链接:
- https://github.com/vuejs/vue-next/issues/2738#issuecomment-739415575
- https://github.com/microsoft/TypeScript/issues/38623

### computed 类型报错
computed 的返回值类型不能自动堆导，需要手动添加

相关链接:
- https://github.com/microsoft/TypeScript/issues/33591#issuecomment-786443978

### (Array<Foo | Bar>) 和 (Foo[] | Bar[])
这两个在类型上是不同的，这点在使用 map 方法时很明显的报错
相关链接:
- https://github.com/microsoft/TypeScript/issues/33591#issuecomment-786443978

### ...rest 参数 类型错误
有时候在传参时，会使用 ...rest 或者 arguments，如果不添加合理的类型，也是会报错的

给 rest 参数添加类型: 
```ts
function foo(a: number, b: number, c: number) {
  return a + b + c
}

function bar(...rest: number[]) {
  return foo(...rest) // error: Expected 3 arguments, but got 0 or more.
}

type RestParamType = Parameters<typeof foo> // 使用 Parameters 将 foo 的参数类型挖出来

function bar(...rest: RestParamType) {
  return foo(...rest) // success
}
```
