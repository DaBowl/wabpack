const path = require('path');
// 自动生成bundle文件
const HtmlWebpackPlugin = require('html-webpack-plugin');
// 自动清理生成的无用的历史文件
// const { CleanWebpackPlugin } = require('clean-webpack-plugin');

// 开发模式热更新

const webpack = require('webpack')

module.exports = {
    // entry:'./src/index.js',
    entry:{
        // app:'./src/index.js',
        // print:'./src/print.js'
        app:'./src/index.js'
    },
    devtool:'inline-source-map',
    devServer:{
        contentBase:'./dist',
        hot:true
    },
    plugins: [
        // new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
        title: 'Output Management'
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
      }
    // module:{
    //     rules:[
    //         {
    //             test:/\.css$/,
    //             use:[
    //                 'style-loader',
    //                 'css-loader'
    //             ]
    //         },
    //         {
    //             test:/\.(png|svg|jpg|gif)$/,
    //             use:[
    //                 'file-loader'
    //             ]
    //         },{
    //             test:/\.xml$/,
    //             use:[
    //                 "xml-loader"
    //             ]
    //         }
    //     ]
    // }
}