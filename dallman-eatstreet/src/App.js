import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import ZipSearch from './components/ZipSearch.js'
import ZipDistance from './components/ZipDistance.js'
import ZipData from './components/ZipData.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Alex Dallman - Eat Street Application Project</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <ZipSearch></ZipSearch>
        <ZipDistance></ZipDistance>
        <ZipData></ZipData>

      </div>
    );
  }
}

export default App;
