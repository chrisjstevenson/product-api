const expect = require('chai').expect;
const config = require('../config/config');
const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const productPriceService = require('./productPriceService');

describe('Product Price Service ', function () {

	before(function (done) {
		mongoose.connect(config.mongoDbConnectionString);
		const db = mongoose.connection;
		db.on('error', console.error.bind(console, '[x] Mongodb connection error'));
		db.once('open', function () {
			console.log(`[*] Connected to mongodb`);
			done();
		});
	});

	after(done => {
		mongoose.connection.close(done);
	});

	it('should create product.', (done) => {
		const newProduct = {
			id: '111',
			current_price: {
				value: 99.99,
				currency_code: 'USD'
			},
		};

		productPriceService.saveProduct(newProduct.id, 'intspecs', newProduct)
			.then(result => {
				expect(result.id).to.equal(newProduct.id);
				expect(result.createdBy).to.equal('intspecs');
				expect(result.modifiedBy).to.equal('intspecs');
				expect(result.current_price.value).to.equal(99.99);
				done();
			})
	});

	it('should update product.', (done) => {
		const updatedProduct = {
			id: '111',
			current_price: {
				value: 1.00,
				currency_code: 'USD'
			},
		};

		productPriceService.saveProduct(updatedProduct.id, 'intspecs', updatedProduct)
			.then(result => {
				expect(result.id).to.equal(updatedProduct.id);
				expect(result.createdBy).to.equal('intspecs');
				expect(result.modifiedBy).to.equal('intspecs');
				expect(result.current_price.value).to.equal(1.00);
				done();
			})
	});

	it('should fetch product.', (done) => {
		productPriceService.getProduct('111')
			.then(result => {
				expect(result.id).to.equal('111');
				expect(result.current_price.value).to.be.a('number');
				expect(result.current_price.value).to.equal(1.00);
				done();
			});
	});

	it('should return nothing if no product.', (done) => {
		productPriceService.getProduct('222')
			.then(result => {
				expect(result).to.equal(null);
				done();
			})
	});
});