import React, { Component } from 'react'

let data = [
    { id: "001", context: '你好，中国！' },
    { id: "002", context: '你好，里幻想！' },
    { id: "003", context: '的撒给' }
]
export default class Detial extends Component {


    render() {

        console.log(this.props)
        let { id, title } = this.props.location.state || {};
        let obj = data.find((item) => {
            return item.id === id;
        }) || {};
        return (
            <div>
                <ul>
                    <li>ID:{id}</li>
                    <li>TITLE:{title}</li>
                    <li>CONTEXT:{obj.context} </li>
                </ul>
            </div>
        )
    }
}
