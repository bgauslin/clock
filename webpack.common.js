const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// TODO: Autoprefixer, minify CSS
module.exports = {
  entry: './src/js/clock.js',
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
  output: {
    path: path.resolve(__dirname, 'dist'),
  },
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