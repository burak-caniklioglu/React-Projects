import React from 'react'
import "./Button-Area.css"

function ButtonArea({isClosedProp, setIsClosedProp}) {

  

  const handleClickClose = () => {
    setIsClosedProp(!isClosedProp)
  }

  return (
    <div className='button-container'>
        <h1>Task Tracker</h1>
        {
          isClosedProp
           ? <button className='show' onClick={handleClickClose}>Show Add Task Bar</button>

          : <button className='close' onClick={handleClickClose}>Close Add Task Bar</button>
        }
        
        


        
    </div>
  )
}

export default ButtonArea