const booksRouter = require ('./books.router');


const routerApi = (app) => {
        app.use('./books', booksRouter);
}

module.exports = routerApi;