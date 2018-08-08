'use strict';
const config = require('../../config/config');
const productController = module.exports;
const productService = require('../../services/productService');
const productPriceService = require('../../services/productPriceService');

/** POST /product/:id **/
productController.getProduct = (req, res) => {
	return productService.getProduct(req.params.id)
		.then(productResult => {

			if(!productResult) {
				res.status(404).send('Not found');
			}
			log.info(`Returning Product with id: ${productResult.id}`);
			res.status(200).json(productResult);
		})
		.catch(err => {
			log.error(err);
			return res.status(500).send({error: "An unknown error has occurred."})
		})
};


/** POST /product **/
productController.saveProduct = (req, res) => {

	log.info(`Request to save product:  ${JSON.stringify(req.body)}`);

	return productPriceService.saveProduct(req.params.id, 'api-user', req.body)
		.then(savedProduct => {
			return res.status(200).json({ message: "Product data updated successfully"});
		})
		.catch(err => {
			log.error(err);
			return res.status(500).send({error: ""});
		});
};