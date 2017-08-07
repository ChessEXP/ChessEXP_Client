import React, { Component } from 'react';
import { Button, Segment } from 'semantic-ui-react';

export class SocialMedia extends Component {
  constructor(props) {
    super();

    this.state = {

    }
  }

  render() {
    return(
      <div className="social-media-container">
        <div>
          <Segment inverted>
            <Button circular color='grey' icon='github' />
            <Button circular color='linkedin' icon='linkedin' />
            <Button circular color='google plus' icon='google plus' />
          </Segment>
        </div>
      </div>
    );
  }
}
