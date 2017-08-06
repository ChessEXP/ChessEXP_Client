import React, { Component } from 'react';

import { GoalBar } from './GoalBar';
import { ChessBoard } from './ChessBoard';

export class Wall extends Component {
  constructor(props) {
    super();

    this.state = {

    }
  }

  render() {
    return(
      <div className="wall-container">
        <h1>Hello Current User</h1>
        <GoalBar />
        <ChessBoard />
      </div>
    );
  }
}
