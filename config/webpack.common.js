const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const paths = require('./paths');

module.exports = function (env) {
    return {
        entry: {
            polyfills: './polyfills.js',
            vendor: "./vendor.js",
            app: "./src/main.js"
        },

        resolve: {
            extensions: [".js", ".jsx"]
        },

        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
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
                            options: {
                                minimize: true,
                                caseSensitive: true,
                                removeAttributeQuotes: false
                            }
                        }
                    ]
                },
                
                {
                    test: /\.(eot|svg|ttf|woff|woff2|bmp|gif|jpe?g|png)$/,
                    loader: "url-loader",
                    options: {
                        limit: 10000,
                        name: `${paths.outputMediaPath}[name].[ext]`
                    }
                },
                {
                    test: /\.(ico)$/,
                    use: "file-loader?name=[name].[ext]"
                }
            ]
        },

        plugins: [
            new HtmlWebpackPlugin({
                template: "./public/index.html",   // Input FileName
                filename: "./index.html"    // Output FileName
            }),
            new webpack.ProvidePlugin({
                $: 'jquery',
                jQuery: 'jquery',
                "window.jQuery": 'jquery'
            })
        ],

        optimization: {
            splitChunks: {
                chunks: "all"
            }
        }
    };
}