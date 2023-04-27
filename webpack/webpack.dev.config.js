const common = require("./webpack.common.config");
const { merge } = require("webpack-merge");
const path = require("path");
const config = {
  mode: "development",
  devServer: {
    port: 9000,
    static: {
      directory: path.resolve(__dirname, "../dist"),
    },
    devMiddleware: {
      index: "index.html",
      writeToDisk: true, // helpful to see the dist folder
    },
    client: {
      overlay: true,
    },
    liveReload: false,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  }, 
  output:{
    filename: "bundle.js",
  }
};
module.exports = merge(common, config);
// to run specified webpack config file use npx webpack --config webpack.dev.config.js
