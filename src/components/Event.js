import React, { Component } from 'react';

import { RSVPBar } from './RSVPBar';

export class Event extends Component {
  constructor(props) {
    super();
    console.log(props);

    this.state = {
      eventTitle: props.title,
      eventHost: props.host,
      eventImage: props.image,
      eventDescription: props.description,
      eventRSVPList: props.rsvpList,
      eventIndex: props.key
    }
  }

  onRSVP(){
    let subState = ['currentUser'];
    this.state.eventRSVPList.map((User) => {
        subState.push(User);
        return User;
    });

    this.setState({ eventRSVPList: subState });
  }

  render() {
    return (

      <div className="event-contaner">
        <img src={ this.state.eventImage } alt={ this.state.eventDescription }/>
        <h1>{ this.state.eventTitle }</h1>
        <p className="event-host">{ this.state.eventHost }</p>
        <p className="event-description">{this.state.eventDescription }</p>
        <div className="goal-bar">
          <button onClick={ this.onRSVP.bind(this) }>RSVP</button>
          <ul>
            { this.state.eventRSVPList.map((person, i) => {
              return (<li key={i + 50}>{person}</li>);
            }) }
          </ul>
        </div>
        <RSVPBar />
      </div>

    );
  }
}
