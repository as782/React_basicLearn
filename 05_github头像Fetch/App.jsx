import React, { Component } from 'react';
import Header from './components/Header/Header';
import Content from './components/Content/Content';
import './App.css';

export default class App extends Component {



  render() {
    return (
      <div className="container">
        <Header  />
        <Content   />

      </div>
    )
  }
}
