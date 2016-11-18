var path = require('path');
var webpack = require('webpack');

module.exports = {
  context: __dirname,
  entry: "./Tetris/Tetris.jsx",
  output: {
    filename: "./Tetris/logic/bundle.js"
  },
  module: {
    loaders: [
      {
        test: [/\.jsx?$/, /\.js?$/],
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  devtool: 'source-maps',
  resolve: {
    extensions: ["", ".js", ".jsx" ]
  }
};
