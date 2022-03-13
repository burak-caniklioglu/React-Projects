import React from 'react'

function Movielist({moviesProp,deleteMovieProp}) {
  return (
    <div className='row'>

      {
        moviesProp.map(item => (
          <div className='col-lg-4 my-5  d-flex justify-content-center'>
            <div className='card md-4 shadow-sm ' style={{"width":"18rem" }}>
              <img src={item.imageURL} className='card-img-top' alt='sample movie' />
              <div className='card-body'>
                <h5 className='card-title'>{item.name}</h5>
                <p className='card-text'>{item.overview}</p>
                <div className='d-flex justify-content-between align-items-center'>
                  <button type='button' onClick={() => deleteMovieProp(item)} className='btn btn-md btn-outline-danger' >Delete</button>
                  <h2><span className='badge bg-info'>{item.rating}</span></h2>
                </div>
              </div>
            </div>
          </div>
        ))
      }

      

      
    </div>
  )
}

export default Movielist