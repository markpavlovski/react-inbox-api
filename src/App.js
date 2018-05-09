import React, {Component} from 'react';
import Toolbar from './components/Toolbar'
import Messages from './components/Messages'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Toolbar />
        <Messages />
      </div>
    )
  }
}

export default App;
