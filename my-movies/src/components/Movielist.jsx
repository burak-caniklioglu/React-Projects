import React from 'react'

function Movielist({movies}) {
  return (
    <div className='row'>

      {
        movies.map(item => (
          <div className='col-lg-4'>
            <div className='card md-4 shadow-sm'>
              <img src={item.imageURL} className='card-img-top' alt='sample movie'/>
              <div className='card-body'>
                <h5 className='card-title'>{item.name}</h5>
                <p className='card-text'>{item.overview}</p>
                <div className='d-flex justify-content-between align-items-center'>
                  <button type='button' className='btn btn-md btn-outline-danger' >Delete</button>
                  <h2><span className='badge bg-info'>9.0</span></h2>
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