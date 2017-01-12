var path = require('path');

module.exports = {
	entry: './code-challenges/commerce-api/api.js',
	output: {
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.js/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			}
		]
	}
};