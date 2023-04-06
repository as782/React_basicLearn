import React, { Component } from 'react'
import qs from 'qs'
let data = [
    { id: "001", context: '你好，中国！' },
    { id: "002", context: '你好，里幻想！' },
    { id: "003", context: '的撒给' }
]
export default class Detial extends Component {


    render() {
         
        let { search } = this.props.location;
        const queryobj = qs.parse(search.slice(1));
        let obj = data.find((item) => {
            return item.id === queryobj.id;
        })
        return (
            <div>

                <ul>
                    <li>ID:{queryobj.id}</li>
                    <li>TITLE:{queryobj.title}</li>
                    <li>CONTEXT:{obj.context} </li>

                </ul>

            </div>
        )
    }
}
