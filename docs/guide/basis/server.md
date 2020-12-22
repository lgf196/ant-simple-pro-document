# 服务端交互

本项目的服务端数据并没有采用[mock](https://github.com/nuysoft/Mock)来模拟数据，而是采用`ts+node+mysql`自已来写服务端接口，具体的请查看[进阶篇章]()

项目的前端接口管理，全部在[@/api]()这个文件夹中,这样集中起来，更加方便的管理接口文档。

``` ts
api/
  login.ts
  xx.ts
```

服务端交互，采用了axios来管理接口的，并且我们自已封装了一个简单的[request.js](https://github.com/lgf196/ant-simple-pro/blob/master/react%2Btypescript/src/http/index.ts),它包含了全局 `request拦截器`、`response拦截器`、`统一的错误处理`、`统一做了超时处理`、`baseURL设置等`，当然

我们也提供了一个封装非常全的一个[request.js](https://github.com/lgf196/ant-simple-pro/blob/master/vue/src/api/request.js).

## 完整案例如下:point_down:

``` ts
// api/login
import { resquest } from '@/http'
export type userListType = Partial<Pick<getUserType, 'username'>>;
export const userList = <T extends userListType>(data?: T): Promise<responseData> => resquest('get', `/user/find`, data);

// pages/home
import React, {useEffect,useState} from 'react'
import { userList } from '@/api/login'
export type userListType={
    name:string;
    aga:number;
    sex:string
};
const App:React.FC=()=>{
  const [result, setResult] = useState<userListType[]>([]);
  useEffect(() => {
    const api=async ()=>{
        let res=await userList({username:'li'});
        setResult(res.data);
    }
    api();
  }, []) 
    return (
    <>
        {result.length ? 
            result.map((item,index)=>(
                 <p key={index}>{item.name}</p>
            ))
         : null}
    </>)
}
```

