import { INCREMENT,DECREMENT } from "./constant"
//箭头函数写法
export const add = (data)=>({type: INCREMENT,data});
//一般写法
export function jian(data){
    return{
        type:DECREMENT,
        data
    }
}


// 异步的action 要中间件 thunk,
export function AsyncAdd(data,time){
    return (dispatch)=>{
        setTimeout(()=>{
            dispatch(add(data));
        },time)
    }
}