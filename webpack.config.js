const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
// const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    context: path.resolve(__dirname, 'src'),

    entry: './index.js',

    output: {
        clean: true,
        filename: '[name].[contenthash].js',
        assetModuleFilename: "assets/[hash][ext][query]",
    },

    devtool: "source-map",

    devServer: {
        static: {
            directory: path.join(__dirname, 'src'),
        },
        compress: true,
        port: 9000,
    },

    plugins: [
        new HTMLWebpackPlugin({
            template: './index.html',
            minify: {
                removeComments: true,
                collapseWhitespace: false,
            }
        }),

        new MiniCssExtractPlugin({
            filename: 'styles.scss',
        }),

        // new CopyWebpackPlugin({
        //     patterns: [
        //         {
        //             from: path.resolve(__dirname, 'src/img'),
        //             to: path.resolve(__dirname, 'dist/img')
        //         }
        //     ]
        // }),
    ],

    module: {
        rules: [
            {
                test: /\.js$/,
                include: path.resolve(__dirname, 'src/js'),
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    }
                }
            },

            {
                test: /\.(eot|ttf|woff|woff2)$/,
                type: 'asset/resource'
            },

            {
                test: /\.s[ac]ss$/i,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader",
                ],
            },

            {
                test: /\.(png|svg|jpg|jpeg|webp)$/i,
                type: 'asset/resource'
            },
        ]
    }
}