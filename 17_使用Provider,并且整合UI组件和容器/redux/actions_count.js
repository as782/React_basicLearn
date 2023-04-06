import { INCREMENT,DECREMENT } from "./constant"
//箭头函数写法
export const addAction = (data)=>({type: INCREMENT,data});
//一般写法
export function jianAction(data){
    return{
        type:DECREMENT,
        data
    }
}


// 异步的action 要中间件 thunk,
export function AsyncAddAction(data,time){
    return (dispatch)=>{
        setTimeout(()=>{
            dispatch(addAction(data));
        },time)
    }
}