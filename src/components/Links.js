import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';

import { About } from './About';
import { Explorer } from './Explorer';
import { EventsPage } from './EventsPage';
import { Wall } from './Wall';

import { Button, Image, Segment, Header, Label } from 'semantic-ui-react'


export class Links extends Component {
  constructor(props) {
    super();

    this.state = {
      mountBoard: true,
      mountWall: false,
      mountEvent: false,
      mountAbout: false,
      currentUser: '',
      logoutText: 'Login',
      btn: true
    }

  }

  onResponseOauth(response) {
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
      mountAbout: true,
      mountBoard: false
    });

  }

  onShowEvent() {

    this.setState({
      mountWall: false,
      mountEvent: true,
      mountAbout: false,
      mountBoard: false
    });

  }

  onShowWall() {

    this.setState({
      mountWall: true,
      mountAbout: false,
      mountEvent: false,
      mountBoard: false
    });
  }

  onShowExplorer() {

    this.setState({
      mountWall: false,
      mountAbout: false,
      mountEvent: false,
      mountBoard: true
    });
  }

  render() {
    let boardShow = '';
    let userShow = '';
    let eventShow = '';
    let wallShow = '';
    let aboutShow = '';

    if(this.state.currentUser !== '') {
      userShow = (
        <Segment className='render-current-user'>
                <Image src={this.state.currentUser.imageUrl} alt="Avatar" bordered/>
                <i className="israel flag"></i> <br/>
                <Label as='a' color='orange' image>
                  <Label.Detail>{this.state.currentUser.email}</Label.Detail>
                </Label>
          </Segment>

      );
    }

    if (this.state.mountEvent) {
      eventShow = <EventsPage />
    } else if (this.state.mountAbout) {
      aboutShow = <About />
    } else if (this.state.mountWall) {
      wallShow = <Wall userInfo={ (this.state.currentUser !== '') ? this.state.currentUser : 'Not-loggedin-Person' } />
    } else if (this.state.mountBoard) {
      boardShow = <Explorer />
    }

    return (
      <div className="header-container">
        <nav>
        <Segment inverted>
            <Header as='h1' className='header-logo'>ChessEXP</Header>

          <Button inverted color='teal' onClick={ this.onShowWall.bind(this) }>Wall</Button>
          <Button inverted color='olive' onClick={ this.onShowEvent.bind(this) }>Events</Button>
          <Button inverted color='orange' onClick={ this.onShowExplorer.bind(this) }>Explorer</Button>
          <Button inverted color='blue' onClick={ this.onShowAbout.bind(this) }>About</Button>

          { userShow }

            <span className='float-right'>
              {this.state.btn ? <GoogleLogin
                className='ui red basic button'
                clientId='1037057866513-iu8ac00a7ke8krdohmnv92t2o8rbdkhf.apps.googleusercontent.com'
                buttonText={this.state.logoutText}

                onSuccess={ this.onResponseOauth.bind(this) }
                onFailure={ this.onResponseOauth.bind(this) }
              /> : null}
            </span>

        </Segment>
        </nav>

        <Image className='app-logo-knight-left' src='./img/applogo.png'></Image>
        <Image className='app-logo-knight-right' src='./img/applogo2.png'></Image>

        <div className="float-left">
          { eventShow }
          { wallShow }
          { aboutShow }
          { boardShow }
        </div>
      </div>
    );
  }
}
