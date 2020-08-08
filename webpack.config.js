const path = require('path');

module.exports = {
  entry: './src/app.js', // The first file to look into. Move your JavaScript here!
  mode: 'production',
  devServer: {
    contentBase: './public/dist',
    historyApiFallback: true,
    proxy: {
      '/graphql': {
         target: {
            host: "0.0.0.0",
            protocol: 'http:',
            port: 4000
         },
      }
   }
  },
  output: {
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js',
    path: path.resolve(__dirname, 'public/dist') // We will put the compiled file into public/dist
  },
  module: {
    rules: [
      {
        // This section tells Webpack to use Babel to translate your React into JavaScript
        test: /\.js$/, // Regex for all JavaScript file
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-react']
        }
      },
      { test: /\.css$/, use: ['style-loader', 'css-loader'] }
    ]
  }
};
