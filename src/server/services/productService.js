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

			// Product is a thing, but we might not have a price currently stored for it
			// so use the system of record as a default and override from mongodb if required.
			let currentPrice = productAttributeResult.product.price.listPrice.price;
			if(productPriceResult) {
				currentPrice = productPriceResult.current_price.value;
			}

			// Return a new object with only the attributes we want to display
			return {
				id: id,
				name: productAttributeResult.product.item.product_description.title,
				current_price: {
					value: currentPrice,
					currency_code: 'USD'
				}
			}
		})
};