const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin-webpack5');
const HtmlWebpackPlugin = require('html-webpack-plugin');
let whichDemo = 'demo6'
module.exports = {
    entry: {
        index: `./src/${whichDemo}/index.js`
    },
    mode: 'production',
    output: {
        path: path.join(process.cwd(), `src/${whichDemo}/dist`)
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
            },
            {
                test: /\.(png|jpg|gif)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                            esModule: false
                        },
                    },
                ],
            },
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            template: path.join(process.cwd(), 'index.html')
        })
    ],
    devServer: {
        port: 8080,
        open: true,
        host: 'localhost',
        hot: true, // 开启热更新
        contentBase: path.join(process.cwd(), `src/${whichDemo}/dist`),
        writeToDisk: true, // 在开发模式下可以将内存中的文件输出到磁盘
        // proxy: {
        //     '/': {
        //         target:'http://localhost:300',
        //         changeOrigin: true
        //     }
        // }
    }

};