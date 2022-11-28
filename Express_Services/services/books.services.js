const faker = require('@faker-js/faker');

class BooksServices {
   
    constructor(){
       this.books = []
       this.generete();

    }



 generete(){
    
    for (let i = 0; i< 10; i++){
        this.book.push({
            id: i + 1,
            name: faker.commerce.productName(),
            precio: faker.commerce.price()

        });
    }

  }

  find(){
    return this.books;
  }
  
   findOne(id){
      return this.books.find(bk => bk.id == id);
   }

    created(data){
         this.books.push(data);
        return {
            message: "created",
             data: this.books[this.books.length -1]
        }
    }

    delete(id){
        const index = this.books.findIndex(bk => bk.id == id);
        const {id} = req.params
           books.deleteOne({
            id: parseId(id) },
            (id,change) => {
                res.send({
                    id: this.books.findIndex(bk => bk.id == id)
                });
            });
    }

    update(id, change) {
        const {id} = req.params
        const body = req.body
           books.updateOne({
            id: parseId(id) },
            body,
            (id,change) => {
                id.send({
                    id: this.books.findIndex(bk => bk.id == id)
                });
            });
    }
}

module.exports = BooksServices;