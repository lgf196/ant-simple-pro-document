# 服务端

本项目的服务端接口是自已写的，采用`mysql`+`node`+`typescript`+`docker`项目结构如下:point_down:

```bash
├── public                     # 存放静态资源文件
├── src                        # 源代码
│   ├── config                 # 数据库配置文件
│   ├── controllers            # 业务层，控制器
│   ├── interface              # ts接口
│   ├── middleware             # 中间件
│   ├── routes                 # 路由
│   ├── types                  # 全局类型声明
│   ├── utils                  # 工具函数
│   └── index.ts               # 入口文件
├── .gitignore                 # git提交忽略文件
├── ant-simple-pro.sql         # 数据库文件
├── tsconfig.json              # 项目全局ts配置文件
└── package.json               # package.json
```

## 运行项目

1. 首先下载我们[ant-simple-pro](https://github.com/lgf196/ant-simple-pro/tree/afterEnd)的后端代码，ant-simple-pro的后端代码在`afterEnd`分支上，所以小伙伴们需要自行切换一下。

2. 找到`ant-simple-pro.sql` 文件夹，这个是数据库导出的表，我们需要将这个导入到数据库中去，我这里采用的是[navicat](http://www.navicat.com.cn/)工具来管理操作数据库的，打开这个软件，如果已近有一个库存在的话，那么只需新建一个数据库，这里我的数据库就取名为`ant-simple-pro`。

3. `ant-simple-pro`数据库建好后，`点击右键，会出现一个运行sql文件的一个选项`，点击它,然后会出现一个弹窗，然后上传我们的`ant-simple-pro.sql` 文件，这样数据库的表和数据就会立刻同步进来。

4. 找到[src/config](src/config)文件，修改如下代码如下:point_down:

   ``` ts
   import mysql from 'mysql'
   import {code,sucessCallbackVal} from '../utils/variable'
   import {dbType} from '../interface'
   
   class mysqlDb<T> {   //创建数据库class
       public connect(){
         let connection= mysql.createPool({  //连接mysql配置
               host     : 'localhost',
               user     : 'root', // 数据库的用户名，我的数据库用户名是root,小伙伴们的用户名自行修改
               password : 'lgf196', //数据库的密码，这里修改成自已的密码
               database : 'ant-simple-pro' //数据库的名字，同上
           });
           return connection;
       }
   }
   ```

   5.安装我们项目的依赖

   ``` js
   npm install
   ```

   6.启动我们的项目

   ``` js
   npm run dev
   ```

   

