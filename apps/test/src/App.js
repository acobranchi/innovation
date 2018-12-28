import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CompOne from '@project/comp-one';
import CompTwo from '@project/comp-two';
import NotFound from '@project/not-found';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <CompOne />
          <CompTwo/>
          <NotFound/>
        </header>
      </div>
    );
  }
}

export default App;
