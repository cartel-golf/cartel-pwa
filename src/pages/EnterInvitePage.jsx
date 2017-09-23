import React, { Component } from 'react';
import { connect } from 'react-redux';
import './EnterInvitePage.css';
import userService from '../utils/userService';

class EnterInvitePage extends Component {
  state = {
    enteredCode: '',
    message: null
  }

  handleChange = (e) => {
    this.setState({
      enteredCode: e.target.value,
      message: null
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    userService.submitInvite(this.state.enteredCode)
    .then(() => {
      
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
        { this.state.message && <div className="ui error message">
          {this.state.message}
        </div>
        }
      </div>
    );
  }
}

export default connect(
  // map state to props
  // map display to props
)(EnterInvitePage);