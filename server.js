//add dependies
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const BookAPI = require("./public/src/api/books.api");
const AuthorAPI = require("./public/src/api/author.api");

//create express app
const app = express();
dotenv.config();
app.use(cors());
app.use(bodyParser.json());

//set port
const PORT = process.env.PORT || 8000;

//set mongodb URI
const MONGODB_URI = process.env.MONGODB_URI;

//connect to database
mongoose.connect(MONGODB_URI, {
  useCreateIndex: true,
  useFindAndModify: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
}),
  (error) => {
    if (error) {
      console.log("Database eroor : ", error.message);
    }
  };

//set the route
app.use("/book", BookAPI());
app.use("/author",AuthorAPI());

//check database connection
mongoose.connection.once("open", () => {
  console.log("Database connected");
});

module.exports =app;
//start app
app.listen(PORT, () => {
  console.log("You are listening to Port " + PORT);
});
//djbhdd