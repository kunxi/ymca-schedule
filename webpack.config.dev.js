var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [ './src/index', 'webpack-hot-middleware/client' ],
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({ title: 'YMCA@Sammamish' }),
    new webpack.DefinePlugin({ 'process.env.NODE_ENV': '"development"' })
  ],
  module: {
    loaders: [ {
      test: /\.js$/,
      loaders: [ 'babel' ],
      query: { presets:['react'] },
      include: path.join(__dirname, 'src')
    } ]
  }
}
