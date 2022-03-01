import React from 'react'
import { Button } from 'react-bootstrap';



function Form() {
  return (
    <div>
        <div className='w-25  m-auto '>
        <div>
            <label className='d-flex justify-content-between'>
                <p>Fullname :</p>
                <input name="fullname" className='w-50 h-25' />
            </label>
            
            <label className='d-flex justify-content-between'>
                <p>Phone_number :</p>
                <input name="Phone_number" className='w-50 h-25' />
            </label>
        </div>
        <Button className='mb-5'> Add </Button>

        </div>

    </div>
  )
}

export default Form