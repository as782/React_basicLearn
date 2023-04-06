import React, { Component } from 'react'
import store from '../../redux/store'
import {add,decr,AsyncAdd} from '../../redux/actions_count'
export default class Count extends Component {
    state = {}

    componentDidMount() {
        store.subscribe(() => {
            this.setState({});
        })
    }
    increment = () => {

        let { count } = store.getState();
        let sum = count + this.selectedVal.value * 1;
        store.dispatch(add(sum));
    }
    jianfa = () => {

        let { count } = store.getState();
        let sum = count - this.selectedVal.value * 1;
        store.dispatch(decr(sum));
    }
    jishuIncrement = () => {
        let { count } = store.getState();
        if (count % 2 !== 0) {
            let sum = count + this.selectedVal.value * 1;
            store.dispatch(add(sum));
            return;
        }
        alert('当前和不为奇数！')

    }
    AsyncIncrement = () => {
        
            let { count } = store.getState();
            let sum = count + this.selectedVal.value * 1;
            //异步的action返回一个函数，action是一个函数类型，但是还得用dispatch调用它。
            store.dispatch(AsyncAdd(sum,1000));
            
    }

    render() {
        let { increment, jianfa, jishuIncrement, AsyncIncrement } = this;
        let { count } = store.getState()
        return (
            <div>
                <div className="count"><h1>和为：{count}</h1></div>
                <div className="oprateBroad">
                    <select ref={e => { this.selectedVal = e }}   >
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                    <button onClick={increment}>+</button>
                    <button onClick={jianfa}>-</button>

                    <button onClick={jishuIncrement}>当前数为奇数才能操作</button>
                    <button onClick={AsyncIncrement}>等一会再加</button>
                </div>
            </div>
        )
    }
}
