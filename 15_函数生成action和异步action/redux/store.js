// redux4.2弃用createStore，legacy_crateStore
import { legacy_createStore as createStore,applyMiddleware } from "redux";
//引入服务于Count 组件的reducer
import reducerCount from './reducer_count'
// 引入中间件 thunk 

import thunk from 'redux-thunk'
// 运用中间件需要通过applyMiddleware注册后使用
export default createStore(reducerCount,applyMiddleware(thunk));