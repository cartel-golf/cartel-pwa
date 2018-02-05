import React from 'react';
import './MainPage.css';
import AppContent from '../components/ui/AppContent';
import TopAppBar from '../components/nav/TopAppBar';
import BottomNavBar from '../components/nav/BottomNavBar';

export default (props) => {
  return (
    <main className='MainPage'>
      <TopAppBar/>
      <AppContent>
        <h1>Main Page</h1>
      </AppContent>
      <BottomNavBar/>
    </main>
  );
};