module.exports = {
  entry: './src/main.js',

  output: {
    path: './_public',
    filename: 'app.js'
  },

  module: {
    loaders: [
      { test: require.resolve('react'), loader: 'expose?React' },
      { test: /src\/(.*)\.(js|jsx)$/, loader: 'babel-loader' },
      { test: /\.css$/, loader: 'style-loader!css-loader' }
    ]
  },

  resolve: {
    extensions: ['', '.js', '.jsx']
  }
};
