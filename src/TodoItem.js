import React from "react";
import './TodoItem.css';
function TodoItem (props){
    return (

        
        <li className="TodoItem">
        <span> 7 </span>
        <p className="Item">{props.text}</p>
        <span> X </span>
        </li>
    );
}

export {TodoItem}