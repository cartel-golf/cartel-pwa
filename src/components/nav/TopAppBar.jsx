import React, { Component } from 'react';
import { connect } from 'react-redux';
import './TopAppBar.css';

class TopAppBar extends Component {
  render() {
    let route = this.props.curRoute;
    return (
      <nav className='TopAppBar header'>
        <div className="left-side">
          <div className='TopAppBar-title'>{route.title}</div>
        </div>
        <div className='right-side'>
          {/* {put more_vert icon here if there's this.state.curRoute.moreMenu} */}
        </div>
      </nav>
    );
  }
}

export default connect(
  // map state to props
  (state) => ({
    curRoute: state.routerState.curRoute,
  }),
  // map dispatch to props
  {
  }
)(TopAppBar);
