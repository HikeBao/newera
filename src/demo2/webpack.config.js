const path = require('path');
const VueLoaderPlugin  = require('vue-loader/lib/plugin-webpack5')
module.exports = {
    entry: './src/demo2/index.js',
    mode: 'production',
    output: {
        path: path.join(process.cwd(), 'src/demo2/dist')
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
        new VueLoaderPlugin()
    ]
};