
import './App.css';

import { TodoCounter } from "./components/TodoCounter";
import { TodoSearch } from "./components/TodoSearch";
import { TodoList } from "./components/TodoList";
import { TodoItem } from "./components/TodoItem";
import { TodoButton } from "./components/TodoButton";
import React from 'react';



const defaulttodos = [
    { content: "Aprender React Native", completed: false },
    { content: "Hacer Tarea", completed: false},
    { content: "Ir a trabajar temprano", completed: false },
    { content: "Limpiar la casa", completed: false },
];

function App() {

    const [todos, setTodos] = React.useState(defaulttodos)
    const CompleteTodos = todos.filter((todo) => !!todo.completed).length;
    const totalTodos = todos.length;
    
    const[search, setSearch] =React.useState(" ")
    let searchedTodos = [];

    if (!search.length >= 1) {
        searchedTodos = todos;
    } else {
        searchedTodos = todos.filter(todo => {
            const todoContent = todo.content.toLowerCase();
            const searchContent = search.toLowerCase();
            return todoContent.includes(searchContent);
        });
    }

    const completedTodo = (id) => {
        const newTodos = [...todos];
        newTodos[id].completed = true;
        setTodos(newTodos);
    };

    const deleteTodo = (id) => {
        const newTodos = [...todos];
        newTodos.splice(id, 1);
        setTodos(newTodos);
    };
    return (
        <React.Fragment>
        <div className="Container-one">
            <h1 className='Container-title'>Bienvenido</h1>
            <TodoCounter
            total = {totalTodos}
            completed ={CompleteTodos} />
            <TodoSearch
            search={search}
            setSearch={setSearch}
            totalTodos={totalTodos}
            />
            <TodoList>
                {searchedTodos.map((todo, id) => (
                    <TodoItem 
                    id={id}
                    todo={todo}
                    onComplete={completedTodo}
                     onDelete={deleteTodo}
                 />
                ))}
            </TodoList>
            <TodoButton />
        </div>
        </React.Fragment>
    );
}

export default App;
