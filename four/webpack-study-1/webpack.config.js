const path = require('path')
//导入webpack
const webpack = require('webpack')
//导入把html文件托管到内存的插件
const htmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    entry: path.join(__dirname, './src/main.js'),
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'bundle.js'
    },
    plugins: [//插件的数组
        new htmlWebpackPlugin({
            template: path.join(__dirname, './src/index.html'),
            filename: 'index.html'
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {//配置webpack运行时候的指令
        open: true,
        port: 3000,
        host: '127.0.0.1',
        hot: true
    }
}