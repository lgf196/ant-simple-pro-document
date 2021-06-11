# 二维码

## Usage
```vue
<template>
  <div>
    <VueQrcode
      :value="config.linkUrl"
      :size="config.size"
      :style="{ margin: 'auto' }"
      :imageSettings="{
        src: config.logoUrl,
        width: config.logoW,
        height: config.logoH,
        excavate: config.excavate
      }"
    ></VueQrcode>
  </div>
</template>
<script>
import { defineComponent, ref, ComponentPublicInstance } from 'vue'
import VueQrcode from '@/components/qrcode'
import Logo from '@/assets/images/Icon_512x512-15@1x@1x.png'
export const defalutVal = {
  linkUrl: 'https://lgf196.top/react/home',
  size: 200,
  logoUrl: Logo,
  logoW: 70,
  logoH: 70,
  excavate: false
}
export default defineComponent({
  components: {
    VueQrcode
  },
  setup() {
    const config = ref({
      linkUrl: defalutVal.linkUrl,
      size: defalutVal.size,
      logoUrl: Logo,
      logoW: defalutVal.logoW,
      logoH: defalutVal.logoH,
      excavate: defalutVal.excavate
    })
    return {
      config
    }
  }
})
</script>
```

## Available Props

prop      | type                 | default value   | description
----------|----------------------|-----------------|--------------
`value(v-model)`   | `string`    | `''`| 二维码链接
`size`    | `number`             | `128`|尺寸
`bgColor` | `string`             | `'#FFFFFF'`|背景色
`fgColor` | `string`             | `'#000000'`|前景色
`level`   | `'L' | 'M' | 'Q' | 'H'`| `'L'`|图片质量
`includeMargin` | `boolean`      | `false`|是否包含 margin
`imageSettings` | `ImageSettings` |   |中间小图片配置

### `ImageSettings`
field      | type                 | default value   | description
-----------|----------------------|-----------------|--------------
`src`      | `string`             | | 图片链接
`x`        | `number`             | | 位置坐标 x
`y`        | `number`             | | 位置坐标 y
`height`   | `number`             | | 高度
`width`    | `number`             | | 宽度
`excavate` | `boolean`            | `false`| 是否镂空