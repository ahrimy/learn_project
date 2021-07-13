const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: process.env.NODE_ENV || 'development',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve('dist'),
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.html$/,
        use: 'html-loader',
      },
      /*Choose only one of the following two: if you're using 
      plain CSS, use the first one, and if you're using a
      preprocessor, in this case SASS, use the second one*/
      //   {
      //     test: /\.css$/,
      //     use: ["style-loader", "css-loader"],
      //   },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  devtool: 'inline-source-map',
  devServer: {
    port: 8080,
    compress: true,
    hot: true,
    historyApiFallback: true,
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HTMLWebpackPlugin({
      template: 'src/index.html',
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
