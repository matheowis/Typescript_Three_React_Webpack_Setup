const path = require('path');

const PATHS = {
  src: path.join(__dirname, './src'),
  dist: path.join(__dirname, './dist')
}

module.exports = {
  entry:{
    "bundle": PATHS.src + '/index.ts'
  },
  // devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /(\.tsx)|(\.ts)?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    // filename: 'bundle.js',
    // path: path.resolve(__dirname, 'dist'),
    path: PATHS.build,
    filename: '[name].js',
    library: 'InitiateCanvasTest',
    libraryTarget: 'umd'
    // chunkFilename:'bundle.chunk.js',
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    historyApiFallback: true
  }
};