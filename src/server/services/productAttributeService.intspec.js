const expect = require('chai').expect;
const config = require('../config/config');
const Promise = global.Promise = require('bluebird');
Promise.promisifyAll(require('request'));
const productAttributeService = require('./productAttributeService');

describe('Product Attribute Service', function () {

	this.timeout(20000);

	it('should have title.', function (done) {
		productAttributeService.fetchProduct('13860428')
			.then(response => {
				expect(response.product.item.product_description.title).to.equal('The Big Lebowski (Blu-ray)');
				done();
			});
	});

	it('should have offerPrice.', function (done) {
		productAttributeService.fetchProduct('13860428')
			.then(response => {
				expect(response.product.price.offerPrice.price).to.be.a('number');
				done();
			});
	})
});
