const path = require('path')
const { merge } = require("webpack-merge");
const baseConfig = require('./webpack.base')

module.exports = merge(baseConfig, {
  // node 环境不需要 source-map
  devtool: 'source-map',
  entry: './src/server.js',
  output: {
    filename: 'server.js',
    clean: true,
  },
  target: 'node',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          { loader: 'isomorphic-style-loader' }, // 只处理hash
          {
            loader: "css-loader",
            options: {
              modules: {
                localIdentName: '[name]__[hash:5]'
              }
            }
          },
        ],
      },
    ]
  }
})