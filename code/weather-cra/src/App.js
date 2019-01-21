import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Weather from './Weather.js'
const openWeatherApiKey = '6ea35fbcd51d5e917b7d8309292bc51c'
class App extends Component {
  render() {
    return (
      <div className="App">
        <Weather apiKey={openWeatherApiKey}/>
      </div>
    );
  }
}

export default App;
