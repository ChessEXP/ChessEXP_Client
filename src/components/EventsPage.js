import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react'; // Image
import $ from 'jquery';

import { Event } from './Event';

import { getEvents } from '../axios/request.js';


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
      this.setState({
        eventList: results.data
      });
    })
  }

  render(){

    let List = this.state.eventList.map((event, i) => {

        return(
          <div className="item-container">
            <Grid.Column className='flex-align'>
              <li key={i}><Event
                day={['Weds', 'Thurs', 'Fri', 'Sat', 'Sun', 'Mon', 'Tues'][i]}
                rsvpList={event.attendees}
                commentList={event.chatLog}
                host={event.host}
                title={event.title}
                description={event.description}
                image={event.image}
                location={event.location}
              /></li>
            </Grid.Column>

            <hr className='event-divider'/>
          </div>
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
