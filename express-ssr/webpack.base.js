const path = require('path')

module.exports = {
  mode: "development",
  // // node 环境不需要 source-map
  // devtool: 'source-map',
  watch: true,
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-react',
              ]
            }
          }
        ]
      }
    ]
  }
}