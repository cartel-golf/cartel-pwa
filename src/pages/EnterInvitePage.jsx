import React, { Component } from 'react';
import './EnterInvitePage.css';
import userService from '../utils/userService';

export default class EnterInvitePage extends Component {
  state = {
    enteredCode: '',
    message: null
  }

  handleChange = (e) => {
    this.setState({enteredCode: e.target.value});
  }

  handleSubmit = (e) => {
    e.preventDefault();
    userService.submitInvite(this.state.enteredCode)
    .then(() => {
      // need to redirect
      console.log('DEBUG: successful invite code entered!');
    })
    .catch(err => {
      this.setState({ message: err.message});
    });
  }

  render() {
    return (
      <div className='EnterInvitePage'>
        <h2 className='ui header'>
          Cartel Golf
        </h2>
        <form onSubmit={this.handleSubmit} className='ui form'>
          <div className='ui action input'>
            <input className='EnterInvitePage-input' type='text' placeholder='Enter Your Invite Code'
              value={this.enteredCode}
              onChange={this.handleChange}
            />
            <button className="ui icon button">
              <i className="sign in icon"></i>
            </button>
          </div>
        </form>
        { this.state.message && <div className="ui fluid error message">
          {this.state.message}
        </div>
        }
      </div>
    );
  }
}