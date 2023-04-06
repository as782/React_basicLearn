 
# 十一、向路由组件传递参数
1. params参数
路由链接(携带参数): <Link to={' /demo/test/tom/18'}>详情</Link>
注册路由(声明接收): <Route path="/demo/test/ :name/ :age" component={Test}/>
接收参数: const {1d,tit1e} = this. props .match. params
2. search 参数
3. state 参数
   state的参数在地址栏中不体现，刷新后还能保持数据是，路由器维护了history,history中保存了每次点击的数据。