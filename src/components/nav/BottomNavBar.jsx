import React, { Component } from 'react';
import './BottomNavBar.css';
import { connect } from 'react-redux';


class BottomNavBar extends Component {
  constructor() {
    super();
    this.state = {
      selectedIndex: 0
    }
  }
  
  // TODO: remove - temp code
  select = (index) => this.setState({ selectedIndex: index });

  render() {
    if (this.props.curRoute.hideBottomNavBar) return null;
    return (
      <nav className='BottomNavBar footer' data-selected-index={this.state.selectedIndex}>
        <div
          label="Favorites"
          onClick={() => this.select(0)}
        />
        <div
          label="Nearby"
          onClick={() => this.select(1)}
        />
      </nav>
    );
  }
}

export default connect(
  // map state to props
  (state) => ({
    curRoute: state.routerState.curRoute,
    user: state.userState.user
  }),
  // map dispatch to props
  {
  }
)(BottomNavBar);
