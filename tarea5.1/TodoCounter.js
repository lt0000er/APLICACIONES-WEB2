import React from 'react';
import './TodoCounter.css';



function TodoCounter ({total, completed}){
    return (
        <>
        <header className='header'>
            <p>MAVICK</p>
            <section className='header-description'>
                <h1 className='title-main'> WELCOME  A MY TODO's</h1>
                <h2 className='sutitle'> Tienes {completed}  Task completed of {total}</h2>
            </section>
        </header>
        </>
     );

}

export {TodoCounter};