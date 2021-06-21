# 裁剪图片
基于 cropper.js 封装的 裁剪组件。

## Usage
```vue
<template>
  <div>
    <CropImage
      v-model:visible="visible"
      :src="src"
      :file="fileRef"
      @submit="onCropSubmit"
    >
    </CropImage>
    <UploadImage
      v-model:value="urls"
      :autoUpload="false"
      @file-change="onFileChange"
    >
    </UploadImage>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'
import CropImage from '@/components/cropper/index.vue'
import UploadImage from '@/components/upload-image/index.vue'
export default defineComponent({
  components: {
    CropImage,
    UploadImage
  },
  setup() {
    const visible = ref(false)
    const src = ref('')
    const urls = ref([])
    const fileRef = ref()
    const resolveFile = ref()

    function onFileChange(file, resolve) {
      fileRef.value = file
      visible.value = true
      resolveFile.value = resolve
    }

    function onCropSubmit(file: File) {
      // call resolve, upload file
      resolveFile.value(file)
    }

    return {
      visible,
      src,
      urls,
      fileRef,
      onFileChange,
      onCropSubmit
    }
  }
})
</script>
```

## Available Props
prop       | type                 | default value | description
-----------|----------------------|---------------|--------------
`visible(v-model)`    | `boolean`         | `false`              | 显示/隐藏 cropper modal
`src`| `string`             | `''`          | 图片 url
`file`    | `File`  |          | 文件流对象
`moveStep`    | `number`             | `4`         | 平移单位
