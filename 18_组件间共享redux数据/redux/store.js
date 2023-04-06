import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";
// 异步的action，返回的是函数形式，处理它需要中间件thunk
import thunk from "redux-thunk";
import countReducer from "./reducers/count";
import personReducer from "./reducers/person";
//合并多个reducer,入的对象就是最终保存在redux中的状态形式.
const reducers = combineReducers({
    count:countReducer,
    persons:personReducer
});
export default createStore(reducers,applyMiddleware(thunk));