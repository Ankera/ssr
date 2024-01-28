const path = require('path')
const { merge } = require("webpack-merge");
const baseConfig = require('./webpack.base')

module.exports = merge(baseConfig, {
  entry: './src/client',
  output: {
    path: path.resolve(__dirname, './public'),
    filename: 'js/bundle.[hash:5].js',
    clean: true,
    publicPath: '/'
  },
})