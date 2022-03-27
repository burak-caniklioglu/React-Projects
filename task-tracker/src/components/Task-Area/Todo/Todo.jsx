import React,{useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import "./Todo.css";

function Todo({ item}) {
  const element = <FontAwesomeIcon icon={faTrashCan} />;

  const [doneTodo, setDoneTodo] = useState(false)

  const { task, day} = item.todo;

  function changeDoneTodo () {
    setDoneTodo(!doneTodo)
  }

  const handleDelete = () => {
    
  }

  console.log(item.todo);

  return (
    <div className="card" onClick={changeDoneTodo}>
      {!doneTodo ? (
        <div className="todo">
          <div className="main-child">
            <p className="main">{task}</p>
            <p className="child">{day}</p>
          </div>
          <span className="delete-button" onClick = {handleDelete}>{element}</span>
        </div>
      ) : (
        <div className="done-todo">
          <div className="main-child">
            <p className="main">{task}</p>
            <p className="child">{day}</p>
          </div>
          <span className="delete-button" onClick = {handleDelete}>{element}</span>
        </div>
      )}
    </div>
  );
}

export default Todo;
