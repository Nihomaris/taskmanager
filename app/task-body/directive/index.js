module.exports = function(module) {
	require('./taskDirective.js')(module);
	require('./taskCreateDirective.js')(module);
	require('./taskBodyDirective.js')(module);
}