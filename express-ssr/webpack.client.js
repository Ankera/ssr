const path = require("path");
const { merge } = require("webpack-merge");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const baseConfig = require("./webpack.base");

module.exports = merge(baseConfig, {
  // node 环境不需要 source-map
  devtool: 'source-map',
  entry: "./src/client",
  output: {
    path: path.resolve(__dirname, "./public"),
    filename: "js/bundle.[hash:5].js",
    clean: true,
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
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
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/bundle.[hash:5].css' // 抽离css的输出目录和名称
    }),
  ]
});
