import React,{useState,useEffect} from 'react'

function Add({addTodo, oldtodo}) {

  const [todo,setTodo] = useState({content: ""})
  const changeInput =(e) =>{
      setTodo(
          {...todo, [e.target.name]:e.target.value}
        )
  }
  const onsubmit = (e) =>{
      e.preventDefault()
      
      if(todo.content === ""){
        return false;
      } 

      addTodo([...oldtodo, todo])

      
  }

  useEffect(()=>{
      console.log(oldtodo)
  },[oldtodo])

  return (
    <form className='input-area' onSubmit={onsubmit}>
        <button>^</button>
        <input name="content" value={todo.content} onChange={changeInput}/>
    </form>
  )
}

export default Add