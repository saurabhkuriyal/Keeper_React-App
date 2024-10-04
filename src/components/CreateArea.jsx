import React, { useState } from "react";

function CreateArea(props) {
  const [container,newContainer]=useState({
    title:"",
    content:""
  });

  function handleChange(event){
    const value=event.target.value;
    const name=event.target.name;

    newContainer((prevValue)=>{
      if(name==="title"){
        return{
          title:value,
          content:prevValue.content
        }}else if(name==="content"){
            return{title:prevValue.title,
            content:value
            }
        }
      }
    );
  }
  
  return (
    <div>
      <form>
        <input name="title" onChange={handleChange} placeholder="Title" value={container.title}/>
        <textarea name="content" onChange={handleChange} placeholder="Take a note..." rows="3" value={container.content} />
        <button onClick={()=>{
          {props.onPressing(container)}
        }}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
