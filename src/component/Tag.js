import React, { useState } from 'react';
import './css/Tag.css';

const Tag = (props) => {
  const [inputVal, setInputVal] = useState('');
  const [inputList, setInputList] = useState(['wanted', 'codestates']);

  //inputVal에 event.value를 넣어주는 함수
  const onChange = (event) => {
    setInputVal(event.target.value);
  };

  //inputVal 배열로 만들어주는 함수
  const onSubmit = (event) => {
    event.preventDefault();
    if (!inputVal.trim()) {
      return;
    }
    setInputVal('');
    setInputList((currentArray) => [...currentArray, inputVal]);
  };

  //delete Btn
  const deleteBtn = (event) => {
    console.log(event.target.parentNode.id);
    let listId = event.target.parentNode.id;
    inputList.splice(listId, 1);
    const list = [...inputList];
    setInputList(list);
  };

  // tag 추가 함수
  const pushTag = inputList.map((item, index) => (
    <span className='tag' id={index}>
      {item}
      <span className='delete_btn' onClick={deleteBtn}>
        X
      </span>
    </span>
  ));

  return (
    <div className='Box'>
      <span className='title'>Tag</span>
      <form onSubmit={onSubmit} className='tagBox'>
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
