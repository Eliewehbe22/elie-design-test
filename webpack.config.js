const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
    entry: './src/index.ts',
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist'),
        library: 'webpack-test-elie',
        clean: true,
        libraryTarget: 'umd',
        globalObject: 'this',
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)?$/,
                use: [
                    'babel-loader',
                    'ts-loader',
                    'css-modules-typescript-loader'
                ],
                exclude: /node_modules/,
            },
            {
                test: /\.module\.css$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-modules-typescript-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            importLoaders: 1,
                        },

                    }
                ],
            },
            {
                test: /\.css$/i,
                exclude: /\.module\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'style-loader',
                    'css-loader',
                    'css-loader?modules',

                ],
            },

        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js',".css"],
    },
    mode: 'production',
    externals: [
        {
            react: 'react',
            'react-dom': 'react-dom',}
    ],
    target:"web",
    stats: { errorDetails: true },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css',
        }),
        new CopyWebpackPlugin({
            patterns: [
                { from: 'src/component/*.css', to: '[name][ext]' },
            ],
        }),
        new CssMinimizerPlugin(),
        new CleanWebpackPlugin(),
    ],
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin(),
            new CssMinimizerPlugin(),
        ],
    },
};