import DeleteIcon from '@mui/icons-material/Delete';
import React from "react";

function Note(props) {
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={()=>{
        {props.forDeleting(props.id)}
      }}><DeleteIcon/></button>
    </div>
  );
}

export default Note;
