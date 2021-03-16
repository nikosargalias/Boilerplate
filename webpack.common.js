const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        index:'./src/index.js',
        styles: './src/styles/styles.css'
    },
    output: {
        filename: 'scripts/[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    plugins: [
        new HtmlWebpackPlugin({  // Also generate a test.html
            filename: 'index.html',
            template: './index.html',
            inject: "body",
            excludeChunks: ["entry points to emit script tag of"]
          })
    ],
    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: 'html-loader',
            }
        ]
    },
};