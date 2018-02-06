import React, { Component } from 'react';
import { connect } from 'react-redux';
import './MainPage.css';
import AppContent from '../components/ui/AppContent';
import TopAppBar from '../components/nav/TopAppBar';
import BottomNavBar from '../components/nav/BottomNavBar';

class MainPage extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {

    // setTimeout(()=>{this.setState({loading: false})}, 3000);
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
    
  }
)(MainPage);