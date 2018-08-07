const productAttributeService = module.exports;
const config = require('../config/config');
const request = Promise.promisify(require('request'));
Promise.promisifyAll(request);

productAttributeService.fetchProduct = (id) => {

	const options = {
		url: `${config.redsky.url}/${id}`,
		strictSSL: false,
	};

	log.info(`Fetching Product data for id ${id}`);

	return request.getAsync(options)
		.then(httpResult => {
			log.info(`Product data request completed.  Response: ${httpResult.statusCode}`);
			return util.parseSafe(httpResult.body);
		})
		.then(res => res);
};