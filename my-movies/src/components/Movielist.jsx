import React from 'react'

function Movielist() {
  return (
    <div className='row'>
      <div className='col-lg-4'>
        <div className='card md-4 shadow-sm'>
          <img src="https://image.tmdb.org/t/p/w600_and_h900_bestv2/4hne3v6jN4MlCnhSkxOW7YspJhr.jpg" className='card-img-top' alt='sample movie'/>
          <div className='card-body'>
            <h5 className='card-title'>Sample Movie</h5>
            <p className='card-text'>Sample Movie Description</p>
            <div className='d-flex justify-content-between align-items-center'>
              <button type='button' className='btn btn-md btn-outline-danger' >Delete</button>
              <h2><span className='badge bg-info'>9.0</span></h2>
            </div>
          </div>
        </div>
      </div>

      <div className='col-lg-4'>

      </div>

      <div className='col-lg-4'>

      </div>
    </div>
  )
}

export default Movielist