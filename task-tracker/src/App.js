
import './App.css';
import ButtonArea from './components/Button-Area/ButtonArea';
import InputArea from './components/Input-Area/InputArea';
import TaskArea from './components/Task-Area/TaskArea';
import {useState} from 'react';

function App() {

  const [isClosed, setIsClosed] = useState(true);

  const [todo,setTodo] = useState({task:"", day:""});

  const [todos,setTodos] = useState([]);

  const handleChange = (e) => {
    setTodo({...todo, [e.target.name]:e.target.value})
  }

  const handleAdd = () => {
    setTodos([...todos, {todo}]);
  }

  return (
    <div className="App">
      <ButtonArea isClosedProp={isClosed} setIsClosedProp = {setIsClosed}/>
      {!isClosed && <InputArea handleChange = {handleChange} handleAdd={handleAdd}/>}
      <TaskArea todos = {todos} />
    </div>
  );
}

export default App;
