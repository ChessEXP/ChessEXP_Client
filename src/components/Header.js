import React, { Component } from 'react';

import { SignUp } from './SignUp';
import { EventsPage } from './EventsPage';

export class Header extends Component {
  constructor(props) {
    super();

    this.state = {
      mountEvent: false,
      mountForm: false
    }

  }

  onShowForm() {

    this.setState({
      mountEvent: false,
      mountForm: true
    });

  }

  onShowEvent() {

    this.setState({
      mountForm: false,
      mountEvent: true
    });

  }

  render() {
    let formShow = '';
    let eventShow = '';
    if (this.state.mountForm) {
      formShow = <SignUp />
    } else if (this.state.mountEvent) {
      eventShow = <EventsPage />
    }

    return (
      <div className="header-container">
        <button>Wall</button>
        <button onClick={ this.onShowEvent.bind(this) }>Events</button>
        <button onClick={ this.onShowForm.bind(this) }>Signup/Login</button>
        { eventShow }
        { formShow }
      </div>
    );
  }
}
