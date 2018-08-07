module.exports.parseSafe = function (str) {
	return _.attempt(JSON.parse.bind(null, str));
};