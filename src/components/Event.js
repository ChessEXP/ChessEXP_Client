import React, {Component} from 'react';

// import { RSVPBar } from './RSVPBar';

import {Button, Segment, Label, List} from 'semantic-ui-react'; // Image

export class Event extends Component {
  constructor(props) {
    super();

    this.state = {
      eventDay: props.day,
      eventTitle: props.title,
      eventLocat: props.location,
      eventHost: props.host,
      eventImage: props.image,
      eventDesc: props.description,
      eventRSVP: props.rsvpList,
      eventChat: props.commentList,
      toggleDetails: false,
      errorMessage: '',
      currentUser: 'Drew'
    }
  }

  toggleShow() {
    let toggle = !this.state.toggleDetails
    this.setState({toggleDetails: toggle});
  }

  onRSVP() {
    let subState = [(this.state.currentUser || 'currentUser')];
    if (this.state.eventRSVP[0] !== 'Drew' || this.state.eventRSVP[0] !== this.state.currentUser) {
      this.state.eventRSVP.map((User) => {
        subState.push(User);

        return User;
      });

      this.setState({eventRSVP: subState});

    } else {
      this.setState({errorMessage: 'One RSVP per Event'});
    }
  }

  render() {
    return (
      <div className="wrapper">
        <div className="event-contaner">

          <h1 className="event-title">{this.state.eventTitle}</h1>

          <img className='event-image' onClick={this.toggleShow.bind(this)} src={this.state.eventImage} alt={this.state.eventDescription}/> {/* </Reveal.Content>
          </Reveal> */}
          {(this.state.toggleDetails)
            ? (
              <div className="adjacent">
                <small>{this.state.eventLocat}</small>

                <p className="event-host">-{this.state.eventHost}</p>
                <p className="event-description">'{this.state.eventDesc}'</p>
                <div className="goal-bar">
                  <Segment className="segment-rsvp" inverted raised>
                    <Label as='a' color='red' ribbon>{this.state.eventDay}</Label>
                    <Button size='huge' onClick={this.onRSVP.bind(this)}>RSVP</Button>
                    <small className="rsvp-error">{this.state.errorMessage}</small>
                    <ul>

                      {this.state.eventRSVP.map((person, i) => {
                        return (
                          <List.Item key={i + 50}>
                            {person}
                          </List.Item>
                        );

                      })}
                    </ul>
                  </Segment>
                </div>
              </div>
            ) : ''}
          </div>
      </div>
    );
  }
}

// class RSVPBar extends Component {
//
//   render() {
//     return(
//       <div className="rsvp-bar-container">
//         <p>Hello from the RSVPBar!</p>
//       </div>
//     );
//   }
// }
