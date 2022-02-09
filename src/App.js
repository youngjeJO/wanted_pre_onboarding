import './App.css';
import Toggle from './component/Toggle';
import Modal from './component/Modal';
import Tab from './component/Tab';
import Tag from './component/Tag';
import AutoComplete from './component/AutoComplete';

function App() {
  return (
    <div className='App'>
      <div className='Apps'>
        <Toggle />
        <Modal />
        <Tab />
      </div>
      <div className='Apps'>
        <Tag />
        <AutoComplete />
      </div>
    </div>
  );
}

export default App;
