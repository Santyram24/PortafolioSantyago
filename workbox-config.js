module.exports = {
	globDirectory: '.',
	globPatterns: [
		'**/*.{png,html,json,css}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};