const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin');
module.exports = {
    context: path.resolve(__dirname, 'src'),

    entry: './index.js',

    output: {
        clean: true,
        filename: '[name].[hash].js',
        path: path.resolve(__dirname, 'dist')
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

        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, 'src/img'),
                    to: path.resolve(__dirname, 'img')
                }
            ]
        }),
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

            // {
            //     test: /\.(svg|png|jpg|jpeg|webp)$/,
            //     use: [
            //         {
            //             loader: 'file-loader?name=./static/[name].[ext]'
            //         },
            //     ]
            // },

            // {
            //     test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
            //     type: 'asset/resource'
            // },

            {
                test: /\.(png|svg|jpg|jpeg|webp)$/i,
                type: 'asset/resource'
            },
        ]
    }
}