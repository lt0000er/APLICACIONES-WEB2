
//import './App.css';
import {TodoCounter} from './TodoCounter'
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';

 const todos = [ 

  {description: 'Aprender React native', completed: false},
  {description: 'Aprender Angular', completed: false},
  {description: 'Aprender Vue', completed: false},
  {description: 'Aprender Diseño', completed: false},

]

function App() {
  return (
   <>
     <TodoCounter/>
     <TodoSearch/>

     <TodoList>
       {todos.map((todo) => (
         <TodoItem key={todo.description} text={todo.description} />
         
       ))} 

      </TodoList>

       <CreateTodoButton/>
  
  </>
  );
}

export default App;
