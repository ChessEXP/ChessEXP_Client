import React, { Component } from 'react';
import { Grid, Image } from 'semantic-ui-react'
import $ from 'jquery';

import { Event } from './Event';

import { getEvents } from '../axios/request.js';

const testEvent = <Event title="Grand Prix Open"
                           host="Wesley So"
                           image="https://mir-s3-cdn-cf.behance.net/project_modules/disp/db147622772589.56364dd2b03f1.jpg"
                           description="Winner takes all."
                           rsvpList={ ['Sarah', 'John', 'Michelle', 'Mike'] }
                           />

// const testEventFormat = <Event rsvpList={this.state.eventList.attendees}
//                            commentList={this.state.eventList.chatLog}
//                            host={this.state.eventList[i].host}
//                            title={this.state.eventList[i].title}
//                            description={this.state.eventList[i].description}
//                            image={this.state.eventList[i].location}
//                            />


export class EventsPage extends Component {
  constructor(props) {
    super();

    this.state = {
      eventList: []
    }
  }

  componentDidMount() {
    $('.board-hidden').css('display', 'none');

    getEvents().then((results) => {
      console.log(results);
      this.setState({
        eventList: results.data
      });
    })
  }

  render(){

    let List = this.state.eventList.map((event, i) => {

        return(
           <Grid.Column className='flex-align'>
             <li key={i}><Event  rsvpList={event.attendees}
               commentList={event.chatLog}
               host={event.host}
               title={event.title}
               description={event.description}
               image={event.image}
               location={event.location}
             /></li>
           </Grid.Column>
        );
      });

      if (List.length === 0 || List.length === undefined) {
        List = ( 'No Chess Events in the Area' );
      }

    return (
      <div className="events-page-container">
        <ul>
          <Grid columns={3} divided>
            <Grid.Row className='event-grid-row'>
              {List}
            </Grid.Row>
          </Grid>
        </ul>
      </div>
    );
  }
}
