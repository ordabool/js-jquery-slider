module.exports = {
  entry: './src/js/slider.js',
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
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['babel-preset-env']
          }
        }
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      }
    ]
  }
};
