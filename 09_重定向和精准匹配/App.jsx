import React, { Component } from 'react';
import { Redirect, Route } from 'react-router-dom';
import './App.css';
import About from './pages/About';
import Home from './pages/Home';
import MyNavLink from './components/MyNavLink';
export default class App extends Component {



  render() {
    return (
      <div>
        <div className="row">
          <div className="col-xs-offset-2 col-xs-8">
            <div className="page-header"><h2>Router Demo</h2></div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">
              {/* 原始html中我们使用a标签实现页面的跳转 */}
              {/* <NavLink activeClassName="active" className="list-group-item " to="/about">About</NavLink>
              <NavLink activeClassName="active" className="list-group-item" to="/home">Home</NavLink> */}
              <MyNavLink to='/about'  >About</MyNavLink>
              <MyNavLink to='/home/gf/jh'  >Home</MyNavLink>
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                <Route  exact path="/about" component={About} />
                <Route  exact path="/home" component={Home} />
                <Redirect to='/home' />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
