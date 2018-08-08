const productPriceService = module.exports;
const config = require('../config/config');
const Product = require('../models/Product');
Promise.promisifyAll(Product);
Promise.promisifyAll(Product.prototype);

productPriceService.getProduct = (id) => {
	return Product.findOne({id: id})
};

productPriceService.saveProduct = (id, user, updates) => {
	let isNew = false;
	updates.id = id;

	return Product.findOne({ id: id })
		.then(product => {

			if (!product) {
				product = new Product({
					createdBy: user
				});
				isNew = true;
			}

			updates.modifiedBy = user;
			updates.dateModified = new Date();
			_.assign(product, updates);

			return product.save();
		});
};