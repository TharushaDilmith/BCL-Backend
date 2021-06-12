const express = require('express')
const router = express.Router();
const controller = require('../controllers/authors.controller');

module.exports = function()
{
    router.post('/add',controller.addAuthor);
    router.get('/',controller.viewAuthors);
    router.put('/update/:id',controller.updateAuthor);
    return router;
}
