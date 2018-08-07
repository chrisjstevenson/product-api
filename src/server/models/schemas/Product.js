const mongoose = require('mongoose');

const Product = new mongoose.Schema({
	id: {
		type: String,
		minlength: 1
	},
	displayName: String,
	price: Number,
	createdBy : {
		type : String,
	},
	modifiedBy : {
		type : String,
	},
	dateModified : {
		type : Date,
		default : Date.now
	},
});

module.exports = Product;