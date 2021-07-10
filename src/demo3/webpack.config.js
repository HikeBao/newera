const path = require('path');
const VueLoaderPlugin  = require('vue-loader/lib/plugin-webpack5');
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    entry: {
        index: './src/demo3/index.js'
    },
    mode: 'production',
    output: {
        path: path.join(process.cwd(), 'src/demo3/dist')
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
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