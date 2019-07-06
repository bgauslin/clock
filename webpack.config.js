const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// TODO: Autoprefixer, minify CSS, uglify/minify JS, dev/prod config.
module.exports = {
  // mode: 'development',
  devServer: {
    contentBase: './dist'
  },
  entry: './src/js/clock.js',
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Clock',
      meta: {
        description: 'DESCRIPTION GOES HERE',
        viewport: 'width=device-width,initial-scale=1',
        'apple-mobile-web-app-capable': 'yes',
      },
      hash: true,
    }),
    new CopyPlugin([
      { from: 'src/apache' },
      { from: 'src/icons' },
    ]),
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
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'stylus-loader' },
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader',
        ]
      }
    ]
  }
}