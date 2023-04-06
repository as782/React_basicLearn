import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';
import './App.css';
import About from './pages/About';
import Home from './pages/Home';

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
              <NavLink activeClassName="active" className="list-group-item " to="/about">About</NavLink>
              <NavLink activeClassName="active" className="list-group-item" to="/home">Home</NavLink>
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                <Route path="/about" component={About} />
                <Route  path="/home" component={Home} />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
