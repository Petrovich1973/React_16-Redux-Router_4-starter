# React_16-Redux-starter

webpack 4.x.x
webpack.config.js
```js
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
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
        exclude: /node_modules/,
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
        new ExtractTextPlugin( "bundle.css" )
    ]
};
```
