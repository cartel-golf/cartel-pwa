import React from 'react';
import { connect } from 'react-redux';
import { toggleDrawer } from '../../redux/actions/actionCreatorsSystem';
import Drawer from 'material-ui/Drawer';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import userService from '../../utils/userService';

// TODO: for dev only - remove
import InboxIcon from 'material-ui-icons/Inbox';

const SideDrawer = ({ drawerOpen, toggleDrawer }) => {
  return (
    <Drawer open={drawerOpen} onClose={() => toggleDrawer(false)}>
      <div className='MainPage-Drawer'
        tabIndex={0}
        role="button"
        onClick={() => toggleDrawer(false)}
        onKeyDown={() => toggleDrawer(false)}
      >
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
              <ListItemText primary="Forget Me" onClick={userService.forgetMe} />
            </ListItem>
          </List>
        </div>
      </div>
    </Drawer>
  );
};

export default connect(
  (state) => ({
    drawerOpen: state.systemState.sideDrawerOpen
  }),
  {
    toggleDrawer
  }
)(SideDrawer);