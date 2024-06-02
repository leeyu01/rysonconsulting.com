const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const fs = require('fs');

// Generate an entry object dynamically
const entry = {};
fs.readdirSync('./js').forEach(file => {
  if (file.endsWith('.js')) {
    const name = file.replace('.js', '');
    entry[name] = `./js/${file}`;
  }
});

module.exports = {
  mode: 'production',
  entry: entry,
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].bundle.js', // Use [name] and [contenthash] to generate unique filenames
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.html$/,
        use: ['html-loader'],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[hash].[ext]',
              outputPath: 'images',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
    }),
  ],
  performance: {
    maxAssetSize: 10000000, // 10MB
    maxEntrypointSize: 10000000, // 10MB
  },
  devtool: 'source-map',
};
