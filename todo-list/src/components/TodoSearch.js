import React from "react";

import "./TodoSearch.css"



const TodoSearch = ({search, setSearch}) => {
  const getValueInput = (e) =>{
    let getValue = e.target.value;
    setSearch(getValue)

  }
  
  return ( 
  <>  
    <input 
      className="todo-search" 
      type={"text"} 
      placeholder="Buscar Tarea.."
      value={search}  
      onChange={getValueInput}
      />
      <p className="todo-p">{search}</p>
  </>
  );
         
};


export { TodoSearch };
