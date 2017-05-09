var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin'); //css单独打包
var HtmlWebpackPlugin = require('html-webpack-plugin'); //生成html

//定义地址
var ROOT_PATH = __dirname;
var PUBLIC_PATH = ROOT_PATH + '/public'; //静态文件目录
var ENTRY_PATH = PUBLIC_PATH + '/index.js'; //入口文件路径（单入口）

module.exports = {

    devtool: 'cheap-module-eval-source-map',
    entry: {
        index: [
            'webpack-hot-middleware/client',
            ENTRY_PATH
        ]
    },

    output: {
        publicPath: '/dist/static',
        path: __dirname + '/public/dist/static',
        filename: '[name].js',
        chunkFilename: '[name].[chunkhash:5].min.js'
    },

    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules|server|dao|routes/,
                loader: 'babel-loader!react-hot-loader!react-loader'
            },{
                test: /\.css$/,
                exclude: /^node_modules$/,
                loaders: ['style-loader', 'css-loader', 'autoprefixer-loader']
            },{
                test: /\.less$/,
                exclude: /^node_modules$/,
                loaders: ['style-loader', 'css-loader', 'autoprefixer-loader', 'less-loader']
            },{
                test: /\.scss$/,
                exclude: /^node_modules$/,
                loader: 'style-loader!css-loader!autoprefixer-loader!sass-loader'
            },{
                test: /\.(eot|woff|svg|ttf|woff2|gif|appcache)(\?|$)/,
                exclude: /^node_modules$/,
                loader: 'file-loader?name=[name].[ext]'
            },{
                test: /\.(png|jpg|gif)$/,
                exclude: /^node_modules$/,
                loader: 'url-loader?limit=9182&name=images/[hash:8].[name].[ext]'
            },{
                test: /\.jsx$/,
                exclude: /^node_modules$/,
                loaders: ['react-hot-loader', 'jsx-loader', 'babel-loader']
            }
        ]
    },

    plugins: [
        new webpack.DefinePlugin({
            //process.argv：当前进程的命令行参数数组。
            //process.env：指向当前shell的环境变量，比如process.env.HOME。
            'process.env':{
                NODE_ENV: JSON.stringify('development') //定义编译环境
            }
        }),
        new HtmlWebpackPlugin({
            //根据模板插入css/js等生成最终的HTML文件
            filename: '../index.html',
            template: './public/template/index.html',
            hash: false
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ],

    resolve: {
        extensions: ['.js', '.jsx', '.less', '.scss', '.css']
    }

}