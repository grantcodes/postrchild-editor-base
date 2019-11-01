const webpack = require('webpack')

let options = () => ({
  mode: 'production',
  entry: __dirname + '/src/index.js',
  output: {
    path: __dirname + '/build',
    libraryTarget: 'commonjs',
    filename: 'main.js',
  },
  target: 'node',
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

module.exports = options
