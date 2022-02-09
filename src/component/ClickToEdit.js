import React, { useState } from 'react';
import './ClickToEdit.css';

const ClickToEdit = (props) => {
  const [name, setName] = useState('조영제');
  const [age, setAge] = useState('29');
  const [myName, setMyName] = useState('조영제');
  const [myAge, setMyAge] = useState('29');
  const nameChange = (event) => {
    setName(event.target.value);
  };

  const ageChange = (event) => {
    setAge(event.target.value);
    console.log(myAge);
  };

  const blurEvent = () => {
    setMyName(name);
    setMyAge(age);
  };

  return (
    <div className='Box'>
      <span className='title'>ClickToEdit</span>
      <form className='editBox'>
        <div>
          <label>이름</label>
          <input value={name} onBlur={blurEvent} onChange={nameChange}></input>
        </div>
        <div>
          <label>나이</label>
          <input value={age} onBlur={blurEvent} onChange={ageChange}></input>
        </div>
      </form>
      이름 {myName} 나이 {myAge}
    </div>
  );
};

export default ClickToEdit;
