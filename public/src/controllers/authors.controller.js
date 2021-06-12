const Author = require("../models/authors.model");

//add an author
const addAuthor = async (req, res) => {
  if (req.body) {
    const author = new Author(req.body);
    await author
      .save()
      .then((data) => {
        res.status(200).send({ data: data });
      })
      .catch((error) => {
        res.status(404).send({ error: error.message });
      });
  }
};

//get authors
const viewAuthors = async(req,res)=>
{
  await Author.find({})
  .then((data)=>{
    res.status(200).send({data:data});
  })
  .catch((error)=>{
    res.status(404).send({error:error.message});
  })
}
const updateAuthor = async(req,res)=>{
  if(req.params.id && req.body.id)
  {
    await Author.findByIdAndUpdate(req.params.id,{ $addToSet:{
      books:[req.body.id]}
    })
    .then((data)=>{
      res.status(200).send({data:data});
    })
    .catch((error)=>{
      res.status(404).send({error:error.message});
    })
  }
}

module.exports = {
  addAuthor,
  viewAuthors,
  updateAuthor
};
