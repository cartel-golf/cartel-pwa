import React, { Component } from 'react';
import './BottomNavBar.css';

// TODO: remove - temp code
import userService from '../../utils/userService';

export default class BottomNavBar extends Component {
  constructor() {
    super();
    this.state = {
      selectedIndex: 0
    }
  }

  select = (index) => this.setState({ selectedIndex: index });

  render() {
    return (
      <nav className='BottomNavBar' data-selected-index={this.state.selectedIndex}>



        <button onClick={userService.forgetMe}>FORGET ME</button>




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
