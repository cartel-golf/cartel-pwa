import React from 'react';

export default (props) => {
  return (
    <main>
      main page frame
      <div className='ui input'><input type='text'/></div>
      <img src={require('../images/logo-1.png')} />
    </main>
  );
};