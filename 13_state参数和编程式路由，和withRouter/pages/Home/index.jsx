import React, { Component } from 'react'
import {Redirect, Route, Switch } from 'react-router-dom'
import MyNavLink from '../../components/MyNavLink'
import News from './News'
import Message from './Message'

export default class Home extends Component {

  componentDidMount(){
    console.log('???');
    setTimeout(() => {
      this.props.history.push("/home/message");
    }, 2000);
  }
  render() {
    return (
      <div>
        <h1>我是HOme</h1>
        <ul className="nav nav-tabs">
          <li><MyNavLink to="/home/news">News</MyNavLink ></li>
          <li> <MyNavLink to="/home/message" >message</MyNavLink ></li>
        </ul>
        <div>
          <Switch>
            <Route  path="/home/news" component={News} />
            <Route  path="/home/message" component={Message} />  
            <Redirect to="/home/news" />    
          </Switch>
        </div>
      </div>
    )
  }
}
