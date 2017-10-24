import React from 'react';

export default () => {
  let style = {
    animationDelay: '2s',
    animationDuration: '10s',
    animationIterationCount: 'infinite',
    animationTimingFunction: 'ease-in-out',
    animationName: 'logo-animation'
  };
  return (
    <div style={{width: 215, textAlign: 'center'}}>
      <h2 className='ui header'>✣ &nbsp;CARTEL GOLF&nbsp; ✣</h2>
      <img src={require('../images/logo-2.png')} width='120' alt='' style={style} />
      <h3 className='ui header' style={{marginTop:12}}>GOLF NOW&nbsp; ✣ &nbsp;DIE LATER</h3>
    </div>
)};