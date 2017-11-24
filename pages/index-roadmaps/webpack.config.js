const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;

const sourcePath = 'src';
const distAbsPath = path.resolve(__dirname, 'dist');

module.exports = function(env = {}) {
  return {
    entry: {
      indexRoadmaps: `./${sourcePath}/js/hyperapp/main.js`
    },
    output: {
      filename: 'js/[name].bundle.js',
      path: distAbsPath,
      publicPath: '/'
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          },
          exclude: /node_modules/
        }, {
          test: /(\.css|\.scss)$/,
          use: ExtractTextPlugin.extract({
            fallback: "style-loader",
            use: [
              {
                loader: "css-loader",
                options: {
                  sourceMap: true,
                  //modules: true,
                  //importLoaders: true,
                  //localIdentName: "[name]__[local]___[hash:base64:5]"
                }
              }, {
                loader: "postcss-loader",
                options: {
                  plugins: function() {
                    return [require("autoprefixer")];
                  },
                  sourceMap: true
                }
              }, {
                loader: "sass-loader",
                options: {
                  sourceMap: true
                }
              }
            ]
          }),
          exclude: /node_modules/
        }
      ]
    },
    resolve: {
      extensions: ['.js', '.jsx'],
      modules: [path.resolve(__dirname, "src"), "node_modules"] // about resolve.modules https://webpack.js.org/configuration/resolve/#resolve-modules
    },
    plugins: [
      new ExtractTextPlugin("css/[name].css"),
      new CopyWebpackPlugin([{
        from: path.resolve(__dirname, sourcePath, 'imgs'),
        to: path.join(distAbsPath, 'imgs'),
      }]),
      // Make sure that the plugin is after any plugins that add images
      new ImageminPlugin({
        disable: process.env.NODE_ENV !== 'production', // Disable during development
        test: /\.(jpe?g|png|gif|svg)$/i,
      }),
      // new HtmlWebpackPlugin({
      //   title: '',
      //   filename: '',
      //   template: path.join(sourcePath, ''),
      //   xhtml: true,
      //   hash: true,
      //   inject: true
      // })
    ],
    devtool: 'source-map'
  }
}
