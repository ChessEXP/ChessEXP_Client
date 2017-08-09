import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom';

import './App.css';

import { Links } from './components/Links';
import { ChessHome } from './ChessHome';
import { ChessMulti } from './ChessMulti';

export default class App extends Component {
  render() {
    return (
      <div className="app-container">
        <div className="App">
          <Links />
        </div>
        <HashRouter>
          <div className="multiPlayer">
            <Route exact path='/' component={ChessHome} />
            <Route exact path='/:token' component={ChessMulti} />
          </div>
        </HashRouter>
      </div>
    );
  }
}
