   const { bhaijis } = require(".");
const db = require("../models")

   const index = (req,res) => {
   // res.send("Get route is working")
   db.Bhaiji.find({}, (error, bhaijis) => {
      if(error) return res.status(400).json({ error: error.message });
      return res.status(200).json({
         bhaijis,
         requestedAt: new Date().
         toLocaleDateString()
      });
         
   })
}

const create = (req,res)=> {
   db.Bhaiji.create(req.body, (error, createdBhaiji) => {
      if(error) return res.status(400).json({ error: error.message });
  
      return res.status(200).json(createdBhaiji); //  .json() will send proper headers in response so client knows it's json coming back
    });
}
module.exports = {
   index,
   create
} 