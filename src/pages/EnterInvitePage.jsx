import React, { Component } from 'react';
import { connect } from 'react-redux';
import { newUserTokenSet } from '../actions/actionCreators';
import './EnterInvitePage.css';
import LogoSlogan from '../components/LogoSlogan';
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
    .then((user) => {
      this.props.newUserTokenSet(user);
    })
    .catch(err => {
      this.setState({ message: err.message});
    });
  }

  render() {
    return (
      <div className='EnterInvitePage'>
        <LogoSlogan />
        <form onSubmit={this.handleSubmit} className='ui form' style={{marginTop: 30}}>
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
  (state) => ({ }),
  // map display to props
  {
    newUserTokenSet
  }
)(EnterInvitePage);