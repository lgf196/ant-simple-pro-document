# 快速上手

> 在开始之前，推荐先学习 [Vue3](https://v3.cn.vuejs.org/) 、 [ES6+](http://es6.ruanyifeng.com/) 、 [Ant Design Vue 2x](https://2x.antdv.com/docs/vue/introduce-cn/) 、[vue-cli](https://cli.vuejs.org/zh/), 了解 [webpack](https://webpack.js.org/) 、[babel](https://babel.dev/) ，并且有安装 [Node.js](https://nodejs.org/) v10 或以上 、[Git](https://git-scm.com/)。不仅是本项目，学习这些在日常开发中会非常有帮助。

## 安装

```bash
git clone https://github.com/lgf196/ant-simple-pro my-project-name --depth=1
cd my-project-name/vue
```

## 目录结构

项目的目录结构如下：

```bash
├── public             # 静态资源（这里的文件不会经过webpack处理编译，打包只会单纯的复制）
├── src                # 源码目录
│ ├── api              # 封装请求 api
│ ├── assets           # 静态资源（这里的文件会经过webpack处理编译）
│ ├── components       # 组件目录
│ ├── config           # 项目配置
│ ├── hooks            # 封装hooks
│ ├── layouts          # 布局目录
│ ├── locales          # 多语言文件目录
│ ├── plugins          # 插件（vue引用第三方 UI 库、插件）目录
│ ├── router           # 路由
│ ├── store            # vuex 状态管理
│ ├── utils            # 工具函数目录
│ ├── views            # 页面
│ ├── App.vue          # 根组件
│ └── main.js          # 项目入口文件
├── .browserslistrc    # browserslist配置
├── .editorconfig      # 编辑器配置
├── .env               # 环境变量 开发环境
├── .env.alpha         # 环境变量 测试环境
├── .env.preprod       # 环境变量 预生产环境
├── .env.prod          # 环境变量 生产环境
├── .eslintignore      # ESlint忽略文件配置
├── .eslintrc          # ESlint配置
├── .gitignore         # Git忽略文件配置
├── .postcss.js        # Postcss配置
├── babel.config.js    # Babel配置
├── jsconfig.json      # 配合 VS Code，增加开发体验
├── package.json       # 项目信息、依赖等
└── package-lock.json  # 固定依赖版本
└── vue.config.js      # vue项目配置文件
```

## 开发

1. 安装依赖

```bash
npm install
```

2. 启动项目
```bash
npm run serve
# or
npm run dev
# or
npm start
```
国内用户推荐更换 npm 镜像源进行加速，如：
```bash
npm install --registry=https://registry.npm.taobao.org
```
推荐使用 [nrm](https://github.com/Pana/nrm) 进行镜像源管理

3. 启动完成后打开浏览器访问 [http://localhost:9050](http://localhost:9050)，如果需要更改启动端口，可在 `vue.config.js` 修改。