import React, { Component } from 'react';

// import { RSVPBar } from './RSVPBar';

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
      eventIndex: props.key
    }
    console.log(this.state);
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
        <img src={ this.state.eventImage } alt={ this.state.eventDescription } height='300px' width='200px'/>
        <h1>{ this.state.eventTitle }</h1>
        <small>{ this.state.eventLocat }</small>
        <p className="event-host">-{ this.state.eventHost }</p>
        <p className="event-description">'{this.state.eventDesc }'</p>
        <div className="goal-bar">
          <button onClick={ this.onRSVP.bind(this) }>RSVP</button>
          <ul>
            { this.state.eventRSVP.map((person, i) => {
              return (<li key={i + 50}>{person}</li>);
            }) }
          </ul>
        </div>
        {/* <RSVPBar /> */}
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
