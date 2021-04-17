import React from 'react';

const List = (props) => {
  
    return (
        <>
        <div className="list_style">
        <button id="b2" onClick={()=>{
            props.onSelect(props.id);
        }}> - </button>
            <li>{props.text}</li>
        
        </div>
        </>
    );
};

export default List;