const http = require('http');

http.createServer((req,res) => {
console.log("nueva peticio");
   console.log(req.url);

     switch (req,url){
        case "/hola":
            res.write("Hola tercer nivel de aplicaciones");
            break;
            case "/authors":
                res.write("Aqui mis autores");
                break;

        default:
          res.write("mi primer servidor con http");
        }

   res.end();
}).listen(3000)

console.log(" se esta escuchando desde el puerto 3000");
