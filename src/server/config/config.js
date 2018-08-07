global._ = require('lodash');
global.Promise = require('bluebird');
global.util = require('./util');

const environment = process.env.NODE_ENV || 'development';
const config = require('./env/' + environment);
config.appName = "product-api";

// Map environment variables - these exist in the runtime environment
// and are passed in during the deployment process.
_.forEach(process.env, (value, key) => {

	if(/_[0-9]*_/g.test(key)) {
		return;
	}

	key = key.replace(/_/g, '.');
	_.set(config, key, value);
});

config.isLocal = (req) => {
	return req.connection.remoteAddress === '127.0.0.1'
		|| req.connection.remoteAddress === '::1'
		|| req.connection.remoteAddress === '::ffff:127.0.0.1'
		|| config.environment === 'testing';
};

module.exports = config;
global.log = require('./log');
