# 路由

本项目的路由配置文件全部在[@/router]( )文件夹中，所有的版本均含有这个文件夹，且该项目采用的是[browserHistory]() 路由模式，其它版本也一样。

## react

该版本采用的是react官方推荐的[react-router-dom](https://github.com/ReactTraining/react-router)+[history](https://github.com/ReactTraining/history)+[connected-react-router](https://github.com/supasate/connected-react-router)，具体操作，代码如下:point_down:

```ts
//assets/js/history
import { createBrowserHistory } from 'history'
export const history = createBrowserHistory({
  basename: process.env.PUBLIC_URL // 就是page.json里面的homepage
});

//routers.ts
export const noBasicLayoutRouter: RouteConfig[] = [
  {
    path: '/',
    exact: true,
    render: () => <Redirect to={{ pathname: '/home' }} />
  }
]

//router/index.ts
import { history } from '@/assets/js/history'
import ReactConfig from './routers'
const Routers: React.FC = () => {
  return (
    <ConnectedRouter history={history}>
      {renderRoutes(ReactConfig)}  //官方的静态路由react-router-config
    </ConnectedRouter>
  )
}


```

具体的路由页面布局方式，请查看[布局](layout.md)。

::: warning 注意事项
react-router-dom@5.xx，则应使用history@4.10.1，因为最新版本的历史记录（v5）仅适用于react-router-dom@6.xx，所以下载依赖包的时候，一定要看清楚是哪个版本，如果不是如上的，就会项目报错。
:::

::: tip

该browserHistory模式下，要想弄好路由配置，还得需要后端的支持，否则页面部署会404，这里我就以[nginx](https://github.com/nginx/nginx)为解决方案，代码如下:point_down:

:::
```sh
location /react {
     try_files $uri $uri/ /react/index.html;
}
```