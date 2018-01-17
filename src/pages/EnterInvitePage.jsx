import React, { Component } from 'react';
import { connect } from 'react-redux';
import { newUserTokenSet } from '../actions/actionCreators';
import './EnterInvitePage.css';
import Card from '../components/ui/Card';
import CardTitle from '../components/ui/CardTitle';
import CardButtonContainer from '../components/ui/CardButtonContainer';
import userService from '../utils/userService';

class EnterInvitePage extends Component {
  state = {
    enteredCode: '',
    message: ''
  }

  handleChange = (e) => {
    this.setState({
      enteredCode: e.target.value,
      message: ''
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
      <main className='EnterInvitePage'>
        <img src={require('../images/logo-2.png')} alt='' />
        {/* <div id='EnterInvitePage-card'> */}
          <Card>
            <CardTitle className='CardTitle'>
              <p>Welcome to Cartel Golf</p>
              <p className='sub-title'>Submit the invite code you obtained from an existing member of the cartel you wish to join:</p>
            </CardTitle>
            <input id='inp' type='text' autoComplete='off'
              placeholder='Enter Your Invite Code'
              value={this.state.enteredCode} onChange={this.handleChange}
            />
            <p className='helper error-text'>{this.state.message || ' '}</p>
            <CardButtonContainer>
              <button onClick={this.handleSubmit}>SUBMIT INVITE</button>
            </CardButtonContainer>
          </Card>
        {/* </div> */}
      </main>
    );
  }
}

export default connect(
  // map state to props
  null,
  // map dispatch to props
  {
    newUserTokenSet
  }
)(EnterInvitePage);