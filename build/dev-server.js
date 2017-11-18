var webpackConfig = require('./webpack.dev.config.js')
var webpack = require('webpack')
var WebpackDevServer = require('webpack-dev-server')
webpackConfig.entry.app.unshift('webpack-dev-server/client?http://localhost:8080/', 'webpack/hot/dev-server')
var compiler = webpack(webpackConfig)

var config = require('../config')
var server = new WebpackDevServer(compiler, {
  // contentBase:config.build.assetsRoot,
  // publicPath: config.dev.assetsPublicPath,
  historyApiFallback: true,
  hot: true,
  inline: true
})
server.listen(8080)
