const webpackNodeExternal = require('webpack-node-externals')
const { merge } = require("webpack-merge");
const baseConfig = require('./webpack.base')

module.exports = merge(baseConfig, {
  // node 环境不需要 source-map
  devtool: 'hidden-source-map',
  entry: './src/server.js',
  output: {
    filename: 'server.js',
    clean: true,
    publicPath: "/",
  },
  target: 'node',
  externals: [webpackNodeExternal()], // 服务器上已经安装了 node_modules
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          { 
            loader: 'isomorphic-style-loader',
          }, // 只处理hash
          {
            loader: "css-loader",
            // options: {
            //   modules: {
            //     localIdentName: '[name]__[hash:5]'
            //   }
            // }
          },
        ],
      },
      {
        test: /\.png$/,
        type: 'asset/resource',
      }
    ]
  }
})