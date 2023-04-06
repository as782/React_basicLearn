import React, { Component } from 'react';
import CountContainer from './containers/CountContainer';
import store from './redux/store'
export default class App extends Component {
 render(){

    // 容器需要操作 和redux 交互需要store
  return <CountContainer  store={store} />
 }
}
