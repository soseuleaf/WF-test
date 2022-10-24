const path = require('path');

module.exports = {
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  entry: {
    main: './src/index',
  },
  output: {
    path: path.join(__dirname, "public", "assets"),
    filename: "bundle.js",
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dev'),
    },
    compress: true,
    port: 9000,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: '/node_modules/',
        loader: 'babel-loader',
        options:{
          presets: [
            "@babel/preset-env", ["@babel/preset-react", {"runtime": "automatic"}]
          ]
        }
      },
    ],
  },
};