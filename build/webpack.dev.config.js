var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var OpenBrowserPlugin = require('open-browser-webpack-plugin')

var utils = require('./utils')
var config = require('../config')

module.exports = {
  entry: path.resolve(__dirname, '../src/main.js'),
  output: {
    path: path.resolve(__dirname, '../dist/'),
    publicPath: '/',
    filename: 'build.js'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['es2015']
        }
      }, {
        test: /\.(js|jsx)?$/,
        exclude: /node_modules/,
        loader: 'eslint-loader'
      }, {
        test: /\.less$/,
        exclude: /node_modules/,
        // loader: 'style-loader!css-loader!postcss-loader!less-loader'
        // loader: ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader!less-loader', {
        //   publicPath: '../'
        // })
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader!postcss-loader!less-loader',
          publicPath: '/'
        })
      }, {
        test: /\.css$/,
        exclude: /node_modules/,
        loader: 'style-loader!css-loader!postcss-loader'
      }, {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      }, {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: config.build.index,
      template: 'index.html',
      inject: true,
      chunksSortMode: 'dependency'
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin('styles.css'),
    // 可在业务 js 代码中使用 __DEV__ 判断是否是dev模式（dev模式下可以提示错误、测试报告等, production模式不提示）
    new webpack.DefinePlugin({
      __DEV__: JSON.stringify(JSON.parse((process.env.NODE_ENV === 'dev') || 'false'))
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ]
}
