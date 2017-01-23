var path = require('path');

module.exports = {
	entry: './code-challenges/flatten-array/flatten-solutions.js',
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