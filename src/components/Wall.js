import React, { Component } from 'react';
import $ from 'jquery';

import { GoalBar } from './GoalBar';
// import { ChessBoard } from './ChessBoard';

export class Wall extends Component {
  constructor(props) {
    super();
    console.log(props);

    this.state = {
      currentUser: props.userInfo
    }
  }

  componentDidMount() {
    $('.board-hidden').css('display', 'block');
  }

  render() {
    return(
      <div className="wall-container">
        <GoalBar />
        {/* <ChessBoard /> */}
      </div>
    );
  }
}
