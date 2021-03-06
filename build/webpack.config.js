var path = require('path'),
    APP_NAME = require(path.resolve(__dirname, '../config.json')).APP_NAME,
    ngAnnotatePlugin = require('ng-annotate-webpack-plugin'),
    ExtractTextPlugin = require('extract-text-webpack-plugin')
    HTMLWebpackPlugin = require('html-webpack-plugin'),
    CleanWebpackPlugin = require('clean-webpack-plugin');

var config = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'index.bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.(xml|html)$/,
        use: 'raw-loader'
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: 'css-loader'
        })
      }
    ]
  },
  plugins: [
    new HTMLWebpackPlugin({ 
      inject: 'body',
      filename: '../dist/index.html',
      template: '!!html-loader?interpolate!./src/index.html'
    }),
    new CleanWebpackPlugin(['../dist']),
    new ExtractTextPlugin('styles.css'),
  ],
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devtool: 'source-map',
  node: {
    __filename: true
  }
}

module.exports = config;