import React from 'react'

function Input({className,  value="ali"}) {
  return (
    <div>
      <input type="text" className={className} value={value} />
    </div>
  )
}

export default Input