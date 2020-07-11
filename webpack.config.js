const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
var path = require("path");

module.exports = {
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader",
                        options: { minimize: true }
                    }
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    "file-loader"
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader", 
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename: "./index.html"
        }),
        new HtmlWebPackPlugin({
            template: "./src/signup.html",
            filename: "signup.html"
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        })
    ]
}

// module.exports = {
//     module: {
//         rules: [
//             {
//                 test: /\.html$/,
//                 use: [
//                     {
//                         loader: "html-loader",
//                         options: { minimize: true }
//                     }
//                 ]
//             },
//             {
//                 test: /\.(png|svg|jpg|gif)$/,
//                 use: [
//                     "file-loader"
//                 ]
//             },
//             {
//                 test: /\.scss$/,
//                 use: [
//                     "style-loader",
//                     "css-loader",
//                     "sass-loader", 
//                 ]
//             },
//         ]
//     },
//     plugins: [
//         new HtmlWebPackPlugin({
//             template: "./src/index.html",
//             filename: "./index.html"
//         }),
//         new MiniCssExtractPlugin({
//             filename: "[name].css",
//             chunkFilename: "[id].css"
//         })
//     ]
// }