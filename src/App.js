import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import EnterInvitePage from './pages/EnterInvitePage';
import MainPage from './pages/MainPage';

class App extends Component {

  render() {
    return (
      this.props.user ?
        <Route path='/'>
          <MainPage />
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
