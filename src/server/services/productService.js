const productService = module.exports;
const config = require('../config/config');
const productAttributeService = require('./productAttributeService');
const productPriceService = require('./productPriceService');

productService.getProduct = (id) => {
	return Promise.join(productAttributeService.fetchProduct(id), productPriceService.getProduct(id),
		(productAttributeResult, productPriceResult) => {

			// No product, then return nothing
			if (!productAttributeResult.product.item.tcin) {
				return null;
			}

			// Product is a thing, but we don't have a priced currently stored for it
			if(!productPriceResult) {
				productPriceResult = {
					price: productAttributeResult.product.price.listPrice.price,
				}
			}

			// Return a new object with only the attributes we want to display
			return {
				id: id,
				name: productAttributeResult.product.item.product_description.title,
				current_price: {
					value: productPriceResult.price,
					currency_code: 'USD'
				}
			}
		})
};