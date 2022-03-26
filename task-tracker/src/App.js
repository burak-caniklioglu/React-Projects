
import './App.css';
import ButtonArea from './components/Button-Area/ButtonArea';
import InputArea from './components/Input-Area/InputArea';
import TaskArea from './components/Task-Area/TaskArea';
import {useState} from 'react';

function App() {

  const [isClosed, setIsClosed] = useState(true);


  return (
    <div className="App">
      <ButtonArea isClosedProp={isClosed} setIsClosedProp = {setIsClosed}/>
      {!isClosed && <InputArea />}
      <TaskArea />
    </div>
  );
}

export default App;
