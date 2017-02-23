const webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  output: {
    path: './dist/',
    filename: 'index.js',
    library: 'vue-stripe-elements',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  resolve: {
    extensions: ['', '.js', '.vue']
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel',
      include: __dirname,
      exclude: /node_modules/
    }, {
      test: /\.vue$/,
      loader: 'vue'
    }]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      sourceMap: false,
      mangle: true,
      compress: {
          warnings: false
      }
    })
  ]
};
