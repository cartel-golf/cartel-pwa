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
      {/* <h1>✣&nbsp;CARTEL GOLF&nbsp;✣</h1> */}
      <img src={require('../../images/logo-2.png')} alt='' width='440' style={style} />
      {/* <h2>✣&nbsp;GOLF NOW&nbsp;✣&nbsp;DIE LATER&nbsp;;✣</h2> */}
    </div>
)};