
const express = require("express");
const BooksServices = require('../services/books.services');
const route = express.Router();
const services = new BooksServices();


route.get('/', (req,res) =>{
    const books = services.find()
    res.json(books);
 });


  route.get('/:id', (req,res) =>{
    const {id} = req.params
    const retFind = services.findOne(id);
    res.json(retFind);
 });


  route.post('/', (req, res) => {
     const data = req.body;
     const newBooks = services.created(data);
     res.status(201).json(newBooks);
 });

 route.put('/:id', (req, res) => {
    const change = req.body;
    const updateBook = services.created(data);
    res.status(201).json(newBooks);
});


route.delete('/', (req, res) => {
    const deleteBook = services.created(data);
    res.status(201).json(newBooks);
});

 

 


 module.exports= route