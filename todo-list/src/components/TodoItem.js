import React from "react";
import "./TodoItem.css"


const TodoItem = ({todo, id, onComplete, onDelete }) => {
    return (
        <li className="todo-item">
            <span
                className="check"
                onClick={() => onComplete(id)}

            >
                {<i class="fa-solid fa-check-to-slot"></i>}
                
                
            </span>
            <p
                className="text"
                style={{
                    textDecoration: todo.completed ? "line-through" : "none",    
                }}
            >
                {todo.content}
            </p>
            <span className="delete" onClick={() => onDelete(id)}>
            
                {<i class="fa-solid fa-delete-left"></i>} 
                
            </span>
        </li>
    );
}

export {TodoItem}
