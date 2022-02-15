## 💾 원티드 프리온보딩 과제

## 구현 기능

- Toggle
- Modal
- Tab
- Tag
- AutoComplete
- ClickToEdit

---

## ![전체화면](/src/img/전체화면.png)

## ![반응형](/src/img/반응형.png)

- css 구성
  - ul는 전체적으로 도구모음 컨셉으로 한눈에 보일수 있도록 만들었습니다.
  - aquamarine 색을 중심으로 컬러를 통일 시켰습니다.
  - 전체적으로 box-shadow를 적용시켜 입체감이 있게 만들었습니다.
  - transition을 전체적으로 줘 모든 이벤트 시 동일하게 적용되도록 하였습니다.
  - Tag와 AutoComplete에 많은 데이터를 입력하면 박스 밖으로 나오는 것을
    방지하기 위해 overflow: overlay를 적용하였습니다.
  - 크기가 줄어들면 깨지는 현상을 대비해 컴포넌트들을 세로로 나열하는
    반응형으로 제작하였습니다

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

  - 먼저 form 태그에 onSubmit event에 event.preventDefault(); 을 주어
    새로고침이 일어나지 않게하였습니다.
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

## AutoComplete

- 구현 방법

  - AutoComplete가 구현되는 것이 보이게 하기위해 words라는 더미 데이터를
    먼저 만든 후 input이 onChange 될 때 마다 검색할 수 있게 만드려 했습니다.

  - 먼저 form 태그에 onSubmit을 통해 앞에 만들었던 Tag와 마찬가지로
    event.preventDefault(); 을 주어 새로고침이 일어나지 않게하였습니다.

  - inputVal이 업데이트 될 때 마다 words의 배열과 비교하기 위해
    useEffect를 사용했고 fliter를 사용해 비교된 값이 리턴될 수 있게 하였습니다.
    또 대소문자 구분없이 검색하게 하기 위해 toLowerCase()를 사용했습니다.

  - <ul> 태그에 접근하기위해 useRef를 사용하여
    .showList를 부여하고 삭제할 수 있었습니다.

  - onChange event가 발생할 때 마다 <ul>가 깜빡이는 오류가 발생했으나
    usestate를 사용해 focus true/false 값에 따라 깜빡이지 않게 하였습니다.

  - submit event가 발생헤 onSubmit 함수가 실행 되었을 때 words에 inputVal를 추가해
    words가 계속 업데이트 되도록 하였고 inputBox가 리셋되게 하고 <ul>에 showList를
    제거해 초기 상태를 만들어 주었습니다.

- 실행 방법

  - search anything에 text 입력 하면 autoComplete 되는 단어를 찾을 수 있습니다.
  - 찾아진 text를 클릭 시 input Box에 값으로 할당됩니다.
  - enter 키를 누르면 이벤트가 발생 해 포털 사이트 최근 검색어 같이 자동 완성
    list에 추가 됩니다.
  - x 버튼을 누르면 입력한 text를 삭제할 수 있습니다.

  ***

## ClickToEdit

- 구현 방법

  - useState를 이용해 inputBox에 value 값을 name과 age에 할당하였습니다.

  - blurEvent를 이용해 blur이벤트 발생 시 name과 age에 할당 된 값을
    outputName과 outputAge에 할당하였습니다.

- 실행 방법

  - text 입력 후 다른 화면을 클릭하면 데이터가 업데이트 됩니다.
