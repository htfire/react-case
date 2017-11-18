var webpackConfig = require('./webpack.prod.config')
var webpack = require('webpack')

console.log(process.env.NODE_ENV)

webpack(webpackConfig, function (err, stats) {
  console.log(err)
})
