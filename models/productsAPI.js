const mongoose = require('mongoose')
const bcrypt = require('bcrypt-nodejs')

const productSchema = new mongoose.Schema({
		product_name: { type: String },
		stock_quantity: { type: Number },
		URL: { type: String },
		des_box: { type: String },
		categories: {type: String},
		price: {type: Number }
		
	}, {collection:'products'}) 

// adds a method to a user document object to create a hashed password


const product = mongoose.model('product', productSchema)
module.exports = product