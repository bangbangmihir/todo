import React, { useState } from 'react';
import List from './List';

const App = () =>{

  const[inputData,setInputData]= useState(" ");
  const[item,setItems]= useState([]);

  const addItem = (event) => {
    setInputData(event.target.value);
  };
  const submitData = ()=>{
    setItems((oldItems)=>{
      return[...oldItems, inputData];
    });
    setInputData(" ");

  };
  const deleteItems = (id) =>{
    console.log("deleted")
    setItems((oldItems)=>{
      return oldItems.filter((arrElemenet,index)=>{
        return index !== id;
      })
    })
};

  return(
  <div className="main_div">
  <div className="center_div">
  <br/>
  <h1>Todo List</h1>
  <br/>
  <input type="text" placeholder="Add a items" onChange={addItem} value = {inputData}/>
  <button id= "b1" onClick={submitData}> + </button>
  <ol>
    
      {item.map( (itemval,index) => {
       return <List
          text={itemval}
          key = {index}
          id = {index}
          onSelect = {deleteItems}
        />
      })}
    
  </ol>

  </div>

  </div>
  )
};

export default App;
