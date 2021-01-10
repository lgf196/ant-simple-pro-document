# 样式
本项目 vue 版本，使用 less 预处理器，使用 sass 也可以，看个人习惯，一般和 UI 库保持一致即可。

## Scoped CSS
比较主流的处理样式冲突的方案，当 `<style>` 标签有 `scoped` 属性时，它的 CSS 只作用于当前组件中的元素
```vue
<template>
  <div class="example">xx</div>
</template>

<style scoped>
.example {
  color: red;
}
</style>
```
转换后：
```vue
<template>
  <div class="example" data-v-xxxxxxx>xx</div>
</template>
<style>
.example[data-v-xxxxxxx] {
  color: red;
}
</style>
```

### 子组件
使用 `scoped` 后，父组件的样式将不会渗透到子组件中，每个组件有自己的 `hash` 值，即 `div` 标签上生成的 `data-v-xxxxxxx` 字符串，
这样就实现了样式隔离。

### 深度作用选择器
深度作用选择器（也称样式穿透），前面说过，加上 `scoped` 之后，每个 `style` 只会作用于当前组件，如果需要修改当前组件引用的子组件的样式，
那么需要用到样式穿透。
```vue
<style scoped>
.a >>> .b { /* ... */ }
</style>
```
转换后：
```vue
<style scoped>
.a[data-v-xxxxxxx] .b { /* ... */ }
</style>
```
使用 `>>>` 操作符来实现样式穿透，如果使用 `less`、`sass`之类的预处理器，`>>>` 无法正常工作，可以使用 `::v-deep` 操作符替代（
`/deep/` 操作符已经弃用，`::v-deep`作为 Vue 特定的扩展，任何预处理器都能解析它，详情[scoped-styles-changes](https://github.com/vuejs/rfcs/blob/master/active-rfcs/0023-scoped-styles-changes.md)）

## CSS Modules
另一种解决命名冲突的解决方案，`CSS Modules`是 `react` 项目样式开发比较主流的方案，其实 `vue` 不常用的，但也给了开发人员其它选择

### 使用
修改 `css-loader` 配置

```javascript
// webpack.config.js
{
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          {
            loader: 'css-loader',
            options: {
              // 开启 CSS Modules
              modules: true,
              // 自定义生成的类名
              localIdentName: '[local]_[hash:base64:8]'
            }
          }
        ]
      }
    ]
  }
}
```

在的 `<style>` 上添加 `module` 属性：

```vue
<style module>
.red {
  color: red;
}
.bold {
  font-weight: bold;
}
</style>
```

`Vue Loader` 识别到 `module` 属性，生成名为 `$style` 的计算属性，向组件注入 `CSS Modules` 局部对象。使用：

```vue
<template>
  <p :class="$style.red">
    This should be red
  </p>
  <p :class="[$style.red, $style.bold]">
    Red and bold
  </p>
</template>
```

在 `JavaScript` 中使用：

```vue
<script>
export default {
  created () {
    console.log(this.$style.red)
    // -> "red_1VyoJ-uZ"
    // 一个基于文件名和类名生成的标识符
  }
}
</script>
```

### 样式穿透
类似 `Scoped CSS` 的用法，在当前组件修改引入子组件的样式会用到
```vue
<style module>
.a :global .b { /* ... */ }
</style>
```
转换后：
```vue
<style>
/* Home.vue */
.Home_1FtGa-nZ .b { /* ... */ }
</style>
```