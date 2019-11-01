const webpack = require('webpack')

let options = () => ({
  mode: 'production',
  entry: __dirname + '/src/index.js',
  output: {
    path: __dirname + '/build',
    library: 'PostrchildEditorBase',
    libraryTarget: 'umd',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [{ loader: 'isomorphic-style-loader' }, { loader: 'css-loader' }],
      },
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.jsx', '.js', '.css'],
  },
  optimization: {
    minimize: true,
  },
})

let clientConfig = options()
clientConfig.target = 'web'
clientConfig.output.filename = 'web.js'

let serverConfig = options()
serverConfig.target = 'node'
delete serverConfig.output.library
serverConfig.output.libraryTarget = 'commonjs'
serverConfig.output.filename = 'index.js'

module.exports = [clientConfig, serverConfig]
