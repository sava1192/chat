var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './app/app.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      loader: 'babel-loader',
      test: path.join(__dirname, 'app'),
      query: {
        presets: 'es2015',
      },
    }]
  },
  plugins: [
    // Avoid publishing files when compilation fails
    new webpack.NoErrorsPlugin(),
    // new webpack.optimize.MinChunkSizePlugin({sourceMap: true})
  ],
  externals: {
    fb: 'var FB'
  },
  stats: {
    // Nice colored output
    colors: true
  },
  // Create Sourcemaps for the bundle
  devtool: 'source-map',
};
