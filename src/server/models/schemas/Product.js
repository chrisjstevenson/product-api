const mongoose = require('mongoose');

const Product = new mongoose.Schema({
	id: {
		type: String,
		minlength: 1
	},
	current_price: {
		value: {
			type: Number
		},
		currency_code: {
			type: String
		}
	},
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