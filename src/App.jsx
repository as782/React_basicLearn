import React, { Component } from 'react';
import Count from './containers/CountContainer';
import Person from './containers/PersonContainer';
export default class App extends Component {
    render() {
        return (
            <div>
                <Count />
                <hr />
                <Person />
            </div>
        )
    }
}
