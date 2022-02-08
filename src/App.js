import './App.css';
import Toggle from './component/Toggle';
import Modal from './component/Modal';
import Tab from './component/Tab';
import Tag from './component/Tag';

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
      </div>
    </div>
  );
}

export default App;
