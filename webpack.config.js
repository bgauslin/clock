const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/js/clock.js',
  devServer: {
    contentBase: './dist'
  },
  module: {
    rules: [
      {
        test: /\.styl$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'stylus-loader' },
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader'
        ]
      }
    ]
  },
  output: {
    filename: 'clock.js',
    path: path.resolve(__dirname, 'dist'),
  }
}