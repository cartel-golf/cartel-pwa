import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { cyan500 } from 'material-ui/styles/colors';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import DatePicker from 'material-ui/DatePicker';

class App extends Component {
  constructor() {
    super();
    this.muiTheme = getMuiTheme({
      palette: {
        textColor: cyan500,
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
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
