const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
  entry: './index.js',
  output: {
    filename: '../build/api/bundle.js'
  },
  plugins: [
    new UglifyJSPlugin()
  ]
}
