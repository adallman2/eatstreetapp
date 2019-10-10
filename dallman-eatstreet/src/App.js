import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import ZipSearch from './components/ZipSearch.js'
import ZipDistance from './components/ZipDistance.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Alex Dallman - Eat Street Application Project</h2>
        </div>
        <p className="App-intro">
          Enter a zip code below:
        </p>
        <ZipSearch></ZipSearch>
        <p className="app-intro">
          Enter two zip codes and a distance below:
        </p>
        <ZipDistance></ZipDistance>

      </div>
    );
  }
}

export default App;
