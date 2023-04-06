import React, { Component } from 'react'
import store from '../../redux/store'

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
        store.dispatch({ type: 'increment', data: sum });
    }
    jianfa = () => {

        let { count } = store.getState();
        let sum = count - this.selectedVal.value * 1;
        store.dispatch({ type: 'decrement', data: sum });
    }
    jishuIncrement = () => {
        let { count } = store.getState();
        if (count % 2 !== 0) {
            let sum = count + this.selectedVal.value * 1;
            store.dispatch({ type: 'increment', data: sum });
            return;
        }
        alert('当前和不为奇数！')

    }
    AsyncIncrement = () => {
        setTimeout(() => {
            let { count } = store.getState();
            let sum = count + this.selectedVal.value * 1;
            store.dispatch({ type: 'increment', data: sum });
        }, 1000);
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
