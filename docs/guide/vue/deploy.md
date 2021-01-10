# 部署
项目默认分了三种打包环境
```bash
# 测试环境
npm run build:alpha
# 预生产环境
npm run build:preprod
# 生产环境
npm run build:prod
```

不同的环境有不同的配置，通过 `process.env.VUE_APP_MODE` 区分：
```javascript
export default {
  dev: {
    api: 'xxx'
  },
  alpha: {
    api: 'xxx'
  },
  preprod: {
    api: 'xxx'
  },
  prod: {
    api: 'xxx'
  }
}[process.env.VUE_APP_MODE]
```
> 如果只是区分开发和打包环境，可以通过 `process.env.NODE_ENV` 区分

## 打包
运行打包命令后，会在 `dist` 目录生成静态文件，将 `dist` 目录上传到提供静态服务器即可。
这里需要注意两点：
1. 如果项目不是部署在根目录，则需要在 `vue.config.js` 修改 `publicPath`
```javascript
{
  publicPath: '/project-name/'
}
```
2. 项目路由默认为 `history` 模式，相较于 `hash` 模式更加现代化，但是 `history` 需要在静态服务器做一些配置，防止页面刷新 404。
如果使用 `Nginx` 作为 `Web server`，那么可以在 `ngnix.conf` 中配置如下：
```bash
# 因为前端使用了 history，所以将路由 fallback 到 index.html
# 根目录
location / {
  index  index.html;
  try_files $uri $uri/ /index.html;
}
# 非根目录
location /project-name {
  try_files $uri $uri/ /project-name/index.html;
}
```
因为页面刷新，这时候其实是请求到后端路由了，后端没有对应的路由页面就会 404，在配置中始终对路由返回 `index.html` 就可以了。
[详情参考](https://router.vuejs.org/zh/guide/essentials/history-mode.html)