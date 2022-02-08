import React, { useRef, useState } from 'react';
import './Toggle.css';
const Toggle = (props) => {
  const [onOff, setOnOff] = useState('off');
  const toggleEvent = (event) => {
    // btn.current.style.transition = '2s';
    event.target.classList.toggle('btnMove');
    console.log(event);
    event.target.previousSibling.classList.toggle('bgMove');
    onOff === 'off' ? setOnOff('on') : setOnOff('off');
  };

  return (
    <div className='btnBox'>
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
