var webpackConfig = require('./webpack.dev.config.js')
var webpack = require('webpack')
var WebpackDevServer = require('webpack-dev-server')
var opn = require('opn')

const options = {
  contentBase: './',
  hot: true,
  host: 'localhost',
  inline: true
}

WebpackDevServer.addDevServerEntrypoints(webpackConfig, options)
const compiler = webpack(webpackConfig)
const server = new WebpackDevServer(compiler, options)

server.listen(5000, 'localhost', () => {
  console.log('dev server listening on port 5000')
})
opn('http://localhost:5000')
