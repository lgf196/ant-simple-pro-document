# 构建与发布

## 构建

当项目开发完毕，只需要运行一行命令就可以打包你的应用，如下:point_down:

``` shell
# 启动
npm run dev

# 打包测试服务
npm run build:alpha

# 打包预发布服务
npm run build:preprod

# 打包正式服务
npm run build:prod
```

构建打包成功之后，会在根目录生成 `dist或者build` 文件夹，里面就是构建打包好的文件，通常是 `***.js` 、`***.css`、`index.html` 等静态文件。

##  环境变量

在react中环境变量是用的[cross-env](https://github.com/kentcdodds/cross-env)设置的，vue中则是用的`.env.xxxx`,官方推荐的，react中也是可以用`.env.xxxx`这样的设置的，但是对于不同平台的兼容性不是很好，所以采用[cross-env](https://github.com/kentcdodds/cross-env)

react中使用cross-env，配置如下:point_down:

``` js
npm install --save-dev cross-env
```

在`package.json`文件中如下设置:point_down:

```json

  "scripts": {
    "dev": "cross-env REACT_APP_ENV=dev EXTEND_ESLINT=true node scripts/start.js",
    "build:alpha": "cross-env REACT_APP_ENV=alpha node scripts/build.js"
  }
```

vue中使用.env.xx，配置如下:point_down:

在`src`文件夹同级的目录下，新建`.env.alpha`文件，内容如下

```
NODE_ENV=production
VUE_APP_MODE=alpha
```

以上我们知道了如何设置环境变量，那么用该如何获取到自已设置的环境变量呢:confused:？其实很简单，可以通过 `process.env.REACT_APP_ENV`来获取我们设置的环境变量，当然我们也自已封装了一个方法用来获取环境变量

``` js
export const environment = () => {
  const env = process.env.REACT_APP_ENV;
  let parps = null;
  switch (env) {
    case 'dev': // 开发环境下
      parps = 'dev';
      break;
    case 'alpha': // 测试环境下
      parps = 'alpha';
      break;
    case 'preprod': // 预发布环境下
      parps = 'preprod';
      break;
    case 'prod': // 正式生产环境下
      parps = 'prod';
      break;
    default:
      parps = 'development';
      break;
  }
  return parps;
}
```

## 发布

对于发布来讲，只需要将最终生成的静态文件，也就是通常情况下 `dist` 文件夹的静态文件发布到你的 cdn 或者静态服务器即可，需要注意的是其中的 `index.html` 通常会是你后台服务的入口页面，在确定了 js 和 css 的静态之后可能需要改变页面的引入路径。

::: tip

本项目，路由采用的是`browserHistory`模式的，发布时需要借助`nginx`等，具体的请查看[基础-路由](./router.md)

:::

vue中的路由前置路径

``` js
publicPath: '/vue/' //注意这个是在vue.config.js中配置的
```

react中的前置路由路径

``` json
 "homepage": "/react/"  //注意这个是在package.json里面配的
```

最终完整路径：[https://lgf196.top/react/home](https://lgf196.top/react/home)

