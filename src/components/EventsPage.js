import React, { Component } from 'react';

import { Event } from './Event';

const testEvent = <Event title="Grand Prix Open"
                           host="Wesley So"
                           image="https://mir-s3-cdn-cf.behance.net/project_modules/disp/db147622772589.56364dd2b03f1.jpg"
                           description="Winner takes all."
                           rsvpList={ ['Sarah', 'John', 'Michelle', 'Mike'] }
                           />


export class EventsPage extends Component {
  constructor(props) {
    super();

    this.state = {
      eventList: [testEvent],
    }
  }

  render(){
    let List = this.state.eventList.map((event, i) => {
        return(<li key={i}>{event}</li> );
      });

      if (List.length === 0 || List.length === undefined) {
        List = ( 'No Chess Events in the Area' );
      }

  return(
      <div className="events-page-container">
        <ul>
          { List }
        </ul>
      </div>
    );
  }
}
