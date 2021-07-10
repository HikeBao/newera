const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin-webpack5');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        index: './src/demo4/index.js'
    },
    mode: 'production',
    output: {
        path: path.join(process.cwd(), 'src/demo4/dist')
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ]
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            template: path.join(process.cwd(), 'index.html')
        })
    ]
};