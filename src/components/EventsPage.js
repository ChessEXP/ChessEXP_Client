import React, { Component } from 'react';
import { Grid, Image } from 'semantic-ui-react'

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
    getEvents().then((results) => {
      console.log(results);
      this.setState({
        eventList: results.data
      });
    })
  }

  render(){
    let List = this.state.eventList.map((event, i) => {
        return(<li key={i}><Event  rsvpList={this.state.eventList[i].attendees}
                                   commentList={this.state.eventList[i].chatLog}
                                   host={this.state.eventList[i].host}
                                   title={this.state.eventList[i].title}
                                   description={this.state.eventList[i].description}
                                   image={this.state.eventList[i].image}
                                   location={this.state.eventList[i].location}
                                   /></li> );
      });

      if (List.length === 0 || List.length === undefined) {
        List = ( 'No Chess Events in the Area' );
      }

  return(
      <div className="events-page-container">
        {/* <Grid columns='three' divided>
          <Grid.Row>
            <Grid.Column>
              <Image src='' />
            </Grid.Column>
            <Grid.Column>
              <Image src='' />
            </Grid.Column>
            <Grid.Column>
              <Image src='' />
            </Grid.Column>
          </Grid.Row>
        </Grid> */}
        <ul>
          { List }
        </ul>
      </div>
    );
  }
}
