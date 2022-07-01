const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, 'src/index.js'),
    output: {
        path: path.resolve(__dirname, 'output'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
    { 
      test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"
    }   
  ] 
    },
    plugins: [
        require("@babel/core").transform("code", {
            plugins: ["@babel/plugin-proposal-optional-chaining"]
            }), 
        new HtmlWebpackPlugin({
            template: "./public/index.html",
            filename: "./index.html"
         })
    ]
}