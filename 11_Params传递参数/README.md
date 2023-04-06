 
# 十一、向路由组件传递参数
1. params参数
路由链接(携带参数): <Link to={' /demo/test/tom/18'}>详情</Link>
注册路由(声明接收): <Route path="/demo/test/ :name/ :age" component={Test}/>
接收参数: const {1d,tit1e} = this. props .match. params
