
import React, { useState } from 'react';

//import './App.css';

import {TodoCounter} from './TodoCounter'
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';

 const todos = [ 

  {description: 'Aprender React native', completed: false},
  {description: 'Aprender Angular', completed: true},
  {description: 'Aprender Vue', completed: true},
  {description: 'Aprender Diseño', completed: false},

]

function App() {

  const [Search, setSearch] = useState ('');
  const totatTodos = todos.length;
  const onCompletedTodos = todos.filter( todo => !!todo.completed ).length;

  return (
    
   <>
      
     <TodoCounter total={totatTodos} completed ={onCompletedTodos}/>
     <TodoSearch Search={Search} setSearch={setSearch}/>
     <TodoList>
       {todos.map((todo) => (
         <TodoItem key={todo.description} text={todo.description} /> 
         
       
       
       ))} 
         </TodoList>
         <CreateTodoButton />
    </>
  );
}

export default App;
