import React from 'react'

function Searchbar({onInputChange, setValue}) {

  

  return (
    
      <form >
        <div className="form-row my-5">
          <div className="col-12">
            <input 
              type="text" 
              className='form-control'
              placeholder='Search movie'
              value={setValue}
              onChange={(e) =>onInputChange(e.target.value)}
              />
          </div>
        </div>
      </form>
    
  
  )
}

export default Searchbar