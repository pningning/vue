const path = require('path')
// 1. 导入 在内存中生成页面的webpack插件
const htmlWebpackPlugin = require('html-webpack-plugin')

//导入清除旧文件的工具
const cleanPlugin = require('clean-webpack-plugin')

//导入webpack
const webpack = require('webpack')

//导入抽取样式的插件
const extractTextPlugin = require('extract-text-webpack-plugin')

//导入压缩样式表插件
const optimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')

// 使用Node语法，向外暴露配置对象，从而，让webpack运行的时候，加载指定的配置
// 为什么可以使用Node语法？因为 webpack 这个工具，就是基于node构建的；
module.exports = {
  entry: {
    app: path.join(__dirname, './src/main.js'), // 项目的入口文件
    vendors: ['jquery']  //用到的第三方包的名称
  },
  output: {
    path: path.join(__dirname, './dist'), // 输出路径
    filename: 'js/bundle.js' // 输出文件名
  }, // 打包好的文件的数据配置
  plugins: [ // 插件配置节点
    new htmlWebpackPlugin({ // 创建一个 htmlWebpackPlugin 的实例对象
      template: path.join(__dirname, './src/index.html'), // 指定模板页面路径
      filename: 'index.html', // 指定内存中生成的HTMl文件名称
      minify: {//压缩html
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
      }
    }),

    new cleanPlugin(['dist']),// 指定每次重新发布的时候要删除的文件

    new webpack.optimize.CommonsChunkPlugin({//抽离第三方包和自己写的js文件
      name: 'vendors',//从哪个入口名称中抽离，跟上面入口文件有的配置名称有关联
      filename: 'js/vendors.js'//指定抽离出来的第三方包的文件名叫什么
    }),

    new webpack.optimize.UglifyJsPlugin({//压缩js文件的插件配置webpack提供
      compress: {
        warnings: false //压缩完毕的代码中移除警告信息
      }
    }),

    new extractTextPlugin('css/style.css'),

    new optimizeCssAssetsPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.css$/, use: extractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader'],
          publicPath: '../'
        })
      },
      {
        test: /\.less$/, use: extractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'less-loader'],
          publicPath: '../'
        })
      },
      {
        test: /\.scss/, use: extractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader'],
          publicPath: '../'
        })
      },
      { test: /\.jpg|png|gjf|bmg/, use: 'url-loader?limit=1&name=images/[hash:5]--[name].[ext]' },
      { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ }
    ]
  }
}