const path = require('path');
module.exports = {
    entry: './src/demo1/index.js',
    mode: 'production',
    output: {
        path: path.join(process.cwd(), 'src/demo1/dist')
    }
};