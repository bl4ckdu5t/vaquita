var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var path = require('path');

var config = {
  entry: './src/index.jsx',

  output: {
    filename: 'bundle.js',
    path: path.resolve('./dist'),
    libraryTarget: 'umd'
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader'
        })
      },
      {
        test: /\.(js|jsx)$/,
        use: ['babel-loader', 'eslint-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.(jpe?g|png|svg)$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 1500,
          }
        },
        {
          loader: 'image-webpack-loader',
          query: {
            progressive: true,
            optipng: {
              optimizationLevel: 7,
            }
          }
        }]
      }
    ]
  },

  resolve: {
    extensions: ['*', '.js', '.jsx']
  },

  devtool: "source-map",

  devServer: {
    historyApiFallback: true
  },

  plugins: [
    new ExtractTextPlugin({ filename: 'bundle.css', allChunks: true }),
    new HtmlWebpackPlugin({
      template: 'src/template.ejs'
    }),
  ]
};

module.exports = config;
