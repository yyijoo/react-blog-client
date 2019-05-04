const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
require("@babel/polyfill");

module.exports = {
  entry: ["@babel/polyfill", "./src/index.js"],
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "index_bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: {
          loader: "file-loader"
        }
      }
    ]
  },
  resolve: {
    modules: [path.join(__dirname, "src"), "node_modules"]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    })
  ]
  // devServer: {s
  //   port: 8000
  // }
};
