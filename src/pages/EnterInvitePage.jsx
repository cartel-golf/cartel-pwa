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
      <div className='EnterInvitePage Page-wrapper'>
        <LogoSlogan />
        <div>
          <form onSubmit={this.handleSubmit} className='ui form Flex-col' >
            <div className='ui input'>
              <input id='inp' type='text' placeholder='Enter Your Invite Code'
                required={true}
                pattern='[0-9a-f]{24}'
                title='Enter a valid invite code'
              />
            </div>
            <button id="submit" type="submit" className="ui icon button basic">
              Submit Invite&nbsp;&nbsp;&nbsp;<i className="sign in icon"></i>
            </button>
          </form>
          <div className="ui error message" style={{visibility: this.state.message ? 'visible' : 'hidden' }} >
            {this.state.message}
          </div>
        </div>
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