import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import DatePicker from 'material-ui/DatePicker';
import BottomNavBar from './components/nav/BottomNavBar';


class App extends Component {
  constructor() {
    super();
    this.muiTheme = getMuiTheme({
      palette: {
        primary1Color: '#b1ddd9',
        primary2Color: '#81aba8',
        primary3Color: '#e4ffff',
        accent1Color: '#bcaaa4',
        accent2Color: '#8c7b75',
        accent3Color: '#efdcd5',
        pickerHeaderColor: '#bcaaa4',
      }
    });
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={this.muiTheme}>
        <div className="App">
          <AppBar title="Cartel" />
          <p style={{fontFamily: 'Roboto', fontWeight:'100'}} >
            This is Roboto
          </p>
          <RaisedButton label="Default" />
          <DatePicker hintText="Portrait Dialog" />
          <BottomNavBar />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
