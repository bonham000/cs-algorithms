var path = require('path');

module.exports = {
	entry: './practice.js',
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