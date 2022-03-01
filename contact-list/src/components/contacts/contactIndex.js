import React, {useState, useEffect} from 'react'
import Form from './Form/formIndex'
import List from './List/listIndex'



function Contact() {
  const [contacts, setContacts] = useState([])

  useEffect(() => {
    console.log(contacts)
  },[contacts])

  return (
    <div>
      <Form addContact ={setContacts} people={contacts}/>
      <List />
    </div>
  )
}

export default Contact