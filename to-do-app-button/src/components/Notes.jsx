import React from 'react'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

function Notes({title, content}) {
  return (
    <div className='notes'>
        <h1>{title}</h1>
        <p>{content}</p>
        <DeleteForeverIcon />
    </div>
  )
}

export default Notes