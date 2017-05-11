var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
	//配置要打包的文件
	entry:{
		index:[
			// 'webpack-hot-middleware/client',
			"./public/index.js"
		]
	},

	//配置打包后的文件信息
	output:{
		publicPath: '/dist/static',
		path:__dirname + "/public/dist/static",
		filename:"[name].js",
		chunkFilename:"[name].js"
	},

	//配置source-map
	devtool:"cheap-module-eval-source-map",
	// devtool:"cheap-module-eval-source-map",
	//配置loader
	module:{
		loaders:[
			//配置哪些文件需要通过babel进行转换
			{
				test:/\.js$/,
				exclude:/node_modules|server|dao|routes/,
				loader:"babel-loader"
			},{
				test:/\.css$/,
				loader:"style-loader!css-loader"
			},{
				test:/\.less$/,
				loader:"style-loader!css-loader!less-loader"
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
                NODE_ENV: JSON.stringify('production') //定义编译环境 开发环境development 生产环境production
            }
        }),
        new HtmlWebpackPlugin({
            //根据模板插入css/js等生成最终的HTML文件
            filename: '../index.html',
            template: './public/template/index.html',
            hash: false
        }),
		new webpack.optimize.UglifyJsPlugin(),
        // new webpack.HotModuleReplacementPlugin(),
        // new webpack.NoEmitOnErrorsPlugin()
	],

	resolve: {
        extensions: ['.js', '.jsx', '.less', '.scss', '.css']
    }
};
