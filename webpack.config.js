const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

if ( process.env.NODE_ENV === 'test' ){
  require('dotenv').config({path: '.env.test'});
} else if (process.env.NODE_ENV === 'development'){
  require('dotenv').config({path: '.env.development'});
}

module.exports = (env) => {
  const isProduction = env === 'production';
  const MiniCssExtract = new MiniCssExtractPlugin({filename:'styles.css'});
  const Analyze = false ? new BundleAnalyzerPlugin() : ()=>{};

  return {
    entry: ['babel-polyfill', './src/index.js'],
    output: {
      path: path.join(__dirname, 'public', 'dist'),
      filename: 'bundle.js'
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader'
          }
        },
        {
          test: /\.s?css$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                publicPath: path.join(__dirname, 'public', 'dist'),
              }
            },
            {
              loader: 'css-loader',
              options: {
                sourceMap: true
              }
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true
              }
            }
          ]
        },
      ]
    },
    plugins:[
      new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
      new webpack.DefinePlugin({
        'process.env.DATABASE_USER': JSON.stringify(process.env.DATABASE_USER),
        'process.env.DATABASE_PASSWORD': JSON.stringify(process.env.DATABASE_PASSWORD),
        'process.env.DATABASE_HOST': JSON.stringify(process.env.DATABASE_HOST),
        'process.env.DATABASE_PORT': JSON.stringify(process.env.DATABASE_PORT),
        'process.env.DATABASE_NAME': JSON.stringify(process.env.DATABASE_NAME)
      }),
      MiniCssExtract,
      Analyze
    ],
    devtool: isProduction ? 'source-map' : 'inline-source-map',
    devServer: {
      contentBase: path.join(__dirname, 'public'),
      historyApiFallback: true,
      publicPath: '/dist/'
    }
  }
}