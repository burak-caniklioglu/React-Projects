import React,{useState,useEffect} from 'react'
import Add from './input-area/input'
import Buttons from './buttons/buttons'
import TodoIndex from './todo-area/todoIndex'



function Todo() {

  const [oldTodo, setOldTodo] = useState([])

  return (
    <div>
        <Add  addTodo={setOldTodo}  oldtodo = {oldTodo}/>
        <Buttons />
        <TodoIndex oldtodo = {oldTodo} />
    </div>
  )
}

export default Todo