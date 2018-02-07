import React, { Component } from 'react';
import { connect } from 'react-redux';
import './MainPage.css';
import { registerWithServer } from '../redux/actions/actionCreatorsSystem';
import AppContent from '../components/ui/AppContent';
import DisconnectedMessage from '../components/ui/DisconnectedMessage';
import TopAppBar from '../components/nav/TopAppBar';
import BottomNavBar from '../components/nav/BottomNavBar';

class MainPage extends Component {
  componentDidMount() {
    setTimeout(() => {
      this.props.registerWithServer();
    }, 100);
  }

  render() {
    let screen;
    if (this.props.loadingCount > 0) {
      screen = <h1>Loading Icon</h1>;
    } else if (this.props.curRound) {
      screen = <h1>Round in Progress Page</h1>;
    } else {
      screen = <h1>All Rounds Page</h1>;
    }
    return (
      <main className='MainPage'>
        <TopAppBar/>
        { !this.props.systemState.connected && <DisconnectedMessage/> }
        <AppContent>
          { screen }
        </AppContent>
        <BottomNavBar/>
      </main>
    );
  }
};

export default connect(
  // map state to props
  (state) => ({
    systemState: state.systemState,
    user: state.userState.user
  }),
  // map dispatch to props
  {
    registerWithServer
  }
)(MainPage);