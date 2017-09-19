import React, { Component } from 'react';
import FontIcon from 'material-ui/FontIcon';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';
import { BottomNavigation, BottomNavigationItem } from 'material-ui/BottomNavigation';

const favoritesIcon = <FontIcon className="material-icons">favorite</FontIcon>;
const nearbyIcon = <IconLocationOn />;

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
      <BottomNavigation selectedIndex={this.state.selectedIndex}>
        <BottomNavigationItem
          label="Favorites"
          icon={favoritesIcon}
          onClick={() => this.select(0)}
        />
        <BottomNavigationItem
          label="Nearby"
          icon={nearbyIcon}
          onClick={() => this.select(1)}
        />
      </BottomNavigation>
    );
  }
}
