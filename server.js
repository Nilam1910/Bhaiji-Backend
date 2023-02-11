const express = require("express")
const app = express()
app.get("/",(req,res)=>{
   const today = new Date()
   res.send("Hello! This is the Bhaiji App");
});
app.listen(3000);