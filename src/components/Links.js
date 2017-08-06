import React, { Component } from 'react';

import { SignUp } from './SignUp';
import { EventsPage } from './EventsPage';
import { Wall } from './Wall';

export class Links extends Component {
  constructor(props) {
    super();

    this.state = {
      mountWall: false,
      mountEvent: false,
      mountForm: false
    }

  }

  onShowForm() {

    this.setState({
      mountWall: false,
      mountEvent: false,
      mountForm: true
    });

  }

  onShowEvent() {

    this.setState({
      mountWall: false,
      mountEvent: true,
      mountForm: false
    });

  }

  onShowWall() {

    this.setState({
      mountWall: true,
      mountForm: false,
      mountEvent: false
    });
  }

  render() {
    let formShow = '';
    let eventShow = '';
    let wallShow = '';

    if (this.state.mountForm) {
      formShow = <SignUp />
    } else if (this.state.mountEvent) {
      eventShow = <EventsPage />
    } else if (this.state.mountWall) {
      wallShow = <Wall />
    }

    return (
      <div className="header-container">
        <button onClick={ this.onShowWall.bind(this) }>Wall</button>
        <button onClick={ this.onShowEvent.bind(this) }>Events</button>
        <button onClick={ this.onShowForm.bind(this) }>Signup/Login</button>
        { eventShow }
        { formShow }
        { wallShow }
      </div>
    );
  }
}
