const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry: {
		polyfills: './src/common/polyfills.ts',
		vendor: './src/common/vendor.ts',
		'01_helloworld': './src/01_helloworld/main.ts'
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
					configFileName: path.resolve(__dirname, './tsconfig.json')
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
			name: ['01_helloworld', 'vendor', 'polyfills']
		}),
		// to avoid useless warning, we need a context replacement plugin.
		// see https://github.com/angular/angular/issues/11580
		new webpack.ContextReplacementPlugin(
			/angular(\\|\/)core(\\|\/)@angular/,
			path.resolve(__dirname, '../src')
		)
	]
}