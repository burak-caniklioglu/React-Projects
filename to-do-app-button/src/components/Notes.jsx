import React from 'react'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

function Notes({title, content, id , deleteTodo}) {

    function handleClick(){
        deleteTodo(id)
    }

  return (
    <div className='notes'>
        <h1>{title}</h1>
        <p>{content}</p>
        <button onClick={handleClick}>
            <DeleteForeverIcon />
        </button>
        
    </div>
  )
}

export default Notes