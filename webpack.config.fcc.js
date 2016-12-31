var path = require('path');

module.exports = {
	entry: './__challenge__dev.js',
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