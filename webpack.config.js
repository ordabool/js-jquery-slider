module.exports = {
  entry: './src/js/dupli-slider.js',
  output: {
    path: __dirname + '/dist',
    filename: 'slider.bundle.js',
    library: 'js-jquery-slider',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [ 'babel-loader' ]
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      }
    ]
  }
};
