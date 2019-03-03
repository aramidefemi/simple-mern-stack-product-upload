import React, { Component } from 'react';
import logo from './logo.svg';

import './assets/css/bootstrap.min.css';
import './assets/css/custom.css';

import AppRouter from './router';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppRouter />
      </div>
    );
  }
}

export default App;
