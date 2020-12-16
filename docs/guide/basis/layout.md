# 布局
页面整体布局是一个产品最外层的框架结构，往往会包含导航、侧边栏、面包屑以及内容等。想要了解一个项目，先要了解它的基础布局。

## Layout

![img](https://s3.ax1x.com/2020/12/16/r16D0K.png)

::: tip

`layout布局组件`对应的代码在[@/layouts]()文件夹里面，不论react版本，vue版本，angular版本，都有`layouts`文件夹。

:::

`@`是 webpack 的 [alias](https://webpack.js.org/configuration/resolve/#resolve-alias) 不懂得请自行研究。

`ant-simple-pro` 中大部分页面都是基于这个 `layout组件` ，除了个别页面如：`login`  等页面没有使用该`layout`。如果你想在一个项目中有多种不同的`layout`也是很方便的，只需按照如下写法:point_down:。

#### react

```js
// No layout
{
    path: '/login',
    exact: true,
    component: Login,
 }

// has layout
{
   component: BasicLayout,  //BasicLayout就是layout布局组件
   routes:[
      {
        exact: true,
        path: '/userInfo',
        title: '用户信息',
        component: HocRouter(lazy(() => import('@/pages/user/userInfo'))),
      }
   ]
}
// has others layout
 {
   component:Xxx,
   routes:[
      {
        exact: true,
        path: '/userInfo',
        title: '用户信息',
        component: HocRouter(lazy(() => import('@/pages/user/userInfo'))),
      }
   ]
} 
```

## 内容区，主体

内容区，主要是不同子路由组成的，layout布局好比父级路由，将子路由页面嵌套在里面，内容区页面主要存放在文件夹`@/pages`里面，vue，react等版本都是一样的存放在这里面。