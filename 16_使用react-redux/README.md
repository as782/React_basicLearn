  
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
 
 #  redux 开始
 1. 在redux中，保持reducer是一个纯函数非常重要，保证reducer是纯函数要达到以下几点：

- 不得修改传入的参数:
  reducer接受的参数由两个，一个是action,一个是state,其中action只是用来传递信息的，完全没有修改的必要，那么state呢，既然reducer是用来返回一个新的state的，在这
  个过程中直接基于传入的state来改，然后再返回，貌似也可以达到效果？实际上，虽然在reducer处理过程中改变了传入的state，有可能redux还会正常运转，**但像时间旅行，录制和回放这类依赖于历史状态的功能则无法实现了**，要知道这可是redux当时的设计初衷之一~特别注意的是，如果改变了传入的参数initState,或该对象底层的任意一个key值，都有可能在应用于react组件时，**导致react任为该状态无变化，而不更新组件，**因为redux源代码中将oldState和newState（reducer返回的结果）做比较，如果某一级state指定的引用相等，则会导致此结果，这样做是牺牲一点计算性能（生成新对象）来保证页面刷新。


- 不得调用非纯函数，如Date.now():
redux的核心**提供可预测化的状态管理，即无论何时特定的action触发的行为永远保持一致**，试想如果reducer中有Date.now()等非纯函数，即使同样的action,那么reducer处理过程中也是有所不同的，**不再能保证可预测性**

- 不得执行有副作用的操作，如API请求和路由跳转:
  
  首先，执行有副作用的操作，如api和路由跳转，因为设置到后台的处理，会带来和上一节同样的问题，同样的action触发后的处理过程可能有所不同(依据后台处理或路由跳转而定)，失去了可预测性.
其次因为reducer函数的返回值是要作为下一个状态值被返回的，那么试想当reducer中有api调用时，**api是会向后台请求数据的异步函数**往往希望后台的请求结果数据会应用于新的state，但是这时候会发现，这个异步函数卸载reducer中没有办法影响到state的更新，因为在异步请求处理完成时，**reducer函数已经被返回(函数的返回是同步的)**，所以说在redcuer中调用api也完全没有意义了.
 - 要请求API ：
      在dispatch方法之前进行api请求：在dispatch之外先进行api异步请求，当收到请求结果后，根据结果的不同选择dispatch不同的action
      应用redux-thunk,redux-promise等中间件，就可以在dispatch函数中直接执行api请求等异步操作了。
作者：LT_bear
链接：https://juejin.cn/post/6844903842237120519
来源：稀土掘金



#  简单的创建一个redux
 1. 创建redux文件
  --Src
    --redux
      --store.js
      --count_ reducer .js

  在store中使用createStore() 将创建好的reducer 生成一个store.并且将其暴露。
2. 编写xxxx_reducer.js
    reducer是一个纯函数，它接受两个参数，（prestate,action) => newstate;
    prestate是store中之前的状态，action 是一个普通的对象，在对象中描述了改变状态的行为，和将要更新的状态数据，一般为{type:"action name",data:xxx};
    使用switch 来判断不同行为对状态的不同更新，每个case :return newstate;

3. 获取store中的数据状态数据。
   通过方法store.getState()可以获取 reducer 返回的 新对象。
   除此之外由于你需要更新的状态是通过redux维护的，所以react没有检测到变化不会引起页面的渲染。
   通过在componentDidmount() 中使用 store.subscribe(()=>{ }); 可以监听store中维护的状态的改变，所以在该函数中可以调用渲染页面的函数render(),或者调一次setState({});
   或者直接在index.js中直接监听<APP/> 组件 发生改变就从新渲染 app组件；



 # 3.求和案例_ redux 异步action版 需要中间件的thunk
(1).明确:延迟的动作不想交给组件自身，想交给action
(2).何时需要异步action:想要对状态进行操作，但是具体的数据靠异步任务返回(非必须)。
(3).具体编码:
  1) .npm i  redux-thunk, 并配置在store中
  2) .创建action的两数不再返回一般对象， 而是一个函数， 该函数中写异步任务 **该函数中的参数就有dispatch函数**。
  ```js 
        //异步的action返回一个函数，action是一个函数类型，但是还得用dispatch调用它。
            store.dispatch(AsyncAdd(sum,1000));
            //其中AsyncAdd() 就是一个函数式的action
  ```
  3) .异步任务有结果后，分发一个同步的action去真正操作数据。
(4).备注:异步action不是必须要写的，完全可以自己等待异步任务的结果了再去分发同步action。

