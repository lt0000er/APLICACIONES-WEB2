const faker = require('@faker-js/faker');

class UsersServices {
   
    constructor(){
       this.users = []
       this.generete();

    }



 generete(){
    
    for (let i = 0; i< 10; i++){
        this.users.push({
            id: i + 1,
            name: faker.commerce.productName(),
            precio: faker.commerce.price()

        });
    }

  }

  find(){
    return this.users;
  }
  
   findOne(id){
      return this.users.find(bk => bk.id == id);
   }

    created(data){
         this.users.push(data);
        return {
            message: "created",
             data: this.users[this.users.length -1]
        }
    }

    delete(id){
        const index = this.users.findIndex(bk => bk.id == id);
        const {id} = req.params
        books.deleteOne({
         id: parseId(id) },
         (users,id) => {
             res.send({
                 id: this.users.findIndex(bk => bk.id == id)
             });
         });
    }

    update(id, users){
        const {id} = req.params
        const body = req.body
           books.updateOne({
            id: parseId(id) },
            body,
            (users,id) => {
                id.send({
                    id: users.findIndex(bk => bk.id == id)
                });
            });
    }
}

module.exports = BooksServices;