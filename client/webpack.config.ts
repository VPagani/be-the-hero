const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

import type { Configuration } from "webpack";
import {} from "webpack-dev-server";

const config: Configuration = {
    entry: "./src/index.tsx",

    resolve: {
        extensions: [ ".js", ".ts", ".tsx" ]
    },

    module: {
       rules: [
            {
                test: /\.tsx?$/,
                loader: "ts-loader",
                exclude: /node_modules/,
            },
            {
                test: /\.css$/i,
                use: [ 'style-loader', 'css-loader' ],
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [ 'file-loader' ],
            },
       ] 
    },

    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: "main.js",
        publicPath: "/"
    },

    plugins: [
        new HtmlWebpackPlugin({ title: "Be The Hero" })
    ],

    devServer: {
        publicPath: "/",
        contentBase: "./dist",
        hot: true,
        historyApiFallback: true,
    },
};

export default config;