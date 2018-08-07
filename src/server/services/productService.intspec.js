const expect = require('chai').expect;
const config = require('../config/config');
const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const productService = require('./productService');

describe('Product Service', function () {

	before(function (done) {
		mongoose.connect(config.mongoDbConnectionString, { useNewUrlParser: true });
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


	it('should get aggregate product.', (done) => {
		productService.getProduct(13860428)
			.then(result => {
				expect(result.id).to.equal(13860428);
				expect(result.current_price.value).to.be.a('number');
				expect(result.current_price.currency_code).to.equal('USD');
				done();
			});
	});

	it('should return nothing if no product attributes.', (done) => {
		productService.getProduct(222)
			.then(result => {
				expect(result).to.equal(null);
				done();
			})
	});

	it('should return a reasonable default value if no product price', (done) => {
		productService.getProduct(53589104)
			.then(result => {
				expect(result.id).to.equal(53589104);
				expect(result.current_price.value).to.be.a('number');
				expect(result.current_price.currency_code).to.equal('USD');
				done();
			})
	});
});
