module.exports = {
	environment: 'production',
	consoleLogLevel: 'info',
	normalizeLogError: true,
	express: {
		hostName: 'localhost',
		port: 8080,
	},
	mongoDbConnectionString: (process.env.MONGO_DB_CONNECTION_STRING || 'mongodb://localhost/product-api'),
	redsky: {
		url: 'https://redsky.target.com/v2/pdp/tcin'
	}
};

