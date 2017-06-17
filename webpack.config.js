const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry: {
		polyfills: './src/common/polyfills.ts',
		vendor: './src/common/vendor.ts',
		'01_helloworld': './src/01_helloworld/main.ts',
		'02_list': './src/02_list/main.ts',
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
		}, {
			test: /\.png$/,
			use: ["url-loader?mimetype=image/png"]
		}, {
			test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
			use: [{
				loader: 'url-loader',
				options: {
					name: '[name].[ext]',
					// publicPath: './wpk/',
					limit: 10000,
					mimetype: 'application/font-woff'
				}
			}]
		}, {
			test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
			use: [{
				loader: 'url-loader',
				options: {
					name: '[name].[ext]',
					// publicPath: './wpk/',
					limit: 10000,
					mimetype: 'application/octet-stream'
				}
			}]
		}, {
			test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
			use: [{
				loader: 'file-loader',
				options: {
					name: '[name].[ext]',
					publicPath: './wpk/'
				}
			}]
		}, {
			test: /(fontawesome-webfont|glyphicons-halflings-regular)\.svg(\?v=\d+\.\d+\.\d+)?$/,
			use: [{
				loader: 'url-loader',
				options: {
					name: '[name].[ext]',
					// publicPath: './wpk/',
					limit: 10000,
					mimetype: 'image/svg+xml'
				}
			}]
		}]
	},
	//devtool: 'source-map',
	plugins: [
		new ExtractTextPlugin({filename: '[name].css', ignoreOrder: true}),
		new webpack.optimize.CommonsChunkPlugin({
			name: ['01_helloworld', '02_list', 'vendor', 'polyfills']
		}),
		// to avoid useless warning, we need a context replacement plugin.
		// see https://github.com/angular/angular/issues/11580
		new webpack.ContextReplacementPlugin(
			/angular(\\|\/)core(\\|\/)@angular/,
			path.resolve(__dirname, '../src')
		)
	]
}