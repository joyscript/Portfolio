const path = require('path');

module.exports = {
  entry: './js/index.js',
  output: {
    filename: 'main-min.js',
    path: path.resolve(__dirname),
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
};
