import React from "react";
import './CreateTodoButton.css'


const onClickButton = (msg) => {
    console.log("hola " + msg);
}


   const CreateTodoButton = () => {
    <section className="addtodo">
       <button
           className="buttonadd"
            type="submit" 
            onClick={ () => (
                onClickButton("Erick")
            )}
            
         >+</button>
        </section>
}

export  {CreateTodoButton}