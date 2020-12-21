# 样式

##  CSS Modules

在样式开发过程中，有两个问题比较突出：

- 全局污染 —— CSS 文件中的选择器是全局生效的，不同文件中的同名选择器，根据 build 后生成文件中的先后顺序，后面的样式会将前面的覆盖；
- 选择器复杂 —— 为了避免上面的问题，我们在编写样式的时候不得不小心翼翼，类名里会带上限制范围的标示，变得越来越长，多人开发时还很容易导致命名风格混乱，一个元素上使用的选择器个数也可能越来越多，最终导致难以维护。

好在 3大脚手架都提供了方案来解决这个问题 。 它顾名思义给 css 加了一个模块区域的概念。

``` css
/* 编译前 */
.content {
  color: red;
}

/* 编译后 */
.content[_v-f3f3eg9] {
  color: red;
}
```

## react

在react中如果你想使用css  Modules,其实是非常的简单，如新建一个css文件，`xxx.module.css`这样的格式，在react中会自动默认的开启了css module模式，注意:eyes:我说的这种写法是，你用的是[create-react-app](https://create-react-app.dev/)来创建项目的，如果不是，就不能这样写，如果你是用的[webpack](https://webpack.docschina.org/concepts/loaders/#using-loaders)配置的项目，只需下载`css-loader`，代码如下:point_down:

``` js
//webpack配置文件
module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: 'css-loader',
            options: {
              modules: true
            }
          },
        ]
      }
    ]
  }
};
```

``` css
//style.css
.app{
    width:200px
}
```

```ts
import style from 'style.css'
const App: React.FC = () => {
  return (
    <div className={style.app}>
       <p>111</p>
    </div>
  )
}
```

