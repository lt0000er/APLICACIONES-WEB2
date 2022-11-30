const faker = require('@faker-js/faker');

class AuthorsServices {
   
    constructor(){
       this.books = []
       this.generete();

    }



 generete(){
    
    for (let i = 0; i< 10; i++){
        this.authors.push({
            id: i + 1,
            name: faker.commerce.productName(),
            precio: faker.commerce.price()

        });
    }

  }

  find(){
    return this.authors;
  }
  
   findOne(id){
      return this.authors.find(bk => bk.id == id);
   }

    created(data){
         this.authors.push(data);
        return {
            message: "created",
             data: this.books[this.authors.length -1]
        }
    }

    delete(id){
        const index = this.authors.findIndex(bk => bk.id == id);
        const {id} = req.params
        authors.deleteOne({
         id: parseId(id) },
         (id,authors) => {
             res.send({
                 id: this.authors.findIndex(bk => bk.id == id)
             });
         });
    }

    update(id, change){
        const {id} = req.params
        const body = req.body
           authors.updateOne({
            id: parseId(id) },
            body,
            (id,change) => {
                id.send({
                    id: this.authors.findIndex(bk => bk.id == id)
                });
            });
    }
}

module.exports = BooksServices;