## 💾 원티드 프리온보딩 과제

## 구현 기능

- Toggle
- Modal
- Tab
- Tag
- AutoComplete
- ClickToEdit

---

## Toggle

- 구현 방법

  - <button>에 onClick event에 함수를 주어 구현
  - classList.toggle을 주어 버튼과 배경이 움직이도록 구현함
  - state로 toggleBox 안에 text on/ off가 변하도록 함

- 실행 방법

  - 원형 버튼을 클릭 시 버튼이 좌 우로 움직이며 background 이미지 전환할 수 있음

---

## Modal

- 구현 방법

  - modalBtn에 onClick event.target.nextSibling을 이용해 형제노드를 찾을 수 있었고 형제 노드인 modalBg class에 diplay block을 가진 .show(display:block)를 추가하여 모달 창을 띄울 수 있게 하였고 closseModal에 event.target.parentNode.parentNode를 사용해 부모에 부모 태그인 modalBg에 접근하여 class에 .hide(display:none)를 추가하여 onClick 시 사라지게함

- 실행 방법

  - Open Modal 클릭 시 HELLO CODESTATES 문구가 적힌 모달이 띄워집니다.
  - X 클릭 시 모달 창 닫기 가능합니다.

---

## Tap

- 구현 방법

  - tab1,2,3이 들어있는 span에 onClick event를 이용해 click 시 tabClick 함수 실행 되도록 하였다
  - tabClick 함수가 실행될 때 마다 DOM요소를 불러와 배열을 만들었고 만들어진 NodeList에 forEach를 사용해 모든 배열에 .show와 .bgChange를 지우고 event.target에 다시 .bgChange 다시 추가하고 nextSibling인 div에 .show를 추가해
    자연스럽게 넘어가도록 보이게 구현하였습니다.

- 실행 방법

  - tab1, tab2, tab3을 클릭하면 해당 text를 볼 수 있습니다.
