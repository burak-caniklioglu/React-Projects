import React from 'react'

function TodoIndex({oldtodo}) {
  return (
    <div>
        <ul>
            {oldtodo.map((item,i)=>{
                return <li key={i}>{item.content}</li>
            })}
        </ul>
    </div>
  )
}

export default TodoIndex