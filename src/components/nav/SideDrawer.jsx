import React from 'react';
import './SideDrawer.css';
import { connect } from 'react-redux';
import { toggleDrawer } from '../../redux/actions/actionCreatorsSystem';
import Drawer from 'material-ui/Drawer';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider';
import userService from '../../utils/userService';
import Logo from '../../images/logo-2.png';

// TODO: for dev only - remove
import InboxIcon from 'material-ui-icons/Inbox';

const SideDrawer = ({ drawerOpen, toggleDrawer, cartel }) => {
  return (
    <Drawer open={drawerOpen} onClose={() => toggleDrawer(false)}>
      <div className='SideDrawer' role="button" onClick={() => toggleDrawer(false)}>
        <div className='SideDrawer-UserHeader'>
          <div className='flex-row flex-ctr-ctr'>
            <img src={Logo} alt='' />
          </div>
          <div className='flex-row flex-ctr-ctr'>
            <Typography variant="title" style={{color: 'white'}}>
              {cartel.name}
            </Typography>
          </div>
        </div>
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
    </Drawer>
  );
};

export default connect(
  (state) => ({
    drawerOpen: state.systemState.sideDrawerOpen,
    cartel: state.cartelState
  }),
  {
    toggleDrawer
  }
)(SideDrawer);