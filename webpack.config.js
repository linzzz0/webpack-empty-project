const path = require('path');
const _$htmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack')

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, './dist/js/'),
        filename: '[name].js'
    },
    devServer:{
        historyApiFallback:true,
        hot:true,
        inline:true,
        progress:true,
        port:9090 //端口你可以自定义
    },
    plugins: [
        new _$htmlWebpackPlugin({
            hash:true,
            template: path.resolve(__dirname, './dist/index.html')
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader', 'css-loader'
                ]
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: [
                        'env'
                    ]
                }
            }
        ]
    }
}