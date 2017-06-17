'use strict';

var express = require('express'); // charge ExpressJS
var serveIndex = require('serve-index');

const webpack = require('webpack');
const webpackConfig = require('./webpack.config.js');
const webpackDevMiddleware = require('webpack-dev-middleware');

var app = express();

webpackConfig.output.path = '/';
const compiler = webpack(webpackConfig);
app.use('/src/wpk/', webpackDevMiddleware(compiler, {}));

app.use(express.static('.'));
app.use(serveIndex('.', {
	icons: true
}));

app.use(function (req, res, next) {
	console.log('404: Page not Found', req.url);
	next();
});

app.listen(8000, function () {
	console.log('server started on port 8000');
});