import React, { Component } from 'react';
import Hello from './components/Hello'
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div className="App">
            <Hello {name}/>
      </div>
    );
  }
}
