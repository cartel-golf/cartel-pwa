import React, { Component } from 'react';
import { connect } from 'react-redux';
import { newUserTokenSet } from '../actions/actionCreators';
import './EnterInvitePage.css';
import Card from '../components/ui/Card';
import CardTitle from '../components/ui/CardTitle';
import CardButtonContainer from '../components/ui/CardButtonContainer';
import LogoSlogan from '../components/ui/LogoSlogan';
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
      <main className='EnterInvitePage page-wrapper justify-content-center'>
        <LogoSlogan />
        <Card>
          <CardTitle className='CardTitle'>
            <p>Welcome to Cartel Golf</p>
            <p className='sub-title'>Please submit your personal invite code you obtained from  an existing member of the cartel you wish to join</p>
          </CardTitle>
          <input id='inp' type='text' autoComplete='off'
            placeholder='Enter Your Invite Code'
            value={this.state.enteredCode} onChange={this.handleChange}
          />
          <h5>{this.state.message || ' '}</h5>
          <CardButtonContainer>
            <button onClick={this.handleSubmit}>SUBMIT INVITE</button>
          </CardButtonContainer>
        </Card>
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