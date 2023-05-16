const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.join(__dirname,'./src/index.ts'),
    devtool: 'inline-source-map',
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(mp3|wav)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'audios/[name][ext]',
                }
            },
            {
                test: /\.(ttf|eot|woff2?)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'fonts/[name][ext]',
                }
            },
        ],
    },

    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    performance: {
        hints: false
    },
    devServer: {
        static: './dist/',
        proxy: [
            {
                host: 'localhost',
                port: '8080',
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: '指法练习',
            template: path.join(__dirname,'./src/index.html'),
        })
    ],
};