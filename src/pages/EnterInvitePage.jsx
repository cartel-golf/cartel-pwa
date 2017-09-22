import React, { Component } from 'react';
import { Header, Icon, Form, Input } from 'semantic-ui-react';
import './EnterInvitePage.css';

export default class EnterInvitePage extends Component {

  state = {}

  render() {
    return (
      <div className='EnterInvitePage'>
        <Header as='h1' icon textAlign='center'>
          <Header.Content>
            Cartel<br/>
            <Icon name='users' circular />
            Golf
          </Header.Content>
          
        </Header>
        <Form>
          <Input className='EnterInvitePage-input' size='massive' placeholder='Enter Your Invite Code' />
        </Form>
      </div>
    );
  }
}