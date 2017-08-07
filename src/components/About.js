import React from 'react'
import { List } from 'semantic-ui-react'

import { SocialMedia } from './SocialMedia';


const About = () => (
  <div className="about-container">
    <SocialMedia />
    <List>
      <List.Item>
        <List.Icon name='folder' />
        <List.Content>
          <List.Header>src</List.Header>
          <List.List>
            <List.Item>
              <List.Icon name='folder' />
              <List.Content>
                <List.Header>components</List.Header>
              </List.Content>
            </List.Item>
            <List.Item>
              <List.Icon name='folder' />
              <List.Content>
                <List.Header>themes</List.Header>
                <List.Description>Packaged theme files</List.Description>
                <List.List>
                  <List.Item>
                    <List.Icon name='folder' />
                    <List.Content>
                      <List.Header>default</List.Header>
                      <List.Description>Default packaged theme</List.Description>
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Icon name='folder' />
                    <List.Content>
                      <List.Header>my_theme</List.Header>
                      <List.Description>Packaged themes are also available in this folder</List.Description>
                    </List.Content>
                  </List.Item>
                </List.List>
              </List.Content>
            </List.Item>
            <List.Item>
              <List.Icon name='file' />
              <List.Content>
                <List.Header>theme.config</List.Header>
                <List.Description>Config file for setting packaged themes</List.Description>
              </List.Content>
            </List.Item>
          </List.List>
        </List.Content>
      </List.Item>
      <List.Item>
        <List.Icon name='folder' />
        <List.Content>
          <List.Header>dist</List.Header>
          <List.Description>Compiled CSS and JS files</List.Description>
          <List.List>
            <List.Item>
              <List.Icon name='folder' />
              <List.Content>
                <List.Header>components</List.Header>
                <List.Description>Individual component CSS and JS</List.Description>
              </List.Content>
            </List.Item>
          </List.List>
        </List.Content>
      </List.Item>
      <List.Item>
        <List.Icon name='file' />
        <List.Content>
          <List.Header>package.json</List.Header>
          <List.Description></List.Description>
        </List.Content>
      </List.Item>
    </List>
  </div>
)

export default About
