
const path = require('path');

module.exports = {
  entry: `${path.resolve(__dirname, 'src')}/index.js`,
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    fallback: {
      util: require.resolve('util/'),
    },
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader', options: { importLoaders: 1 },
          },
          'postcss-loader',
        ],
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              fallback: require.resolve('file-loader'),
            },
          },
        ],
      },
    ],
  },

};