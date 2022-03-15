import React, {useState} from "react"
import Header from "./components/Header";
import CreateArea from "./components/CreateArea";
import Notes from "./components/Notes";

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
      {
        todoList.map((item, index) => {
          return ( 
            <Notes 
            key = {index}
            id={index}
            title={item.title}
            content = {item.content}/>
          )
        })
      }

      
    </div>
  );
}

export default App;
