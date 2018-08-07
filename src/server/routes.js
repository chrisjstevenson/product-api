const config = require('./config/config');
const path = require('path');
const productController = require('./controllers/product/productController');

module.exports.http = (app) => {
	app.get('/api/product/:id', productController.getProduct);
	app.post('/api/product/:id', productController.saveProduct);
	app.put('/api/product/:id', productController.saveProduct);
};
