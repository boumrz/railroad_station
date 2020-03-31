const path = require('path');
const express = require('express');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const app = express();

app.use (express.static (path.join (__dirname, 'dist')));
app.get ('/ *', function (req, res) {
    res.sendFile (path.join (__dirname, 'dist', 'index.html'));
});

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.join(__dirname, "/dist"),
        filename: "index_bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ["babel-loader"]
            },
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                use: ["babel-loader"]
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ],
    },
    devServer: {
        headers: { 'Access-Control-Allow-Origin': '*' },
        proxy: {
            '/tickets': 'http://localhost:8000',
            '/trains': 'http://localhost:8000',
            '/purchase': 'http://localhost:8000',
        }
        
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        })
    ],
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            src: path.resolve(__dirname, './src')
        }
    }
};