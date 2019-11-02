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
  externals: {
    react: {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react',
    },
    'react-dom': {
      root: 'ReactDOM',
      commonjs2: 'react-dom',
      commonjs: 'react-dom',
      amd: 'react-dom',
    },
  },
})

module.exports = options
