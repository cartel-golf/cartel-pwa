import React, { Component } from 'react';
import './AppContent.css';

class AppContent extends Component {
  render() {
    return (
      <main className='AppContent flex-col flex-ctr-ctr content'>
        {this.props.children}
      </main>
    );
  }
}

export default AppContent;