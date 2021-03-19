const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const Dotenv = require('dotenv-webpack');

module.exports = {
    entry: { index: path.resolve(__dirname, "src", "index.js") },
    output: {
        path: path.resolve(__dirname, "build")
    },
    mode: "development",
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.scss$/,
                use: ["style-loader", "css-loader", "sass-loader"]
            },
            {
                test: /\.(png|jpe?g|gif|webp|awif|svg)$/i,
                use: [
                  {
                    loader: 'file-loader',
                  },
                ],
              },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ["babel-loader"]
            }
        ],
    },
    devServer: {
        historyApiFallback: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "src", "index.html"),
        }),
        new Dotenv({
            path: './.env', // load this now instead of the ones in '.env'
            safe: true, // load '.env.example' to verify the '.env' variables are all set. Can also be a string to a different file.
            allowEmptyValues: true, // allow empty variables (e.g. `FOO=`) (treat it as empty string, rather than missing)
            systemvars: true, // load all the predefined 'process.env' variables which will trump anything local per dotenv specs.
            silent: true, // hide any errors
            defaults: false // load '.env.defaults' as the default values if empty.
          })
    ]
};