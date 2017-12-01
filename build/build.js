var webpackConfig = require('./webpack.prod.config')
var webpack = require('webpack')

webpack(webpackConfig, function (err, stats) {
  console.log(err)
})
