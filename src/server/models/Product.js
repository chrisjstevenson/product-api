const mongoose = require('mongoose');
const Product = require('./schemas/Product');

module.exports = mongoose.model('Product', Product);