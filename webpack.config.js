const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry: {
		polyfills: './src/polyfills.ts',
		vendor: './src/vendor.ts',
		bundle: './src/main.ts'
	},
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, './src/wpk')
	},
	resolve: {
		extensions: ['.ts', '.tsx', '.js']
	},
	module: {
		rules: [{
			test: /\.ts$/,
			exclude: /node_modules/,
			use: [{
				loader: 'awesome-typescript-loader',
				options: {
					configFileName: path.resolve(__dirname, './src/tsconfig.json')
				}
			}]
		}, {
			test: /\.css$/,
			use: ExtractTextPlugin.extract({
				fallback: 'style-loader',
				use: 'css-loader?minimize&sourceMap'
			})
		}, {
			test: /\.scss$/,
			use: ExtractTextPlugin.extract({
				fallback: 'style-loader',
				use: 'css-loader?minimize&sourceMap!sass-loader?sourceMap'
			})
		}]
	},
	devtool: 'source-map',
	plugins: [
		new ExtractTextPlugin('[name].css'),
		new webpack.optimize.CommonsChunkPlugin({
			name: ['bundle', 'vendor', 'polyfills']
		}),
	]
}