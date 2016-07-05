const webpack = require('webpack')
const express = require('express')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const config = require('./webpack.config.dev')

const app = express()
const port = 3080
const compiler = webpack(config)

app.use(webpackDevMiddleware(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}))
app.use(webpackHotMiddleware(compiler))

// serving the schedule data
app.use('/data', express.static('data'));

app.listen(port, (error) => {
  if (error) {
    console.error(error)
  } else {
    console.info('🌎  Open http://localhost:%s/ in a web browser', port)
  }
})
