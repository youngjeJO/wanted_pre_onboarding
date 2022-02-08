import React from 'react';
import './modal.css';

const modal = (props) => {
  const closeBtn = (evnet) => {
    let targeting = evnet.target.parentNode.parentNode.classList;
    targeting.contains('show')
      ? targeting.remove('show')
      : targeting.add('hide');
    console.log(evnet.target.parentNode.parentNode.classList);
  };

  const openBtn = (event) => {
    let targeting = event.target.nextSibling.classList;
    targeting.contains('hide')
      ? targeting.remove('hide')
      : targeting.add('show');

    console.log('h2');
  };

  return (
    <div className='modalBox'>
      <span className='title'>modal</span>
      <div className='modalBtn' onClick={openBtn}>
        Open Modal
      </div>
      <div className='modalBg'>
        <div className='modalMsg'>
          <span className='closeModal' onClick={closeBtn}>
            X
          </span>
          HELLO CODESTATES
        </div>
      </div>
    </div>
  );
};

export default modal;
