   
const db = require("../models")

// get all the products
   const index = (req,res) => {
   // res.send("Get route is working")
   db.Product.find({}, (error, products) => {
      if(error) return res.status(400).json({ error: error.message });
      return res.status(200).json({
         products,
         requestedAt: new Date().
         toLocaleDateString()
      });
         
   })
}

// create a product with req.body
const create = (req,res)=> {
   db.Product.create(req.body, (error, createdProduct) => {
      if(error) return res.status(400).json({ error: error.message });
  
      return res.status(200).json(createdProduct); //  .json() will send proper headers in response so client knows it's json coming back
    });
}
module.exports = {
   index,
   create,
   // destroy,
} 