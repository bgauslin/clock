const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/js/clock.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyPlugin([
      { from: 'src/root' },
    ]),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/html/index.pug',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.styl$/,
        exclude: /node_modules/, 
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          'stylus-loader',
        ]
      },
      {
        test: /\.pug$/,
        use: [
          'raw-loader',
          'pug-html-loader',
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ['file-loader']
      }
    ]
  }
}