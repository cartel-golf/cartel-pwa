import React, { Component } from 'react';
import './AppContent.css';

class AppContent extends Component {
  render() {
    return (
      <main className='AppContent content'>
        {this.props.children}
      </main>
    );
  }
}

export default AppContent;