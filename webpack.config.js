const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
  entry: { main: './client/index.js' },
  output: {
    path: path.resolve(__dirname, 'public/build'),
    filename: 'bundle.js'
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
        test: /\.less$/,
        // use: [  'style-loader', MiniCssExtractPlugin.loader, 'css-loader', 'less-loader', 'postcss-loader']
        use: ExtractTextPlugin.extract(
          {
            fallback: 'style-loader',
            use: [
                'css-loader', 
                'less-loader',
                'postcss-loader'
            ]
          })
      }
    ]
  },
    plugins: [
        // new MiniCssExtractPlugin({
        //   filename: 'bundle.css',
        // }),
        new ExtractTextPlugin( "bundle.css" )
    ]
};