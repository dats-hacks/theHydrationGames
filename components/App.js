import React, { Component } from 'react';
import Graph                from './Graph';
import NavigationBar        from './NavigationBar';
import Register             from './Register';

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>Hello HSMC Team!</h1>
        <NavigationBar />
        <Graph />
      </div>
    );
  }
}