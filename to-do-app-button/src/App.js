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

  function handleDelete(id){
    setTodoList(prevTodoList => {
     return prevTodoList.filter((item, index) => {
        return index !== id
      })
    })
  }
  
  

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
            content = {item.content}
            deleteTodo = {handleDelete}/>
          )
        })
      }

      
    </div>
  );
}

export default App;
