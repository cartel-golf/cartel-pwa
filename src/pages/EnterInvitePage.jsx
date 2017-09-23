import React, { Component } from 'react';
import { Header, Icon, Form, Input } from 'semantic-ui-react';
import './EnterInvitePage.css';
import userService from '../utils/userService';

export default class EnterInvitePage extends Component {

  state = {
    message: ' '
  }

  handleSubmit = (e, data) => {
    console.log(e.target);
  }

  render() {
    return (
      <div className='EnterInvitePage'>
        <Header as='h1' icon textAlign='center'>
          <Header.Content>
            Cartel Golf
            <Icon name='users' />
          </Header.Content>
        </Header>
        <Form onSubmit={this.handleSubmit} style={{marginLeft: -40}}>
          <Input className='EnterInvitePage-input' placeholder='Enter Your Invite Code'
            action={{icon: 'check'}}
          />
        </Form>
      </div>
    );
  }
}