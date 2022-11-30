const faker = require('@faker-js/faker');

class ClientsServices {
   
    constructor(){
       this.clients = []
       this.generete();

    }



 generete(){
    
    for (let i = 0; i< 10; i++){
        this.clients.push({
            id: i + 1,
            name: faker.commerce.productName(),
            precio: faker.commerce.price()

        });
    }

  }

  find(){
    return this.clients;
  }
  
   findOne(id){
      return this.clients.find(bk => bk.id == id);
   }

    created(data){
         this.clients.push(data);
        return {
            message: "created",
             data: this.clients[this.clients.length -1]
        }
    }

    delete(id){
        const index = this.clients.findIndex(bk => bk.id == id);
        const {id} = req.params
         clients.deleteOne({
            id: parseId(id) },
            (id,change) => {
              res.send({
                 id: this.clients.findIndex(bk => bk.id == id)
             });
         });
    }

    update(id, change){
        const {id} = req.params
        const body = req.body
           this.clients.updateOne({
            id: parseId(id) },
            body,
            (id,change) => {
                id.send({
                    id: this.clients.findIndex(bk => bk.id == id)
                });
            });
    }
}

module.exports = BooksServices;