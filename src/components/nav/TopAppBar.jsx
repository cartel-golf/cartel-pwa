import React from 'react';
import { connect } from 'react-redux';
import { toggleDrawer } from '../../redux/actions/actionCreatorsSystem';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import Typography from 'material-ui/Typography';
import MoreIcon from 'material-ui-icons/MoreVert';
import { withStyles } from 'material-ui/styles';

const styles = {
  flex: { flex: 1 },
  Toolbar: {
    paddingLeft: 0,
    paddingRight: 0
  }
};

const TopAppBar = (props) => {
  let route = props.curRoute;
  let { classes } = props;
  return (
    <AppBar position="static">
      <Toolbar className={classes.Toolbar}>
        <IconButton onClick={() => props.toggleDrawer(true)} color="inherit">
          <MenuIcon />
        </IconButton>
        <Typography variant="title" color="inherit" className={classes.flex}>
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
)(withStyles(styles)(TopAppBar));
