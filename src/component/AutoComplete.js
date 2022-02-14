import React, { useEffect, useRef, useState } from 'react';
import './AutoComplete.css';

const words = [
  'avengers',
  'captain america',
  'hulk',
  'iron man',
  '프리온보딩',
  '합격',
  '하고싶다.',
];

const AutoComplete = (props) => {
  const [focus, setFocus] = useState(false);
  const [inputVal, setInputVal] = useState('');
  const [wordList, setWordList] = useState(words);

  const autoList = useRef(null);

  const onSubmit = (event) => {
    event.preventDefault();
    console.log('hi');
    if (inputVal === '') {
      return;
    }
    words.push(inputVal);
    setInputVal('');
    setFocus(false);
    autoList.current.classList.remove('showList');
  };

  useEffect(() => {
    setWordList(
      words.filter((item) => {
        return item.includes(inputVal.toLowerCase());
      })
    );
  }, [inputVal]);

  const onChange = (event) => {
    setInputVal(event.target.value);
    if (focus === true) {
      return;
    }
    if (autoList.current.classList.contains('showList')) {
      autoList.current.classList.remove('showList');
    } else {
      autoList.current.classList.add('showList');

      setFocus(true);
    }
  };
  const pushWord = wordList.map((item, index) => (
    <li className='word' id={index}>
      {item}
    </li>
  ));

  const deleteBtn = () => {
    setInputVal('');
    autoList.current.classList.remove('showList');
  };

  return (
    <div className='Box'>
      <span className='title'>AutoComplete</span>
      <form className='autoBox' onSubmit={onSubmit}>
        <input
          className='searchBox'
          onChange={onChange}
          value={inputVal}
          type='text'
          placeholder='search anything'
        />
        <span onClick={deleteBtn}>x</span>
        <ul ref={autoList} className='wL'>
          {pushWord}
        </ul>
      </form>
    </div>
  );
};

export default AutoComplete;
