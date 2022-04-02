import React,{useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import "./Todo.css";

function Todo({ item}) {
  const element = <FontAwesomeIcon icon={faTrashCan} />;

  const [doneTodo, setDoneTodo] = useState(false)

  const [isDelete,setIsDelete] = useState(true)

  const { task, day} = item;

  function changeDoneTodo () {
    setDoneTodo(!doneTodo)
  }

  const handleDelete = () => {
    setIsDelete(!isDelete)
  }

  return (

    <>
    {isDelete && <div className="card" onClick={changeDoneTodo}>
      <div className={doneTodo ? "done-todo" : "todo" }>
        <div className="main-child">
          <p className="main">{task}</p>
          <p className="child">{day}</p>
        </div>
        <span className="delete-button" onClick = {handleDelete}>{element}</span>
      </div>
    
  </div>}
    </>
    
    
  );
}

export default Todo;
