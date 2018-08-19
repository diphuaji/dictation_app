/**
 * http://usejsdoc.org/
 */
const webpack = require('webpack'); 
var devServer = require('webpack-dev-server');
var webpackOpts=require('./webpack.config.js');
var devServerOpts=webpackOpts.devServer;
var compiler = webpack(webpackOpts);
devServer.addDevServerEntrypoints(webpackOpts,devServerOpts);
var server = new devServer(compiler,devServerOpts);

server.listen(devServerOpts.port,'localhost', (err) => {
	if (err) throw err;
});
