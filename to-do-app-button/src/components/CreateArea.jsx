import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from '@mui/material/Fab';

const initialValue = {title:"",
content:""}

function CreateArea({addTodo}) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });
  function handleChange(e) {
    const { name, value } = e.target;
    setNote((prevNote) => {
      return { ...prevNote, [name]: value };
    });
    
  }

  function handleSubmit(e) {
    

    addTodo(note)

    setNote(initialValue)
    e.preventDefault()
    
  }

  return (
    <div>
      <form action="" className="create-note">
        <input
          type="text"
          name="title"
          placeholder="Title"
          onChange={handleChange}
          value={note.title}
        />

        <textarea
          name="content"
          rows="3"
          placeholder="Take a note..."
          onChange={handleChange}
          value={note.content}
        ></textarea>

        <Fab color="primary" aria-label="add" onClick={handleSubmit}>
          <AddIcon />
        </Fab>
      </form>
    </div>
  );
}

export default CreateArea;
