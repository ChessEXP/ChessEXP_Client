import $ from 'jquery';
import React, {Component} from 'react';

import {SocialMedia} from './SocialMedia';

import {List} from 'semantic-ui-react';

export class About extends Component {
  constructor(props) {
    super();

    this.state = {}
  }

  componentDidMount() {
    $('.board-hidden').css('display', 'none');
  }

  render() {
    return (
      <div className="about-container">
        <SocialMedia/>
        <div className="about-react">
          <img src='./img/node.png' className="stack-format" alt="logo" />
          <img src='./img/express.png' className="stack-express" alt="logo" />
          <img src='./img/logo.svg' className="App-logo" alt="logo" />
          <img src='./img/pg.svg.png' className="stack-format" alt="logo" />
          <List className='about-list'>
            <List.Item>
              <List.Icon name='folder'/>
              <List.Content>
                <List.Header>src</List.Header>
                <List.List>
                  <List.Item>
                    <List.Icon name='folder'/>
                    <List.Content>
                      <List.Header>app</List.Header>
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Icon name='folder'/>
                    <List.Content>
                      <List.Header>themes</List.Header>
                      <List.Description>Packaged theme files</List.Description>
                      <List.List>
                        <List.Item>
                          <List.Icon name='folder'/>
                          <List.Content>
                            <List.Header>default</List.Header>
                            <List.Description>Default packaged theme</List.Description>
                          </List.Content>
                        </List.Item>
                        <List.Item>
                          <List.Icon name='folder'/>
                          <List.Content>
                            <List.Header>my_theme</List.Header>
                            <List.Description>Packaged themes are also available in this folder</List.Description>
                          </List.Content>
                        </List.Item>
                      </List.List>
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Icon name='file'/>
                    <List.Content>
                      <List.Header>theme.config</List.Header>
                      <List.Description>Config file for setting packaged themes</List.Description>
                    </List.Content>
                  </List.Item>
                </List.List>
              </List.Content>
            </List.Item>
            <List.Item>
              <List.Icon name='folder'/>
              <List.Content>
                <List.Header>dist</List.Header>
                <List.Description>Compiled CSS and JS files</List.Description>
                <List.List>
                  <List.Item>
                    <List.Icon name='folder'/>
                    <List.Content>
                      <List.Header>components</List.Header>
                      <List.Description>Individual component CSS and JS</List.Description>
                    </List.Content>
                  </List.Item>
                </List.List>
              </List.Content>
            </List.Item>
            <List.Item>
              <List.Icon name='file'/>
              <List.Content>
                <List.Header>package.json</List.Header>
                <List.Description></List.Description>
              </List.Content>
            </List.Item>
          </List>
        </div>
      </div>
    );
  }
}
