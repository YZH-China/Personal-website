var webpack = require('webpack');
var express = require('express');
var config = require('./webpack.config');
var proxyMiddleware = require('http-proxy-middleware');

var app = express();
var compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
    publicPath: config.output.publicPath,
    hot: true,
    historyApiFallback: true,
    inline: true,
    progress: true,
    stats: {
        colors: true
    }
}));

//代理服务器
app.use('/shopro', proxyMiddleware({
    target: 'http://dev.fe.ptdev.cn',
    changeOrigin: true
}))

app.use(require('webpack-hot-middleware')(compiler));

//将除了/shopro之外的所有路由全部返回到index.html
app.get('*', function(req, res){
    res.sendFile(__dirname + '/public/dist/index.html');
})

app.listen(8088, function(){
    console.log('正常打开端口8088，监听文件变化');
})