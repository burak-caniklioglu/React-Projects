import React from 'react'

function Tasks({tasks}) {
  return (
    <div>
        {
            tasks.map((todo) => {
                return(
                    <p></p>
                )
            })
        }
    </div>
  )
}

export default Tasks