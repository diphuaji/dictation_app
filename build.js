/**
 * http://usejsdoc.org/
 */
const webpack = require('webpack');
const devServer = require('webpack-dev-server');
const webpackOpts = require('./webpack.config.js');

const devServerOpts = webpackOpts.devServer;
const compiler = webpack(webpackOpts);
devServer.addDevServerEntrypoints(webpackOpts, devServerOpts);
const server = new devServer(compiler, devServerOpts);

server.listen(devServerOpts.port, 'localhost', (err) => {
  if (err) throw err;
});
