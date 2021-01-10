# 请求
本项目使用当前流行的 `http` 请求库 `axios` 提供请求服务，二次封装文件在 `src/utils/request.js`

## loading 处理
提供3种方式
- 全屏 loading，通过 showLoading 参数控制
- vuex loading 状态，在组件中使用 loading 状态控制自定义的 loading 动画的显示/隐藏
- 通过回调方式将 loading 状态传递到组件内

## 拦截器
没有使用 `axios` 自带的拦截器，使用闭包实现，可以自定义更多的参数，当然 `axios` 可以通过 `config` 属性接受其它参数，但是在响应异常情况下，
`error.response` 是没有值的，那么也就不能通过 `error.response.config` 接受到其它的参数了

```javascript
const request = (
  {
    // 自定义的一些参数
    showWarning = true,
    showError = true,
    showLoading = true,
    loadingCb = () => {},
    throwWarningError = false,
    throwHttpError = false,
    warningMsg = '',
    errorMsg = '',
    // axios 的参数
    ...options
  } = {}
) => {
  // 请求开始
  requestStart(options, loadingCb, showLoading)
  return instance(options)
    .then(response => {
      // 响应正常
      return requestThenEnd({response, loadingCb, showLoading, showWarning, warningMsg, throwWarningError})
    })
    .catch(error => {
      // 响应异常
      console.log('request catch', error)
      return requestCatchEnd({error, loadingCb, showLoading, showError, errorMsg, throwHttpError})
    })
}
```

## 取消重复请求
在路由跳转时，取消上个路由还未完成的请求。通过 `axios.CancelToken` 实现，如果在业务代码中有自己的取消请求逻辑，可以传递 `cancelToken` 覆盖默认
的取消请求。
> 请求方式、请求路径、请求参数相同 则视为重复请求

## 接口异常提示
分两种情况：
- 接口本身响应正常，但是为自身业务报错，比如：后端返回 订单超时，姓名重复这类 信息
- 接口响应异常，可能是服务端代码本身报错，也可能是网关错误等其它原因
对于第一种情况，一般统一为一个字段，比如：`msg` 这种可以统一处理，有些不同的地方可以通过控制 `showWarning`、`warningMsg` 来控制提示信息；
对于第二种情况，会根据接口 `http` 异常状态码来显示错误信息，比如：500 服务器繁忙、502 网关错误。有些不同的地方可以通过控制 `showError`、`errorMsg` 来控制提示信息；
部分代码：
```javascript
if (showWarning) {
  message.destroy()
  message.warning(warningMsg || responseData.msg || '操作失败')
}
```

## 抛出错误
提供两个参数控制，`throwWarningError`、`throwHttpError`分别对应接口异常的两种情况，默认都为 `false`，即错误不会抛出到业务层，`Promise` 会被中断
例如：
```javascript
request({
  method: 'get',
  url: '/order'
}).then(data => { // 响应成功，data 订单数据
  // ...
}).catch(err => { // 如果接口异常（两种情况都是），catch 里面的代码不会执行
  console.log(err)
})
```
这样就只用关注成功的代码逻辑了，错误的情况被封装代码内部中断了。一般请求也就是请求一次，成功则显示数据，错误则显示提示信息。
当然如果是需要抛出错误，通过上面两个参数控制即可。
