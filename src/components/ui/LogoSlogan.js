import React from 'react';

import './LogoSlogan.css';

export default () => {
  let style = {
    animationDelay: '2s',
    animationDuration: '20s',
    animationIterationCount: 'infinite',
    animationTimingFunction: 'ease-in-out',
    animationName: 'logo-animation'
  };
  return (
    <div className='LogoSlogan flex-col justify-content-center align-items-center'>
      <h2>✣&nbsp;&nbsp;CARTEL GOLF&nbsp;&nbsp;✣</h2>
      <img src={require('../../images/logo-2.png')} width='120' alt='' style={style} />
      <h3 style={{ marginTop: 25 }}>GOLF NOW&nbsp;&nbsp;✣&nbsp;&nbsp;DIE LATER</h3>
    </div>
)};