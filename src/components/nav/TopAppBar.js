import React, { Component } from 'react';
import './TopAppBar.css';

export default class TopAppBar extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <nav className='TopAppBar'>
        <div className='TopAppBar-title'>Title</div>
      </nav>
    );
  }
}
