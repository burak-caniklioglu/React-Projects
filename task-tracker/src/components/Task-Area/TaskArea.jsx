import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function TaskArea() {

  const element = <FontAwesomeIcon icon="fa-solid fa-trash" />
  return (
    <div className='task-container'>
        <div className='todo'>
            <div className='main-child'>
                <p className="main">Todo</p>
                <p className="child">23.pm & 12 April</p>
            </div>
            <span className='delete-button'>
              {element}
              </span>
        </div>
    </div>
  )
}

export default TaskArea