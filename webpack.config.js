const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/js/react-main.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: './',
    filename: 'bundle.js'
  },
  devServer: {
    inline: true,
    port: 3000
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['@babel/preset-env', '@babel/preset-react']
        }
      }, {
        test: /\.(s*)css$/,
        use: ['style-loader','css-loader']
       }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Grimoire',
      template: './src/template/index.html',
      filename: './index.html'
    })
  ]
};
