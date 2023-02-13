const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
   imgURL: { type: String, required: false},
	name: { type: String, required: true },
   information: { type: String, required: false },
	likes: { type: String, default: 0 },
	tags: [{ type:String }]
},
   {timestamps: true }
);

const Product = mongoose.model("Product", productSchema)

module.exports = Product;
