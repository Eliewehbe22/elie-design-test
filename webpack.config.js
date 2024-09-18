// webpack.config.js
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: './src/index.ts',
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist'),
        library: 'webpack-test-elie',
        libraryTarget: 'umd',
        globalObject: 'this',
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)?$/,
                use: ['babel-loader', 'ts-loader'],
                exclude: /node_modules/,
            },
            {
                test: /\.module\.css$/i,
                use: [
                    'style-loader',  // Add this to inject CSS into the HTML
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true, // Enable CSS modules
                        },
                    },
                ],
            },
            {
                test: /\.css$/i,
                exclude: /\.module\.css$/,
                use: [
                    'style-loader', // Add this to inject CSS into the HTML
                    'css-loader',
                ],
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.css'],
    },
    externals: {
        react: 'react',
        'react-dom': 'react-dom',
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'main.css',
        }),
        new CleanWebpackPlugin(),
    ],
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin(),
            new CssMinimizerPlugin(),
        ],
    },
    mode: 'production',
};
