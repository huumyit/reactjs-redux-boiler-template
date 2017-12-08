import React, { Component } from 'react';
import './App.css';
import Home from './components/Home';
import About from './components/About';

class App extends Component {
  render() {
    return (
      <div>
        <Home />
        <About />
      </div>
      
    );
  }
}

export default App;
