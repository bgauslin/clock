const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');

module.exports = {
  entry: {
    clock: './src/js/clock.ts',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyPlugin([
      { from: 'src/root' },
      { from: 'src/pwa', to: 'pwa' },
    ]),
    new Dotenv(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/html/index.pug',
    }),
    new WorkboxPlugin.InjectManifest({
      swSrc: 'src/js/sw.js',
      swDest: 'sw.js',
      exclude: [/\.htaccess$/, /robots\.txt$/],
    }),
  ],
  node: {
    fs: 'empty',
  },
  resolve: {
    extensions: ['.js', '.ts']
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/typescript',
            ],
            plugins: [
              'babel-plugin-transform-es2015-modules-commonjs',
            ],
          }
        }
      },
      {
        test: /\.styl$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: process.env.NODE_ENV === 'development',
              reloadAll: true,
            },
          },
          'css-loader',
          'postcss-loader',
          'stylus-loader',
        ],
      },
      {
        test: /\.pug$/,
        use: [
          'pug-loader',
        ]
      },
    ]
  }
}