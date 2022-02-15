import React, { useEffect, useRef, useState } from 'react';
import './css/AutoComplete.css';

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

  // submit 함수 words에 입력한 값을 추가 시켜주고
  // input box를 리셋 시켜줌
  const onSubmit = (event) => {
    event.preventDefault();
    if (inputVal === '') {
      return;
    }
    words.push(inputVal);
    setInputVal('');
    setFocus(false);
    autoList.current.classList.remove('showList');
  };

  // useEffect를 이용해 inputVal이 변할 떄 마다
  // words에서 검색
  useEffect(() => {
    setWordList(
      words.filter((item) => {
        return item.includes(inputVal.toLowerCase());
      })
    );
  }, [inputVal]);

  //input box에 text를 넣고 list를 보여주는 함수
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

  // li 클릭 시 input 값으로 넣어줌
  const selectWord = (event) => {
    setInputVal(event.target.innerText);
  };

  //li를 형성하는 함수
  const pushWord = wordList.map((item, index) => (
    <li className='word' id={index} onClick={selectWord}>
      {item}
    </li>
  ));

  //deletebtn 함수
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
        <ul ref={autoList} className='word_list'>
          {pushWord}
        </ul>
      </form>
    </div>
  );
};

export default AutoComplete;
