const path = require('path');
const nodeExternal = require('webpack-node-externals');
module.exports = {
    target: 'node', //告诉webpack打包的node环境文件
    mode: 'development',
    entry: './src/server/index.js',
    output: {
        path: path.resolve('build'),
        filename: 'server.js'
    },
    // 他负责检查所有引入的核心模块，并且告诉webbpack不要把核心模块打包到server.js里面去
    externals: [
        nodeExternal()
    ],
    module: {
        rules: [{
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            options: {
                presets: [
                    "@babel/preset-env",
                    "@babel/preset-react"
                ]
            }
        }]
    }
};