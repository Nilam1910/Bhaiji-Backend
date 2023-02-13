const mongoose = require("mongoose");

const bhaijiSchema = new mongoose.Schema({
   imgURL: { type: String, required: false},
	name: { type: String, required: true },
   information: { type: String, required: false },
	likes: { type: String, default: 0 },
	tags: [{ type:String }]
},
   {timestamps: true }
);

const Bhaiji = mongoose.model("Bhaiji", bhaijiSchema)

module.exports = Bhaiji;
