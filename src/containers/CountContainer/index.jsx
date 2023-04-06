import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addAction, jianAction, AsyncAddAction } from '../../redux/actions/count'
class Count extends Component {
    Add = () => {
        const { increment} = this.props;
        const value = this.selectedVal.value*1;
        increment(value);
    }
    Decr = () => {
        const { decrement} = this.props;
        const value = this.selectedVal.value*1;  
        decrement(value);
     }
    JISUJIA = () => {
        const { increment ,count} = this.props;
        if (count % 2 !== 0) {
            const value = this.selectedVal.value*1;
            increment(value);
        }
    }
    asyncAdd = () => {
        const { AsyncIncrement } = this.props;
        const value = this.selectedVal.value*1; 
        AsyncIncrement(value,1000);
     }
    render() {
        let { count ,persons } = this.props;
        return (
            <div className='container'>
                <h1>所求的和为:{count}</h1>
                <h4>Person组件的人数:{persons.length}</h4>
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

export default connect(state => ({count: state.count, persons: state.persons  }),
    {
        increment: addAction,
        decrement: jianAction,
        AsyncIncrement: AsyncAddAction
    }
)(Count);