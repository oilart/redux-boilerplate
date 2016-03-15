/*eslint no-var: 0 */
var path = require('path');
var autoprefixer = require('autoprefixer');
var webpack = require('webpack');

module.exports = {
  entry: ['./src/client/main.jsx'],
  target: 'web',
  output: {
    path: path.join(__dirname, '../dist/client'),
    filename: 'client.js',
    publicPath: "/"
  },
  module: {
    preLoaders: [{
      test: /\.js$/,
      loaders: ['eslint'],
      include: path.join(__dirname, '../src/client')
    }],
    loaders: [{
      test: /\.jsx$|\.js$/,
      loaders: ['babel'],
      include: path.join(__dirname, '../src/client')
    }, {
      test: /\.styl$/,
      loader: 'style!css!postcss!stylus'
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  postcss: function() {
    return [autoprefixer];
  },
  plugins: [
    /** react and redux must be minified in production env to be build without dev assets
      and to include peformace opts
    */
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"'
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ]
};
