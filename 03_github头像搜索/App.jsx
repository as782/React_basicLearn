import React, { Component } from 'react';
import Header from './components/Header/Header';
import Content from './components/Content/Content';
import './App.css';

export default class App extends Component {

  state = {
    isFirst:true,
    isLoading:false,
    error:'',
    userInfo: []
  }
  updateAppState = (newstate) => {
    this.setState(newstate);
}
  render() {
    return (
      <div className="container">
        <Header updateAppState={this.updateAppState} />
        <Content {...this.state} />

      </div>
    )
  }
}
