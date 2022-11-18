import React from "react";
import './TodoItem.css';


const onDelete = () => {
    console.log("Borrdo");

}
const completed = () =>{
    console.log("Completado");
}

function TodoItem (props){
    return (

        <li className="TodoItem">
        <span
         onClick={completed}
         > 😎 </span>
        <p>{props.text}</p>
        <span
        onClick={onDelete}
        > 😔 </span>
        </li>
    );
}

export {TodoItem}