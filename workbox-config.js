module.exports = {
	globDirectory: '.',
	globPatterns: [
		'**/*.{js,html,PNG,json}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};