import React, { Component } from 'react';
import './App.css';

import { Links } from './components/Links';

class App extends Component {
  constructor() {
    super();

    this.state = {

    }
  }

  render() {

    return (
      <div className="App">
        <Links />
      </div>
    );
  }
}

export default App;
