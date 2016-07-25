var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].[hash].js'
  },
  plugins: [
    new HtmlWebpackPlugin({ title: 'YMCA@Sammamish' }),
    new webpack.DefinePlugin({ 'process.env.NODE_ENV': '"production"' }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin(),
  ],
  module: {
    loaders: [ {
      test: /\.js$/,
      loaders: [ 'babel' ],
      query: {
        presets: ['react', 'es2015']
      },
      include: path.join(__dirname, 'src')
    }, {
      test: /\.json$/,
      loader: 'json'
    } ]
  }
}
