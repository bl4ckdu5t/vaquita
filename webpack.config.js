var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var dotenv = require('dotenv').config();

var path = require('path');
var entries = ['./src/index.jsx'];

if(process.env.NODE_ENV === 'development'){
  entries.push('webpack-hot-middleware/client?path=__webpack_hmr&timeout=4000');
}
console.log(entries);

var config = {
  entry: entries,

  output: {
    filename: 'bundle.js',
    path: path.resolve('./public'),
    publicPath: '/'
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

  plugins: [
    new ExtractTextPlugin({ filename: 'bundle.css', allChunks: true }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new HtmlWebpackPlugin({
      template: 'src/template.ejs'
    }),
  ]
};

module.exports = config;
