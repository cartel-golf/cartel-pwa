import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import EnterInvitePage from './pages/EnterInvitePage';
import AppBar from 'material-ui/AppBar';
import BottomNavBar from './components/nav/BottomNavBar';

class App extends Component {
  constructor() {
    super();
    this.muiTheme = getMuiTheme({
      palette: {
        primary1Color: '#066158',
        primary2Color: '#1A786F',
        primary3Color: '#823B09',
        accent1Color: '#D1C488',
        accent2Color: '#EDE1A8',
        accent3Color: '#823B09',
        pickerHeaderColor: '#D1C488',
      }
      // palette: {
      //   primary1Color: '#b1ddd9',
      //   primary2Color: '#81aba8',
      //   primary3Color: '#e4ffff',
      //   accent1Color: '#bcaaa4',
      //   accent2Color: '#8c7b75',
      //   accent3Color: '#efdcd5',
      //   pickerHeaderColor: '#bcaaa4',
      // }
    });
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={this.muiTheme}>
        {
          this.props.user ?
            <Route path='/'>
                <AppBar title="Cartel" />
                <BottomNavBar />
            </Route>
          :
            <EnterInvitePage />
        }
      </MuiThemeProvider>
    );
  }
}

export default connect(
  (state) => ({user: state.userState.user})
  // map dispatch to props here
)(App);
