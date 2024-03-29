import React from "react";
import "./Input-Area.css";

function InputArea({handleChange, handleAdd, task, day}) {

  

  return (
    <div className="input-area">
      <div className="input">
        <label htmlFor="task">Task</label>
        <input type="text" id="task" name="task" placeholder="Add Task" onChange={handleChange} value={task} />
      </div>
      <div className="input">
        <label htmlFor="day">Day & Time</label>
        <input type="text" id="day" name="day" placeholder="Add Day & Time" onChange={handleChange} value={day}/>
      </div>

      <button className="save" onClick={handleAdd}>Save Task</button>
    </div>
  );
}

export default InputArea;
