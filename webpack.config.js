const path = require('path');
const config = require('./paths.config');


module.exports = {
	entry: path.resolve(__dirname, config.jsBaseFilePath),
	output: {
		path: path.resolve(__dirname, config.jsDestinationDirPath),
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.m?js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env']
					}
				}
			}
		]
	}
};