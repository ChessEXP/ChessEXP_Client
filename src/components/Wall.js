import React, { Component } from 'react';
import $ from 'jquery';

import { GoalBar } from './GoalBar';

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
    $('#game-board').css('display', 'inline-block');
  }

  render() {
    return(
      <div className="wall-container">
        <GoalBar />
      </div>
    );
  }
}
