import React, { useState } from 'react';
import './css/Toggle.css';

const Toggle = (props) => {
  const [onOff, setOnOff] = useState('off');
  const toggleEvent = (event) => {
    event.target.classList.toggle('btnMove');
    event.target.previousSibling.classList.toggle('bgMove');
    onOff === 'off' ? setOnOff('on') : setOnOff('off');
  };

  return (
    <div className='Box'>
      <span className='title'>toggle</span>
      <div className='toggleBox'>
        <figure className='bgImg'></figure>
        <button className='toggleBtn' onClick={toggleEvent}></button>
      </div>
      toggle swich {onOff}
    </div>
  );
};

export default Toggle;
