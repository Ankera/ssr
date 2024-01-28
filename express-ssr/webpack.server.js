const path = require('path')
const webpackNodeExternal = require('webpack-node-externals')
const { merge } = require("webpack-merge");
const baseConfig = require('./webpack.base')

module.exports = merge(baseConfig, {
  entry: './src/server.js',
  output: {
    filename: 'server.js',
    clean: true,
  },
  target: 'node',
  externals: [webpackNodeExternal()], // 服务器上已经安装了 node_modules
})