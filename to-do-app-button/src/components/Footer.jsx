import React from 'react'

const today = new Date()


function Footer() {
  return (
    <footer>Copyright Burak Caniklioğlu {today.getFullYear()}</footer>
  )
}

export default Footer