import React, { Component } from 'react';
import { connect } from 'react-redux';
import './MainPage.css';
import tokenService from '../utils/tokenService';
import { registerWithServer } from '../redux/actions/actionCreatorsSystem';
import Reboot from 'material-ui/Reboot';
import AppContent from '../components/ui/AppContent';
import DisconnectedMessage from '../components/ui/DisconnectedMessage';
import TopAppBar from '../components/nav/TopAppBar';
import BottomNavBar from '../components/nav/BottomNavBar';

class MainPage extends Component {

  state = {
    loading: true
  };

  // This function will be called with 'true' if user's registration on the 
  // server is successful (token is valid), otherwise 'false' results in 
  // removing token from localStorage
  registerCallback = (successful) => {
    if (!successful) {
      tokenService.removeToken();
      window.location = '/';
    } else {
      this.setState({loading: false});
    }
  } 

  componentDidMount() {
      this.props.registerWithServer(this.registerCallback);
  }

  render() {
    let screen;
    if (this.state.loading) {
      screen = <h1>Loading Icon</h1>;
    } else if (this.props.curRound) {
      screen = <h1>Round in Progress Page</h1>;
    } else {
      screen = <h1>All Rounds Page</h1>;
    }
    return (
      <React.Fragment>
        <Reboot/>
        <main className='MainPage'>
          <TopAppBar/>
          { !this.props.systemState.connected && <DisconnectedMessage/> }
          <AppContent>
            { screen }
          </AppContent>
          <BottomNavBar/>
        </main>
      </React.Fragment>
    );
  }
};

export default connect(
  // map state to props
  (state) => ({
    systemState: state.systemState,
    curRoute: state.routerState.curRoute,
    user: state.userState.user
  }),
  // map dispatch to props
  {
    registerWithServer
  }
)(MainPage);