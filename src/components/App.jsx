import React, { useState } from "react";
import CreateArea from "./CreateArea";
import Footer from "./Footer";
import Header from "./Header";
import Note from "./Note";

function App() {

  const [note,newNote]=useState([]);

  function handleChange(content){
    newNote((prevValue)=>{
      return [
        ...prevValue,content
      ]
    })
    console.log(content);
    event.preventDefault();
    
  }

  function deleteItem(id){
    newNote((prevValue)=>{
      return prevValue.filter((item,index)=>{
        return index !==id;
      })
    })
  }
  
  return (
    <div>
      <Header />
      <CreateArea onPressing={handleChange}/>
      {note.map((item, index) =>(
          <Note key={index} id={index} title={item.title} content={item.content} forDeleting={deleteItem}/>
      ))}
      
      <Footer />
    </div>
  );
}

export default App;
