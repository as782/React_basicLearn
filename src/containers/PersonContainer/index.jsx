import React, { Component } from 'react'
import { connect } from 'react-redux'
import { nanoid } from 'nanoid'
import { add_personAction } from '../../redux/actions/person';

class Person extends Component {
    addNewPerson = () => {
        let name = this.NAMENODE.value;
        let age = this.AGENODE.value;
        this.props.addOnePerson({ id: nanoid(), name, age });

        this.NAMENODE.value = '';
        this.AGENODE.value = '';
    }
    render() {
        return (
            <div className='container'>
                <h1>这是Person组件</h1>
                <h4>Count组件的求和:{this.props.count}</h4>
                <div className='input-group'>
                    <input type="text" ref={c => { this.NAMENODE = c }} placeholder="输入姓名" />
                    <input type="text" ref={c => { this.AGENODE = c }} placeholder="输入年龄" />
                    <button onClick={this.addNewPerson}>添加</button>
                </div>
                <ul className='list-group'>
                    {
                        this.props.persons.map((p) => {
                            return (<li className='list-group-item' key={p.id}>姓名:{p.name}&nbsp;&nbsp;——&nbsp;&nbsp;年龄:{p.age}</li>)
                        })
                    }
                </ul>
            </div>

        )
    }
}

export default connect(state => ({ count: state.count, persons: state.persons }), { addOnePerson: add_personAction })(Person);