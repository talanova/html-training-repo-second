const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlWebpackPartialsPlugin = require("html-webpack-partials-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const BrowserSyncPlugin = require("browser-sync-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const webpack = require("webpack");
const path = require("path");

module.exports = {
  entry: {
    main: path.resolve(__dirname, "./js/index.js"),
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
      template: "./pages/index.html",
      filename: "index.html",
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "./pages/archive.html"),
      filename: "archive.html",
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "./pages/post.html"),
      filename: "post.html",
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "./pages/feedback.html"),
      filename: "feedback.html",
    }),

    new HtmlWebpackPartialsPlugin([
      {
        path: path.join(__dirname, "./pages/partials/post-list-main.html"),
        template_filename: ["index.html", "archive.html"],
        location: "main",
        priority: "replace",
      },
      {
        path: path.join(__dirname, "./pages/partials/post-main.html"),
        template_filename: ["post.html"],
        location: "main",
        priority: "replace",
      },
      {
        path: path.join(__dirname, "./pages/partials/feedback-main.html"),
        template_filename: ["feedback.html"],
        location: "main",
        priority: "replace",
      },
      {
        path: path.join(__dirname, "./pages/partials/header.html"),
        template_filename: ["archive.html", "post.html", "feedback.html"],
        location: "header",
        priority: "replace",
      },
      {
        path: path.join(__dirname, "./pages/partials/footer.html"),
        template_filename: [
          "index.html",
          "archive.html",
          "post.html",
          "feedback.html",
        ],
        location: "footer",
        priority: "replace",
      },
    ]),

    new CopyPlugin({
      patterns: [
        {
          from: "./media/img",
          to: "media/img",
        },
      ],
    }),

    new MiniCssExtractPlugin({
      filename: "./style.css",
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
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      /* {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: "asset/inline",
      },/ */
      {
        test: /\.(scss|css)$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },
};
