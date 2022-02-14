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
          <label for='name'>이름</label>
          <input
            className='textBox'
            name='name'
            value={name}
            onBlur={blurEvent}
            onChange={nameChange}
          ></input>
        </div>
        <div>
          <label form='age'>나이</label>
          <input
            className='textBox'
            name='age'
            value={age}
            onBlur={blurEvent}
            onChange={ageChange}
          ></input>
        </div>
      </form>
      이름 {myName} 나이 {myAge}
    </div>
  );
};

export default ClickToEdit;
