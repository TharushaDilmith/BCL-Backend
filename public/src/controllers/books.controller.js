const { response } = require("express");
const { Promise } = require("mongoose");
const { listenerCount, findByIdAndDelete, findByIdAndUpdate } = require("../models/books.models");
const Book = require("../models/books.models");

//add book controller
const addNewBook = async (req, res) => {
  if (req.body) {
    const book = new Book(req.body);
    await book
      .save()
      .then((data) => {
        res.status(200).send({ data: data });
      })
      .catch((error) => {
        res.status(404).send({ error: error.message });
      });
  }
};

//view books controller
const viewBooks = async (req, res) => {
  await Book.find({})
    .then((data) => {
      res.status(200).send({ data: data });
    })
    .catch((error) => {
      res.status(404).send({ error: error.message });
    });
};

const bookPriceCalculation = async (req, res) => {
  try {
    if (req.body.book) {
      const books = [];

      let totalamount = 0;
      for (const item of req.body.book) {
        let book = await Book.findById(item).select("price");
        books.push(book.price);
      }

      books.map((item) => {
        totalamount += item;
      });

      res.status(200).send({ data: totalamount });
    }
  } catch (error) {
    res.status(500).send({error:error.message});
  }
};

const deleteBook = async(req,res)=>{
  try {
    if(req.params.id)
    {
      await Book.findByIdAndDelete(req.params.id)
      .then((data)=>{
        res.status(200).send({data:data});
      })
    }
  } catch (error) {
    res.status(500).send({error:error.message});
  }
}

const updateBook = async(req,res)=>{
  try {
    if(req.params.id && req.body)
    {
      await Book.findByIdAndUpdate(req.params.id,{
        name :req.body.name,
        ISBN:req.body.ISBN,
        author:req.body.author,
        price:req.body.price,
        yearOfPublication:req.body.yearOfPublication,
        publisher:req.body.publisher
      })
      .then((data)=>{
        res.status(200).send({data:data});
      })
    }
  } catch (error) {
    res.status(500).send({error:error.message})
  }
}
const getBookByID = async(req,res)=>{
  try {
    if(req.params.id)
    {
      await Book.findById(req.params.id)
      .then((data)=>{
        res.status(200).send({data:data});
      })
    }
  } catch (error) {
    res.status(500).send({error:error.message});
  }
}

//export module
module.exports = {
  addNewBook,
  viewBooks,
  bookPriceCalculation,
  deleteBook,
  updateBook,
  getBookByID,
};
