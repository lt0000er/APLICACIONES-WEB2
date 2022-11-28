 const express = require('express');
 const routerApi = require('./router')
 const app = express();
 const port = 3000;
 
 app.get('/', (req, res) => {
    res.send("Mi primer server con express");

 });

 app.use(express.json());
 routerApi(app);

 

 app.listen(port, () => {
 console.log(`Escuchando desde el puerto  ${port}!`);
});

//// primero van las rutas estaticas y despues las rutas dinamicas 



 ///app.get('/books', (req,res) =>{
   /// res.json({
      ///  bookId: 12,
      //  authorId: 52,
        ///nameBook: "ERICK",
        ///year: 2000
    //});
 //});

 


///app.get('/operation', (req,res) =>{
   /// const {limit, offset} = req.query
   /// res.json({
     //   offset:offset,
      ///  limit:limit,
       /// name: "ERICK",
      ///  lastname: "MACIAS"
   /// });
///});