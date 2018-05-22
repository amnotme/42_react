import React, { Component } from 'react';
import './App.css';
import { Clock } from './clock';
import { Tabs } from './tabs';
class App extends Component {
  render() {
    return (
      <div className="App">
		      <Clock />
          <Tabs />
      </div>
    );
  }
}

export default App;
