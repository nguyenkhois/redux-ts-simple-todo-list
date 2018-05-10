const path = require('path');
const webpack = require('webpack');
const WebpackNotifierPlugin = require("webpack-notifier");

module.exports = {
    devtool: 'inline-source-map',
    mode: 'development', // whether we're building for dev or prod
    entry: './src/index.ts',// which file to begin with, 
    output: {
        path: path.resolve(__dirname, "./dist"), // what folder to put bundle in
        filename: 'bundle.js' // what name to use for bundle
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            }
        ]
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ]
    },
    plugins: [
        new webpack.DefinePlugin({'process.env.NODE_ENV':JSON.stringify('production')}),
        new WebpackNotifierPlugin({alwaysNotify: true})
    ],
    devServer: {
        contentBase: path.join(__dirname, "./dist"), // the root for the server
        watchContentBase: true, // so we reload if other stuff like CSS changes
        port: 9000, // it'll now be at http://localhost:9000
        watchOptions: {
            ignored: /node_modules/
        }
    }
};