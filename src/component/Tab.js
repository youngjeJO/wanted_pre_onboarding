import React from 'react';
import './css/Tab.css';

const Tab = (props) => {
  const tabClick = (event) => {
    let content_arr = document.querySelectorAll('.contents');
    let tapName_arr = document.querySelectorAll('.tabName');
    let targeting = event.target.nextSibling;

    content_arr.forEach((item) => {
      item.classList.remove('show');
    });
    tapName_arr.forEach((item) => {
      item.classList.remove('bgChange');
    });
    event.target.classList.add('bgChange');
    targeting.classList.add('show');
  };

  return (
    <div className='Box'>
      <span className='title'>Tap</span>
      <div className='tabBox'>
        <ul className='tabList'>
          <li>
            <span className='tabName bgChange' onClick={tabClick}>
              tab1
            </span>
            <div className='contents show'>
              <span>Tab menu ONE</span>
            </div>
          </li>
          <li>
            <span className='tabName' onClick={tabClick}>
              tab2
            </span>
            <div className='contents'>
              <span>Tab menu TWO</span>
            </div>
          </li>
          <li>
            <span className='tabName' onClick={tabClick}>
              tab3
            </span>
            <div className='contents'>
              <span>Tab menu THREE</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Tab;
