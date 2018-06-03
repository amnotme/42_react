import React, { Component } from 'react';
import './App.css';
import { Clock } from './clock';
import { Tabs } from './tabs';

const Tab = [
  {title: 'one', content: 'I am the first'},
  {title: 'two', content: 'Second pane here'},
  {title: 'three', content: 'Third pane here'}
  ];
class App extends Component {

  render() {
    return (
      <div className="App">
		      <Clock />
          <Tabs tabs={ Tab } />
      </div>
    );
  }
}

export default App;
