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

---

## Tag

- 구현 방법

  - useState를 이용해 input의 value 값을 inputVal에 할당했습니다.
  - onSubmit 함수가 실행되면 trim을 이용해 공백만 태그로 들어가지 않게했습니다. - value값을 얕은 복사를 통해 배열로 추가했습니다.
  - pushTag 함수를 실행 될 때 마다 map을 이용해 <span>으로 감싼 inputVal값이  
    return 되게 하여 tag가 출력되게 하였습니다.
  - deleteBtn은 event가 일어날 때 마다 제거하는 기능을 만들기 위해
    해당 부모 태그인 span에 parentNode를 사용해 접근하였고 id를 추적해 브라우저에
    출력된 .tag와 inputList에 있는 배열 값까지 제거할 수 있도록 하였습니다.

- 실행 방법

  - Press enter to add tags 위에 원하는 text를 입력 후 enter 키를 누르면
    입력한 value가 tag로 형성됩니다.
  - delete Btn을 이용해 원하지 않는 tag는 삭제가 가능합니다.

---
