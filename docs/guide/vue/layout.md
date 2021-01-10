# 布局
页面整体布局是一个项目的直接外观感受，本项目默认包含一个基础布局 `basic-layout`，空白布局 `blank-layout`


## Layout
layout 布局都放在 `@/layouts` 目录，`basic-layout` 只是一个常见的基础布局，具体业务中可能会有 `user-layout`、`map-layout`等等，都是复用公共部分，
然后通过 `router-view` 给子组件留位置。

## 路由配置

```javascript
// No layout
{
  path: '/login',
  component: () => import('@/views/login')
}

// has layout
{
  path: '/',
  component: BasicLayout,  // basic 布局
  children: [
    {
      path: '/home',
      component: () => import('@/views/home')
    },
    {
      path: '/component',
      component: BlankLayout, // blank 空白布局，单纯为了嵌套层级
      children: [
        {
          path: '/component/clipboard',
          component: () => import('@/views/component/clipboard')
        },
        {
          path: '/qrcode',
          component: () => import('@/views/component/qrcode')
        }
      ]
    }
  ]
}
// has others layout
 {
  path: '/',
  component: MapLayout,
  children: [
    {
      path: '/market',
      component: () => import('@/views/market')
    }
   ]
} 
```