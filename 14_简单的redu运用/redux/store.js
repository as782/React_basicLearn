// redux4.2弃用createStore，legacy_crateStore
import { legacy_createStore as createStore } from "redux";
//引入服务于Count 组件的reducer
import reducerCount from './reducer_count'

export default createStore(reducerCount)