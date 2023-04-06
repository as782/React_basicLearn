import React, { Component } from 'react'

export default class Count extends Component {
    state = {}

    increment = () => {
        console.log(this.props)
        let sum = this.props.state.count + this.selectedVal.value * 1;
        this.props.incre(sum);
    }
    jianfa = () => {
        let sum = this.props.state.count - this.selectedVal.value * 1;
        this.props.decre(sum);

    }
    jishuIncrement = () => {

        if (this.props.state.count % 2 !== 0) {
            let sum = this.props.state.count + this.selectedVal.value * 1;
            this.props.incre(sum);
            return;
        }
        alert('当前和不为奇数！')

    }
    AsyncIncrement = () => {
        let sum = this.props.state.count + this.selectedVal.value * 1;
        this.props.AsyncIncre(sum, 1000);
        
    }

    render() {
        let { increment, jianfa, jishuIncrement, AsyncIncrement } = this;
        return (
            <div>
                <div className="count"><h1>和为：{this.props.state.count}</h1></div>
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
