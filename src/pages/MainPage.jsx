import React, { Fragment } from 'react';

import './MainPage.css';
import BottomNavBar from '../components/nav/BottomNavBar';
import TopAppBar from '../components/nav/TopAppBar';

export default (props) => {
  return (
    <Fragment>
      <TopAppBar/>
      <h1>Main Page</h1>
      <BottomNavBar/>
    </Fragment>
  );
};