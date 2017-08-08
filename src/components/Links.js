import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';

import { About } from './About';
import { EventsPage } from './EventsPage';
import { Wall } from './Wall';

import { Button, Image, Segment, Header, Icon, Label } from 'semantic-ui-react'


export class Links extends Component {
  constructor(props) {
    super();

    this.state = {
      mountWall: false,
      mountEvent: false,
      mountAbout: true,
      currentUser: '',
      logoutText: 'Login',
      btn: true
    }

  }

  onResponseOauth(response) {
    console.log(response.profileObj);
    this.setState({
                    currentUser: response.profileObj,
                    logoutText: 'Logout',
                    btn: false
                  });
  }

  onShowAbout() {

    this.setState({
      mountWall: false,
      mountEvent: false,
      mountAbout: true
    });

  }

  onShowEvent() {

    this.setState({
      mountWall: false,
      mountEvent: true,
      mountAbout: false
    });

  }

  onShowWall() {

    this.setState({
      mountWall: true,
      mountAbout: false,
      mountEvent: false
    });
  }

  render() {
    let userShow = '';
    let eventShow = '';
    let wallShow = '';
    let aboutShow = '';

    if(this.state.currentUser !== '') {
      userShow = (
        <Segment className='render-current-user'>
          <div className="outter-border">
              <div className="inner-border">
                <Image src={this.state.currentUser.imageUrl} alt="Avatar" bordered/>

                <i className="israel flag"></i> <br/>
                <Label as='a' color='orange' image>
                  <Label>
                    <Icon name='mail' /> 12
                  </Label>
                  <Label.Detail>{this.state.currentUser.email}</Label.Detail>
                </Label>
              </div>
            </div>
          </Segment>

      );
    }

    if (this.state.mountEvent) {
      eventShow = <EventsPage />
    } else if (this.state.mountAbout) {
      aboutShow = <About />
    } else if (this.state.mountWall) {
      wallShow = <Wall userInfo={ (this.state.currentUser !== '') ? this.state.currentUser : 'Not-loggedin-Person' } />
    }

    return (
      <div className="header-container">
        <nav>
        <Segment inverted>
            <Header as='h1' className='header-logo'>ChessEXP</Header>

          <Button inverted color='teal' onClick={ this.onShowWall.bind(this) }>Wall</Button>
          <Button inverted color='olive' onClick={ this.onShowEvent.bind(this) }>Events</Button>
          <Button inverted color='blue' onClick={ this.onShowAbout.bind(this) }>About</Button>

          <Image className='app-logo' src='./img/knight.png'></Image>

          { userShow }

            <span className='float-right'>
              {this.state.btn ? <GoogleLogin
                className='ui red basic button'
                clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
                buttonText={this.state.logoutText}

                onSuccess={ this.onResponseOauth.bind(this) }
                onFailure={ this.onResponseOauth.bind(this) }
              /> : null}
            </span>

        </Segment>

        </nav>
        <div className="float-left">
          { eventShow }
          { wallShow }
          { aboutShow }
        </div>
      </div>
    );
  }
}
