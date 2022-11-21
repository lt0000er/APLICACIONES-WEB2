 const express = require('express');
 const routerApi = require('./router')
 const app = express();
 const port = 3000;
 
 app.get('/', (req, res) => {
    res.send("Mi primer server con express");

 });


 app.get('/authors/filter', (req, res) =>{
    res.send("Soy una ruta de filtar");
 });

 app.get('/authors/:id', (req,res) =>{
    const {id} = req.params
    res.json({
        authorsId: id,
        name: "ERICK",
        lastname: "MACIAS"

    });
 });


 app.get('/books', (req,res) =>{
    res.json({
        bookId: 12,
        authorId: 52,
        nameBook: "ERICK",
        year: 2000
    });
 });

 app.get('/users', (req,res) =>{
    res.json({
        id: 12,
        name: "ERICK",
        lastname: "MACIAS"
    });
});

app.get('/users/:userId/books/:booksId', (req,res) =>{
     const { userId, bookId} = req.params
    res.json({
        userId: userId,
        bookId: bookId,
        name: "ERICK",
        lastname: "MACIAS"
    });
});


app.get('/operation', (req,res) =>{
    const {limit, offset} = req.query
    res.json({
        offset:offset,
        limit:limit,
        name: "ERICK",
        lastname: "MACIAS"
    });
});

 app.listen(port, () => {
 console.log(`Escuchando desde el puerto  ${port}!`);
});
