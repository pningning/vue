const path = require('path')

//导入html-webpack-plugin文件
const htmlWebpackPlugin = require('html-webpack-plugin')

//导入webpack
const webpack = require('webpack')
module.exports = {
    entry: path.join(__dirname, './src/main.js'),
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'bundle.js'
    },
    plugins: [
        new htmlWebpackPlugin({
            template: path.join(__dirname, './src/index.html'), //表示把哪个文件复制放到内容中
            filename: 'index.html' //指定内存中文件的名称，自定义
        }),
        new webpack.HotModuleReplacementPlugin()
    ],//配置
    devServer: {
        open: true,
        port: 3000,
        host: '127.0.0.1',
        hot: true
    }
}