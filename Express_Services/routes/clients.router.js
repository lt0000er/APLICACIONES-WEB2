
const express = require("express");
const ClientsServices = require('../services/clients.services');
const route = express.Router();
const services = new ClientsServices();



app.get('/clients/filter', (req, res) =>{
    res.send("Soy una ruta de filtar");
  });
 
  app.get('/clients/:id', (req,res) =>{
    const {id} = req.params
     res.json({
         clientsId: id,
        name: "misael",
        lastname: "Vargas"
 
     });
  });

  route.get('/', (req,res) =>{
    const clients = services.find()
    res.json(clients);
 });


  route.get('/:id', (req,res) =>{
    const {id} = req.params
    const retFind = services.findOne(id);
    res.json(retFind);
 });


  route.post('/', (req, res) => {
     const data = req.body;
     const newClients = services.created(data);
     res.status(201).json(newClients);
 });

 route.put('/:id', (req, res) => {
    const change = req.body;
    const updateClients = services.created(data);
    res.status(201).json(newClients);
});


route.delete('/', (req, res) => {
    const deleteClients = services.created(data);
    res.status(201).json(newClients);
});










  module.exports= route