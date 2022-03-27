import React from 'react'

import Todo from './Todo/Todo'

function TaskArea({todos}) {
  

  return (
    <div className='task-container'>
      {
        todos.map((item, index) => {
          return (
            <div key={index}>
              <Todo item={item} />
            </div>
          )
        })
      }
        
        
    </div>
  )
}

export default TaskArea