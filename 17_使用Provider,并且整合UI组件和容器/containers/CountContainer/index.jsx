import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addAction, jianAction, AsyncAddAction } from '../../redux/actions_count'
class Count extends Component {
    Add = () => {
        const { increment, state: { count } } = this.props;
        const value = this.selectedVal.value;
        let sum = count + value * 1;
        increment(sum);
    }
    Decr = () => {
        const { decrement, state: { count } } = this.props;
        const value = this.selectedVal.value;
        let sum = count - value * 1;
        decrement(sum);
     }
    JISUJIA = () => {
        const { increment, state: { count } } = this.props;
        if (count % 2 !== 0) {
            const value = this.selectedVal.value;
            let sum = count + value * 1;
            increment(sum);
        }
    }
    asyncAdd = () => {
        const { AsyncIncrement, state: { count } } = this.props;
        const value = this.selectedVal.value;
        let sum = count + value * 1;
        AsyncIncrement(sum,1000);
     }
    render() {
        let { count } = this.props.state;
        return (
            <div>
                <h1>所求的和为:{count}</h1>
                <select ref={e => { this.selectedVal = e }} >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
                <button onClick={this.Add} className='btn btn-primary'>点我加</button>
                <button onClick={this.Decr} className='btn btn-primary'>点我减</button>
                <button onClick={this.JISUJIA}>奇数才能加</button>
                <button onClick={this.asyncAdd} className='btn btn-primary'>点我等一下加</button>
            </div>
        )
    }
}

export default connect(state => ({ state }),
    {
        increment: addAction,
        decrement: jianAction,
        AsyncIncrement: AsyncAddAction
    }
)(Count);