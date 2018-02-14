import React, { Component } from 'react';
import { connect } from 'react-redux';
import './MainPage.css';
import tokenService from '../utils/tokenService';
import { registerWithServer } from '../redux/actions/actionCreatorsSystem';
import Reboot from 'material-ui/Reboot';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import InboxIcon from 'material-ui-icons/Inbox';
import Divider from 'material-ui/Divider';
import Drawer from 'material-ui/Drawer';
import AppContent from '../components/ui/AppContent';
import DisconnectedMessage from '../components/ui/DisconnectedMessage';
import TopAppBar from '../components/nav/TopAppBar';
import BottomNavBar from '../components/nav/BottomNavBar';
import userService from '../utils/userService';

const sideList = (
  <div>
    <List component="nav">
      <ListItem button>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Inbox" />
      </ListItem>
      <ListItem button>
        <ListItemText primary="Drafts" />
      </ListItem>
    </List>
    <Divider />
    <List component="nav">
      <ListItem button>
        <ListItemText primary="Trash" />
      </ListItem>
      <ListItem button component="a" href="#simple-list">
        <ListItemText primary="Spam" />
      </ListItem>
    </List>
    <Divider />
    <List>
      <ListItem button>
        <ListItemText primary="Forget Me" onClick={userService.forgetMe}/>
      </ListItem>
    </List>
  </div>
);

class MainPage extends Component {

  state = {
    drawerOpen: false,
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

  toggleDrawer = (open) => {
    this.setState({
      drawerOpen: open,
    });
  };

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
          <TopAppBar toggleDrawer={this.toggleDrawer}/>
          { !this.props.systemState.connected && <DisconnectedMessage/> }
          <AppContent>
            { screen }
          </AppContent>
          <BottomNavBar/>
        </main>
        <Drawer open={this.state.drawerOpen} onClose={() => this.toggleDrawer(false)}>
          <div className='MainPage-Drawer'
            tabIndex={0}
            role="button"
            onClick={() => this.toggleDrawer(false)}
            onKeyDown={() => this.toggleDrawer(false)}
          >
            {sideList}
          </div>
        </Drawer>
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