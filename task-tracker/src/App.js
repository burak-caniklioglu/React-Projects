
import './App.css';
import ButtonArea from './components/Button-Area/ButtonArea';
import InputArea from './components/Input-Area/InputArea';
import TaskArea from './components/Task-Area/TaskArea';
import {useState} from 'react';

function App() {

  const [isClosed, setIsClosed] = useState(true);

  const [todo,setTodo] = useState({task:"", day:""});

  const [todos,setTodos] = useState([{task:"Dentist Appointment", day:"Apr 8th at 10:30 am"},{task:"Grocery Shopping", day:"Apr 5th at 2:30 pm"}]);

  const handleChange = (e) => {
    setTodo({...todo, [e.target.name]:e.target.value})
  }

  const handleAdd = () => {
    todo.task === "" ? alert("Please enter a task"): setTodos([...todos,todo]);
    setTodo({task:"", day:""});
  }
  console.log(todos)
  return (
    <div className="App">
      <ButtonArea isClosedProp={isClosed} setIsClosedProp = {setIsClosed}/>

      {!isClosed && <InputArea handleChange = {handleChange} handleAdd={handleAdd} {...todo}/>}

      <TaskArea todos = {todos} />
    </div>
  );
}

export default App;
