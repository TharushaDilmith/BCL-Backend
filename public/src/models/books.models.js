//add dependies
const mongoose = require("mongoose");

//create books model schema
const booksSchema = mongoose.Schema({
  name: { type: String, required: true, trim: true },
  ISBN: { type: String, required: true, trim :true },
  author: { type: String, required: true, trim: true },
  price: { type: Number, required: true },
  yearOfPublication: { type: Number, required: true },
  publisher: { type: String, required: true, trim: true },
});

//create model
const Books = mongoose.model("books", booksSchema);

//export module
module.exports = Books;
