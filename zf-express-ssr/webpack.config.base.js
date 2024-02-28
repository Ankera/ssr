const path = require('path');

module.exports = {
  mode: 'development',
  devtool: false,
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
   externals: {
    // 检查是否有这样的配置，将其删除或注释掉
    react: "React",
    "react-dom": "ReactDOM",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react'
            ]
          }
        },
        exclude: /node_modules/
      }
    ]
  }
}