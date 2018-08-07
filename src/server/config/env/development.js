module.exports = {
	environment: 'development',
	consoleLogLevel: 'debug',
	normalizeLogError: true,
	express: {
		hostName: 'localhost',
		port: 8000,
		sessionSecret: 'supersecret!'
	},
	allowBypassLogin: true,
	mongoDbConnectionString: (process.env.MONGO_DB_CONNECTION_STRING || 'mongodb://localhost:27017/product-api'),
	jwt: {
		key: 'ma1EitheLee8iS5hquob1Kee',
		lifetimeInSeconds: 86400,
	},
	redsky: {
		url: 'https://redsky.target.com/v2/pdp/tcin'
	}
};

