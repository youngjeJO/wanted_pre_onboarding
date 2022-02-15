import React, { useState } from 'react';
import './ClickToEdit.css';

const ClickToEdit = (props) => {
  const [name, setName] = useState('조영제');
  const [age, setAge] = useState('29');
  const [outputName, setMyName] = useState('조영제');
  const [outputAge, setMyAge] = useState('29');
  const nameChange = (event) => {
    setName(event.target.value);
  };

  const ageChange = (event) => {
    setAge(event.target.value);
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
      이름 {outputName} 나이 {outputAge}
    </div>
  );
};

export default ClickToEdit;
