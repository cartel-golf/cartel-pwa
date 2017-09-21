import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';

export default class EnterInvitePage extends Component {

  state = {}

  handleItemClick = (e, props) => {
    console.log(props)
    this.setState({activeItem: props.name});
  }

  render() {
    const { activeItem } = this.state;
    return (
      <div className='Page-wrapper'>
        <Menu>
          <Menu.Item
            name='editorials'
            active={activeItem === 'editorials'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='reviews'
            active={activeItem === 'reviews'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='upcomingEvents'
            active={activeItem === 'upcomingEvents'}
            onClick={this.handleItemClick}
          />
        </Menu>
      </div>
    );
  }
}