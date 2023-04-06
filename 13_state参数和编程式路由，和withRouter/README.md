 
# 十一、向路由组件传递参数
1. params参数
路由链接(携带参数): <Link to={' /demo/test/tom/18'}>详情</Link>
注册路由(声明接收): <Route path="/demo/test/ :name/ :age" component={Test}/>
接收参数: const {1d,tit1e} = this. props .match. params
2. search 参数
3. state 参数
   state的参数在地址栏中不体现，刷新后还能保持数据是，路由器维护了history,history中保存了每次点击的数据。

2. search参数
路由链接(携带参数): <Link to=' /demo/test ?name=tom&age=18'}>详情</Link>
注册路由(无需声明，正常注册即可): <Route path="/demo/test" component={Test}/>
接收参数: this.props.1ocation.search
备注:获取到的search是urlencoded编码字符串，需借助querystringly
3.state参数
路由链接(携带参数): <Link to={{pathname:'/demo/test',state:{name=tom,age=18}} }>详情</Link>
注册路由(无需声明，正常注册即可): <Route path="/demo/test" component={Test}/>
接收参数: this.props.location.state


## 十三BrowserRouter ，HashRouter的区别
1. 底层原理不一-样:
BrowserRouter使用的是H5的history API,不兼容容IE9及以下版本。
HashRouter使用的是URL的哈希值。
2. url表现形式不-样
BrowserRouter的路径中没有#，例如: localhost:3000/demo/test
HashRouter的路径包含#,例如: localhost:3000/#/demo/test
3. 刷新后对路由state参数的影响
(1) . BrowserRouter没有任何影响，因为state保 存在history对象中。
(2) . HashRouter刷新后公导致路由state参数的丢失。
4.备注: HashRouter 可以用于解决一些路径错误相关的问题。

## withRouter可以使得普通的非路由组件 的props 拥有 history对象 可以实现路由导航，及其他对路由的操作。
在暴露一个组件前使用该方法；
exports default withRouter(一个组件)；