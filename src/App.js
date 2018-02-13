import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import EnterInvitePage from './pages/EnterInvitePage';
import MainPage from './pages/MainPage';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#e05383',
      main: '#aa1a57',
      dark: '#911b4b',
      contrastText: '#fff',
    },
    secondary: {
      light: '#4c8c4a',
      main: '#1b5e20',
      dark: '#003300',
      contrastText: '#fff',
    },
  },
});

class App extends Component {

  render() {
    return (
      this.props.user ?
        <Route path='/'>
          <MuiThemeProvider theme={theme}>
            <MainPage/>
          </MuiThemeProvider>
        </Route>
      :
        <EnterInvitePage/>
    );
  }
}

export default connect(
  (state) => ({user: state.userState.user})
  // map dispatch to props here
)(App);
