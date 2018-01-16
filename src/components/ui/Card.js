import React, { Component } from 'react';
import './Card.css';

class Card extends Component {
  render() {
    return (
      <section className='Card'>
        {this.props.children}
      </section>
    );
  }
}

export default Card;