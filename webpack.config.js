const HtmlWebPackPlugin = require('html-webpack-plugin');

const sassRule = {
  test: /\.s[ac]ss$/i,
  use: [
    // Creates `style` nodes from JS strings
    'style-loader',
    // Translates CSS into CommonJS
    'css-loader',
    // Compiles Sass to CSS
    'sass-loader',
  ],
};

const jsBabelRule = {
  test: /\.(js|jsx)$/,
  exclude: /node_modules/,
  use: {
    loader: 'babel-loader',
  },
};

const htmlRule = {
  test: /\.html$/,
  use: [
    {
      loader: 'html-loader',
    },
  ],
};

module.exports = {
  module: {
    rules: [
      sassRule,
      jsBabelRule,
      htmlRule
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: './index.html',
    }),
  ],
  devServer: {
    historyApiFallback: true,
  },
};
