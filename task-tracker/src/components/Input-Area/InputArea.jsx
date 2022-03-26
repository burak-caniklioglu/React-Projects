import React from 'react'
import "./Input-Area.css"

function InputArea() {
  return (
    <div className='input-area'>
        <div className="input">
            <label htmlFor="task">Task</label>
            <input type="text" id='task' name="task"  placeholder='Add Task'/>
        </div>
        <div className="input">
            <label htmlFor="day">Day & Time</label>
            <input type="text" id='day' name="day" placeholder='Add Day & Time' />
        </div>
    </div>
  )
}

export default InputArea