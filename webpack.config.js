// A unified webpack config for both DEBUG and PROD environments.
// Assume the production build unless --debug is specified in the argv.

var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var DEBUG = process.argv.indexOf('--debug') != -1;
console.log("Start " + (DEBUG ? "DEBUG" : "RELEASE") + " build ...");

var config = {
  entry: DEBUG ? ['./src/index', 'webpack-hot-middleware/client' ] : './src/index',
  output: {
    path: path.join(__dirname, DEBUG ? 'build': 'dist'),
    filename: '[name].[hash].js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: [ 'babel' ],
        query: {
          babelrc: false,
          presets: [
            'react',
            'es2015'
          ]
        },
        exclude: /node_modules/,
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          loader: [
            `css-loader?${JSON.stringify({
                sourceMap: DEBUG,
                // CSS Modules https://github.com/css-modules/css-modules
                modules: true,
                localIdentName: DEBUG ? '[name]_[local]_[hash:base64:3]' : '[hash:base64:4]',
                // CSS Nano http://cssnano.co/options/
                minimize: !DEBUG,
            })}`,
            'postcss-loader',
          ],
          fallbackLoader: 'style-loader',
        })
      },
      {
        test: /\.scss$/,
        loaders: [
          'style-loader',
          `css-loader?${JSON.stringify({ sourceMap: DEBUG, minimize: !DEBUG })}`,
          'postcss-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({ title: 'YMCA@Sammamish' }),
    new webpack.DefinePlugin({ 'process.env.NODE_ENV': DEBUG ? '"development"' : '"production"' }),
    new ExtractTextPlugin({
      filename: "style.css?[hash]-[chunkhash]-[contenthash]-[name]",
      disable: false,
      allChuncks: true
    }),
  ],
};

if (!DEBUG) {
  config.plugins.push(
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin()
  )
}

module.exports = config;
