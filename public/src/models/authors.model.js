//add dependies
const mongoose = require("mongoose");

//create authors schema
const authorsSchema = mongoose.Schema({
  firstName: { type: String, required: true, trim: true },
  lastName: { type: String, required: true, trim: true },
  nationality: { type: String, required: true, trim: true },
  books: [{ type: mongoose.Schema.Types.ObjectId, ref: "books" }]
});

//create model
const Authors = mongoose.model("authors", authorsSchema);

//export module
module.exports = Authors;
