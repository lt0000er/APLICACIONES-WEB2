const express = require("express");
const UsersServices = require('../services/users.services');
const route = express.Router();
const services = new UsersServices();


app.get('/users', (req,res) =>{
    res.json({
        usersId: 12,
        name: "Neydan",
        lastname: "Velez",
        passwordUser: "todobraparabien"
   });
});

app.get('/users/:userId/books/:booksId', (req,res) =>{
     const { userId, bookId} = req.params
    res.json({
       userId: userId,
        bookId: bookId,
        name: "ERICK",
       lastname: "MACIAS",
       passwordUser: "todobraparabien"
    });
});

route.get('/', (req,res) =>{
   const users = services.find()
   res.json(users);
});


 route.get('/:id', (req,res) =>{
   const {id} = req.params
   const retFind = services.findOne(id);
   res.json(retFind);
});


 route.post('/', (req, res) => {
    const data = req.body;
    const newUsers = services.created(data);
    res.status(201).json(newUsers);
});

route.put('/:id', (req, res) => {
   const change = req.body;
   const updateUsers = services.created(data);
   res.status(201).json(newUsers);
});


route.delete('/', (req, res) => {
   const deleteUsers = services.created(data);
   res.status(201).json(newUsers);
});

module.exports= route