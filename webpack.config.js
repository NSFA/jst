var path = require('path');
module.exports = {
	entry: {
		'astpl': path.join(__dirname, './src/index.js')
	},
	output: {
		path: path.join(__dirname, './dist/'),
		filename: '[name].js'
	}
};