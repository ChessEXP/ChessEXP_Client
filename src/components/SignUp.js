import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';

export class SignUp extends Component {
  constructor(props) {
    super();

    this.state = {
    }
  }

  render() {
    return (
      <div className="login-container">
        { showUser }
      </div>
    );
  }
}
