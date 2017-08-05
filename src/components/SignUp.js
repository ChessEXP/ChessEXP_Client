import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';

const responseGoogle = (response) => {
  console.log(response);
}

export class SignUp extends Component {
  constructor(props) {
    super();

    this.state = {

    }
  }

  render() {

    return (
      <form>
        <input placeholder="User-name" id="userName" type="text"/>
        <label htmlFor="userName"></label>

        <input placeholder="Email" id="email" type="text"/>
        <label htmlFor="email"></label>

        <select name="" id="">
          <option value="">Image1</option>
          <option value="">Image2</option>
          <option value="">Image3</option>
        </select>

        <GoogleLogin
          clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
        />,
        <button id='googleButton'></button>

      </form>
    );
  }
}
