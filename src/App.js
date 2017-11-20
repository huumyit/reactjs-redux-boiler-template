import React, { Component } from 'react';
import './App.css';
import Demo from './demo/Demo';

class App extends Component {
  render() {
    return (
      <div className="alert alert-success">
        <button type="button" className="close" data-dismiss="alert" aria-hidden="true">&times;</button>
        <strong>Title!</strong> Alert body ...
      </div>
      
    );
  }
}

export default App;
