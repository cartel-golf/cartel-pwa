import React, { Component } from 'react';
import './BottomNavBar.css';

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
