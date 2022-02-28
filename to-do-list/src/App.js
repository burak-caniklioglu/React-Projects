import React, {useState, useEffect} from "react";
import {Button,FormControl,Form} from 'react-bootstrap';
import {ReactComponent as Save} from "./assets/save.svg"
import {ReactComponent as Edit} from "./assets/edit.svg"
import {ReactComponent as Trash} from "./assets/trash.svg"







function App() {

  const [todo, setTodo] = useState("")
  const [list,setList] = useState([])

  const addToDo = () => {
    setList([...list, todo])
    setTodo("")
  }

  useEffect(() =>{
    console.log(list)
  },[list])


  return (
    <div className="text-center mt-5">
      <h1 >To Do List</h1>
      <div className='d-flex justify-content-center mt-4'>
        <FormControl className='w-25 me-2'
          placeholder="What needs to be done?"
          value={todo}
          onChange = {(e) => setTodo(e.target.value)}
        />
        <Button variant="outline-secondary" id="button-addon2" onClick={addToDo}>
          Add To Do
        </Button>
      </div>
      <div className="m-auto mt-5   w-75">
        {
          list.map((item,i) => <div key={i} className="m-auto d-flex justify-content-between w-50">
          <div >
            <label className="d-flex">
                <Form.Check 
                  type="checkbox"
                  className="me-3"
                />
            {item}</label>
            
          </div>
          <div>
            <span><Edit width={15} style={{cursor:"pointer"}} className="me-2"/></span>
            <span><Trash width={15} style={{cursor:"pointer"}} /></span>
          </div>
          
        </div>)
        }
      </div>

    </div>
  );
}

export default App;
