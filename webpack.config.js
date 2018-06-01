const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
    entry: {
      app: './src/app.js'
    },
    mode: process.env.NODE_ENV || 'development',
    output: {
      path: path.resolve(__dirname, './dist'),
      filename: '[name].[hash].js'
    },
    module: {
      rules: [
        {
          test: /\.vue$/,
          loader: 'vue-loader'
        },
        {
          test: /\.(png|jpg|gif|svg)$/,
          loader: 'file-loader',
          options: {
            name: 'fonts/[name].[ext]?[hash]'
          }
        },
        {
          test: /\.css$/,
          use: [
            'vue-style-loader',
            {
              loader: 'css-loader',
              options: {
                name: 'style/[name].[ext]?[hash]'
              }
            }
          ]
        }
      ]
    },
    resolve: {
      alias: {
        'vue': 'vue/dist/vue.esm.js'
      }
    },
    devServer: {
      hot: true,
      historyApiFallback: true,
      // noInfo: true
    },
      // devtool: '#eval-source-map',
      plugins: [
      new CleanWebpackPlugin('dist'),
      new VueLoaderPlugin(),
          new HtmlWebpackPlugin({
              template: './src/index.html'
      }),
      new webpack.HotModuleReplacementPlugin()
      ]
  }
  