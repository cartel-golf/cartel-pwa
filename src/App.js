import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import EnterInvitePage from './pages/EnterInvitePage';

class App extends Component {

  render() {
    return (
      this.props.user ?
        <Route path='/'>
          <div>main page</div>
        </Route>
      :
        <EnterInvitePage />
    );
  }
}

export default connect(
  (state) => ({user: state.userState.user})
  // map dispatch to props here
)(App);
