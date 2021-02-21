const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const BrowserSyncPlugin = require("browser-sync-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const webpack = require("webpack");
const path = require("path");

module.exports = {
  entry: {
    main: path.resolve(__dirname, "./js/index.js"),
    post: path.resolve(__dirname, "./js/post.js"),
    archive: path.resolve(__dirname, "./js/archive.js"),
    feedback: path.resolve(__dirname, "./js/feedback.js"),
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "[name].js",
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    hot: true,
    port: 9000,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./pages/post.html",
      filename: "post.html",
      chunks: ["post"],
    }),
    new HtmlWebpackPlugin({
      template: "./pages/archive.html",
      filename: "archive.html",
      chunks: ["archive"],
    }),
    new HtmlWebpackPlugin({
      template: "./pages/feedback.html",
      filename: "feedback.html",
      chunks: ["feedback"],
    }),
    new HtmlWebpackPlugin({
      template: "./pages/index.html",
    }),
    new CopyPlugin({
      patterns: [
        {
          from: "./media/img",
          to: "media/img",
        },
      ],
    }),
    new CleanWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new BrowserSyncPlugin(
      {
        host: "localhost",
        port: 3000,
        proxy: "http://localhost:9000/",
      },
      {
        reload: false,
      }
    ),
    new MiniCssExtractPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },
};
