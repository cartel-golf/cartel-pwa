import React from 'react';
import { connect } from 'react-redux';
import './TopAppBar.css';
import { toggleDrawer } from '../../redux/actions/actionCreatorsSystem';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import Typography from 'material-ui/Typography';
import MoreIcon from 'material-ui-icons/MoreVert';

const TopAppBar = (props) => {
  let route = props.curRoute;
  return (
    <AppBar position="static">
      <Toolbar id='TopAppBar-Toolbar'>
        <IconButton onClick={() => props.toggleDrawer(true)} color="inherit">
          <MenuIcon />
        </IconButton>
        <Typography id='TopAppBar-title' variant="title" color="inherit">
          {route.title}
        </Typography>
        {route.moreMenu && <IconButton color='inherit'><MoreIcon/></IconButton>}
      </Toolbar>
    </AppBar>
  );
}

export default connect(
  // map state to props
  (state) => ({
    curRoute: state.routerState.curRoute,
  }),
  // map dispatch to props
  {
    toggleDrawer
  }
)(TopAppBar);
