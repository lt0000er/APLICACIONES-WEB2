import React from "react";
import './TodoSearch.css';




const TodoSearch = (search, setSearch) => {

    //const [misael, setValor] = useState('');
    const getValueInput = (event) => {
       console.log(event.target.value);
       let valor = event.target.value
       setSearch(valor)
    
}

return (

    <section className="search-main">
         <input
         className="search" 
         type="text" 
         placeholder="Buscar"
         onChange={getValueInput}

         ></input>
         <p>{search}</p>
    </section>
    )
}
export {TodoSearch};


//return <input className="Search" placeholder="AQUI MI TAREA"/>
