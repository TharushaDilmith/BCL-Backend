const express = require('express')
const router = express.Router();
const controller = require('../controllers/books.controller');

module.exports = function(){
    router.post ("/add",controller.addNewBook);
    router.get("/",controller.viewBooks);
    router.post("/calculate",controller.bookPriceCalculation);
    router.delete("/delete/:id",controller.deleteBook);
    router.put("/update/:id",controller.updateBook);
    router.get("/:id",controller.getBookByID);
    return router;
}