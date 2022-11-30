const express = require("express");
const AuthorsServices = require('../services/authors.services');
const route = express.Router();
const services = new AuthorsServices();


app.get('/authors/filter', (req, res) =>{
   res.send("Soy una ruta de filtar");
 });

 app.get('/authors/:id', (req,res) =>{
   const {id} = req.params
    res.json({
        authorsId: id,
       title: "dias sin ti",
       name: "Pablo",
       lastname: "Escobar"

    });
 });

 route.get('/', (req,res) =>{
  const authors = services.find()
  res.json(authors);
});


route.get('/:id', (req,res) =>{
  const {id} = req.params
  const retFind = services.findOne(id);
  res.json(retFind);
});


route.post('/', (req, res) => {
   const data = req.body;
   const newAuthors = services.created(data);
   res.status(201).json(newBooks);
});

route.put('/:id', (req, res) => {
  const change = req.body;
  const updateAuthors = services.created(data);
  res.status(201).json(newAuthors);
});


route.delete('/', (req, res) => {
  const deleteAuthors = services.created(data);
  res.status(201).json(newAuthors);
});


module.exports= route