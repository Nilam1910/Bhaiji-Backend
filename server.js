
// app.get("/",(req,res)=>{
//    const today = new Date()
//    res.send(` <h1>Hello! This is the Bhaiji App<h1>,
//    <p>Thank you for using our site<p>,<p>${today}<p>`)
// });


/* == Express Modules == */
const express = require ("express")

/* == Internal Modules == */
const routes = require("./routes")

/* == Express Instance == */
const app = express()

/* == Port == */
const PORT = 3000

/* == DB connection == */
require('./config/db.connection');

/* == Middleware == */
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// app.use(cors("*"))
// // app.use(express.static(path.join(__dirname,'public')))

/* == method override == */
// const methodOverride  = require('method-override')

/* == Routes == */
app.use("/products", routes.products)
// app.use("/users", routes.users)

/* == Bcrypt == */
// const bcrypt = require('bcrypt')

/* == Express SEssion == */
// const session = require('express-session')

//import cors
// const cors = require('cors')

// require('dotenv').config()



/* == Session Secret == */
// const SESSION_SECRET = process.env.SESSION_SECRET
// app.use(session({
// 	secret: SESSION_SECRET,
// 	resave: false,
// 	saveUninitialized: false
// }))


app.listen(PORT, () => {
   console.log('🎉🎊', 'celebrations happening on port', PORT, '🎉🎊',)
});

