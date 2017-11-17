// 一个常见的`webpack`配置文件
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {
    entry: __dirname + "/app/index.js", //已多次提及的唯一入口文件
    output: {
        path: __dirname + "/build",
        filename: "bundle-[hash].js"
    },
    devtool: 'none',
    devServer: {
        // contentBase: "./public", //本地服务器所加载的页面所在的目录
        historyApiFallback: true, //不跳转
        inline: true,
        hot: true,
        // colors: true //终端中输出结果为彩色
    },
    resolve:{
        extensions:['.js','.jsx']
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                // 这里是匹配条件，每个选项都接收一个正则表达式或字符串
                // test 和 include 具有相同的作用，都是必须匹配选项
                // exclude 是必不匹配选项（优先于 test 和 include）
                // 最佳实践：
                // - 只在 test 和 文件名匹配 中使用正则表达式
                // - 在 include 和 exclude 中使用绝对路径数组
                // - 尽量避免 exclude，更倾向于使用 include
        
                // issuer: { test, include, exclude },
                // issuer 条件（导入源）
        
                enforce: "pre",
                enforce: "post",
                // 标识应用这些规则，即使规则覆盖（高级选项）
        
                loader: "babel-loader",
                // 应该应用的 loader，它相对上下文解析
                // 为了更清晰，`-loader` 后缀在 webpack 2 中不再是可选的
                // 查看 webpack 1 升级指南。
        
                options: {
                  presets: ["es2015"]
                },
                // loader 的可选项
            }, {
                test: /\.less$/, 
                exclude: /node_modules/, 
                loader: 'style-loader!css-loader!postcss-loader!less-loader' ,
            }, {
                test: /\.css$/, 
                exclude: /node_modules/, 
                loader: 'style-loader!css-loader!postcss-loader' ,
            }, {
                test:/\.(png|woff|woff2|svg|ttf|eot)($|\?)/i, 
                loader:'url-loader?limit=5000' // 限制大小小于5k
            }, { 
                test:/\.(png|gif|jpg|jpeg|bmp)$/i, 
                loader:'url-loader?limit=5000' 
            }  // 限制大小5kb
            
        ]
    },
    plugins: [
        new webpack.BannerPlugin('版权所有，翻版必究'),
        new HtmlWebpackPlugin({
            template: __dirname + "/app/index.html" //new 一个这个插件的实例，并传入相关的参数
        }),
        new webpack.optimize.OccurrenceOrderPlugin(),
        // new webpack.optimize.UglifyJsPlugin(),
        // new ExtractTextPlugin("style.css")
         // 热加载插件
         new webpack.HotModuleReplacementPlugin(),

        // 打开浏览器
        new OpenBrowserPlugin({
        url: 'http://localhost:8080'
        }),

        // 可在业务 js 代码中使用 __DEV__ 判断是否是dev模式（dev模式下可以提示错误、测试报告等, production模式不提示）
        new webpack.DefinePlugin({
        __DEV__: JSON.stringify(JSON.parse((process.env.NODE_ENV == 'dev') || 'false'))
        })
    ]
}