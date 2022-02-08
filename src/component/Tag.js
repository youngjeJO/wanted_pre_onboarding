import React, { useState } from 'react';
import './Tag.css';

const Tag = (props) => {
  const [inputVal, setInputVal] = useState('');
  const [inputList, setInputList] = useState([]);
  const onChange = (event) => {
    setInputVal(event.target.value);
    console.log(inputList);
  };
  const onsubmit = (event) => {
    event.preventDefault();
    if (inputVal === '') {
      return;
    }
    setInputVal('');
    setInputList((currentArray) => [...currentArray, inputVal]);
  };
  const deleteBtn = (event) => {
    console.log(event.target.parentNode.id);
    let listId = event.target.parentNode.id;
    inputList.splice(listId, 1);
    const list = [...inputList];
    setInputList(list);
  };

  const pushTag = inputList.map((item, index) => (
    <span className='tag' id={index}>
      {item}
      <span className='delete_btn' onClick={deleteBtn}>
        x
      </span>
    </span>
  ));

  // const keyUpEvent = (event) => {
  //   if (window.event.keyCode == 13) {
  //     setInputList((currentArray) => [inputVal, ...currentArray]);
  //     console.log('hi');
  //     // 엔터키가 눌렸을 때
  //   }
  // };

  return (
    <div className='Box'>
      <span className='title'>Tag</span>
      <form onSubmit={onsubmit} className='tagBox'>
        {pushTag}
        <input
          onChange={onChange}
          // onKeyUp={keyUpEvent}
          value={inputVal}
          placeholder='Press enter to add tags'
          type='text'
          className='inputBox'
        />
      </form>
    </div>
  );
};

export default Tag;
