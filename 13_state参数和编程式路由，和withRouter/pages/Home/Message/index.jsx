import React, { Component } from 'react'
import { Route ,Link } from 'react-router-dom';
 
import Detial from './Detial';

export default class Message extends Component {
  state = {
    list: [
      { id: '001', title: '2023年两会召开' },
      { id: '002', title: '五一放假安排' },
      { id: '003', title: 'WEB就业形势严峻'}
    ]
  }
  render() {
    let { list } = this.state;
    return (
      <div>
        <ul>
          {list.map((item,index) => {
            return (
              <li key={item.id}>< Link to={{pathname:'/home/message/detail',state:{id:item.id,title:item.title}}} >消息{index+1}</ Link></li>
            )
          })}
        </ul>
        <Route path="/home/message/detail" component={Detial} />
      </div>
    )
  }
}
