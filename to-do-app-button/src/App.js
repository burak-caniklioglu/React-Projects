import React, {useState} from "react"
import Header from "./components/Header";
import CreateArea from "./components/CreateArea";

function App() {

  const [todoList, setTodoList] = useState([])

  function addNote(newNote){
    setTodoList(prevTodoList => {
      return [...prevTodoList, newNote]
    })
    
  }
  console.log(todoList)
  return (
    <div className="App">
      <Header />
      <CreateArea addTodo = {addNote} />
    </div>
  );
}

export default App;
