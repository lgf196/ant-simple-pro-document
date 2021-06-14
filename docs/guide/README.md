# 介绍

[![vue](https://img.shields.io/badge/vue-3.0.4-brightgreen.svg)](https://github.com/vuejs/vue)
[![react](https://img.shields.io/badge/react-17.0.1-brightgreen.svg)](https://github.com/facebook/react)
[![angular](https://img.shields.io/badge/angular-11.0.4-brightgreen.svg)](https://github.com/angular/angular)
[![angular](https://img.shields.io/badge/typescript-4.1.2-brightgreen.svg)](https://github.com/microsoft/TypeScript)
[![antd](https://img.shields.io/badge/antd-4.9.3-brightgreen.svg)](https://github.com/ant-design/ant-design)

[ant-simple-pro](https://github.com/lgf196/ant-simple-pro) 是一款支持[vue3.0](https://github.com/vuejs/vue)，[react](https://github.com/facebook/react)，[angular](https://github.com/angular/angular)，[typescript](https://github.com/microsoft/TypeScript)等多框架支持的中台前端解决方案，ui使用[antd](https://github.com/ant-design/ant-design)实现的，它使用了最新的前端技术栈，内置了 i18 国际化解决方案，动态路由，响应式设计，开箱即用，它可以帮助你快速搭建企业级中后台产品原型，不管你是vue开发者，还是react,或者angular，都能在这里找到你想要的版本。

::: tip

1. 本项目内部集成了[ant-design](https://github.com/ant-design/ant-design)，不需要在进行二次下载和配置了，我们已近按需加载配置好了，具体的项目依赖包，请查看`package.json`，本项目除了ui使用ant-design之外，其它的组件ui均自已编写。
2. 本项目会一直维护下去的，不用担心没人维护的问题:stuck_out_tongue_winking_eye:，该项目的 bug :bug:，大家可以去[issues](https://github.com/lgf196/ant-simple-pro/issues)上题问，我们会在一个星期内，回复大家的反馈:blush:。

:::

[ant-simple-pro](https://github.com/lgf196/ant-simple-pro) 的`bug`提问群，和学习群。

<p align="left">
  <img width="100" src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6d6d3f624f4143fe8833d2458aeaf002~tplv-k3u1fbpfcp-zoom-1.image">
</p>

## 前序准备

你需要在本地安装 [node](http://nodejs.org/) 和 [git](https://git-scm.com/)，异步请求数据用[axios](https://github.com/axios/axios)，所有的异步接口均采用node+typescript+mysql+[docker](https://www.docker.com/)实现的，本项目技术栈基于vue3.0,react,angular,typescrpt,antd等技术，所以最好先了解如下知识：

#### vue

- vue3.0的新语法，如setup,hooks等合成api
- vue-cil,vue-router,vuex等全家桶

#### react

- react基本语法，如hooks,class创建组件，函数式创建组件等
- react全家桶要熟悉，如react-router-dom，create-react-app,react-transition-group等
- react数据状态库，redux,redux-saga,reselect,react-redux等
- react在typescript下的FC模式等

#### angular

- angular的基本语法，如html模板，指令，组件等
- angular的全家桶，如angular-cil,Rx等
- typescript的基本语法

## 目录结构

本项目已经为你生成了一个完整的开发框架，提供了涵盖中后台开发的各类功能和坑位，下面是整个项目的目录结构。

#### react版本

```bash
├── config                     # 项目脚手架的配置文件
├── script                     # 项目配置文件
├── public                     # 静态资源
│   │── favicon.ico            # favicon图标
│   └── index.html             # html模板
│   └── manifest.json          # 告知浏览器,应用的一些信息如应用图标等
├── src                        # 源代码
│   ├── api                    # 所有请求
│   ├── assets                 # 全局css,js,iamge等静态资源
│   ├── components             # 全局公用组件
│   ├── container              # 容器组件
│   ├── hooks                  # 全局 hooks
│   ├── icons                  # 项目所有 svg icons
│   ├── interfaces             # 全局的ts文件类型
│   ├── locales                # 国际化文件配置
│   ├── pages                  # 所有的页面路劲
│   ├── redux                  # 全局 store管理
│   ├── router                 # 全局的路由配置
│   ├── types                  # 全局ts的类型声明文件
│   ├── utils                  # 公用的公用方法
│   ├── il8n.ts                # 国际化的入口文件
│   ├── index.css              # 全局样式
│   ├── index.tsx              # 入口文件 加载组件 初始化等
│   └── react-app-env.d.ts     # react全局模块声明文件
│   └── setupProxy.js          # 异步代理文件
├── .editorconfig              # 代码风格统一配置文件
├── .eslintrc.js               # eslint 配置项
├── .eslintignore              # eslint 忽略文件
├── tsconfig.json              # 项目全局ts配置文件
└── package.json               # package.json
```

## 安装

```bash
# 克隆项目
git clone https://github.com/lgf196/ant-simple-pro.git

# 进入项目目录
cd ant-simple-pro

# 安装依赖
npm install

# 建议不要用 cnpm 安装 会有各种诡异的bug 可以通过如下操作解决 npm 下载速度慢的问题
npm install --registry=https://registry.npm.taobao.org

# 本地开发 启动项目
npm run dev
```

<br/>

::: tip
强烈建议不要用直接使用 cnpm 安装，会有各种诡异的 bug，可以通过重新指定 registry 来解决 npm 安装速度慢的问题。若还是不行，可使用 [yarn](https://github.com/yarnpkg/yarn) 替代 `npm`，要是以上都不行，建议翻墙。
:::

<br/>

启动完成后会自动打开浏览器访问 [http://localhost:3000](http://localhost:3000)， 你看到下面的页面就代表操作成功了。

[![20210612114417.png](https://i.postimg.cc/nV6vSFGq/20210612114417.png)](https://postimg.cc/WtwFhPK4)

接下来你可以修改代码进行业务开发了，本项目内集成了异步,ant-design，一些常见的组件，让你快速搭建一个中台项目，其它你可以继续阅读和探索左侧的其它文档。

## 点赞/学习

- 如果你觉得这个项目帮助到了你，你可以去[GitHub](https://github.com/lgf196/ant-simple-pro) 给作者点个star，作者就会很开心了:heart:

## 游览器支持

| **Edge** |   **Firefox**   |   **Chrome**    |   **Safari**    |
| :------: | :-------------: | :-------------: | :-------------: |
|   Edge   | last 2 versions | last 2 versions | last 2 versions |

::: tip
本项目不支持IE游览器（Internet Explorer），因为vue3.0中的[propy](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy)不支持IE，而且react17.0之后也将不在对IE支持了，微软官方，也明确不在更新IE了，建议大家用Edge。
:::

##  生态圈

1.  [anferEnd](https://github.com/lgf196/ant-simple-pro/tree/afterEnd)是 ant-simple-pro的后端项目，由typescript+node+mysql+docker实现。
2.  [ant-simple-draw](https://github.com/lgf196/ant-simple-draw)是一款在线图解编辑器。
3.  [h5-Dooring](https://github.com/MrXujiang/h5-Dooring)让H5制作像搭积木一样简单, 轻松搭建H5页面, H5网站, PC端网站, 可视化设计,LowCode平台.
