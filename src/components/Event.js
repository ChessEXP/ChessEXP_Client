import React, {Component} from 'react';

// import { RSVPBar } from './RSVPBar';

import { Button, Segment, Label } from 'semantic-ui-react';


export class Event extends Component {
  constructor(props) {
    super();
    console.log(props);

    this.state = {
      eventTitle: props.title,
      eventLocat: props.location,
      eventHost: props.host,
      eventImage: props.image,
      eventDesc: props.description,
      eventRSVP: props.rsvpList,
      eventChat: props.commentList,
      toggleDetails: false,
      errorMessage: ''
    }
  }

  toggleShow() {
    let toggle = !this.state.toggleDetails
    this.setState({
      toggleDetails: toggle
    })

    console.log(this.state.toggleDetails)
  }

  onRSVP() {
    let subState = ['currentUser'];
    if (this.state.eventRSVP[0] !== 'currentUser'){
    this.state.eventRSVP.map((User) => {
        subState.push(User);

      return User;
    });

    this.setState({
      eventRSVP: subState
    });

  } else {
    this.setState({
      errorMessage: 'One RSVP per Event'
    });
  }
    console.log(this.state.eventRSVP);
  }

  render() {
    return (

      <div className="event-contaner">
        <h1 className="event-title">{this.state.eventTitle}</h1>
        <img onClick={this.toggleShow.bind(this)} src={this.state.eventImage} alt={this.state.eventDescription} height='300px' width='200px'/> {(this.state.toggleDetails)
          ? (
            <div className="adjacent">
              <small>{this.state.eventLocat}</small>

              <p className="event-host">-{this.state.eventHost}</p>
              <p className="event-description">'{ this.state.eventDesc }'</p>
              <div className="goal-bar">
                <Segment className="segment-rsvp" inverted raised>
                  <Label as='a' color='red' ribbon>Date</Label>
                  <Button size='huge' onClick={ this.onRSVP.bind(this) }>RSVP</Button>
                <small className="rsvp-error">{ this.state.errorMessage }</small>
                <ul>
                  {this.state.eventRSVP.map((person, i) => {
                    return (
                      <li key={i + 50}>{person}</li>
                    );
                  })}
                </ul>
                </Segment>
              </div>
            </div>
          )
        : ''
}
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
