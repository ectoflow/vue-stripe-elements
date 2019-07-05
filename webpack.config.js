const webpack = require('webpack');
const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    library: 'vue-stripe-elements',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  resolve: {
    extensions: ['.js', '.vue']
  },
  module: {
    rules: [{
      test: /\.js$/,
      use: 'babel-loader',
      include: __dirname,
      exclude: /node_modules/
    }, {
      test: /\.vue$/,
      use: 'vue-loader'
    }]
  },
  plugins: [
    // make sure to include the plugin!
    new VueLoaderPlugin()
  ]
};
