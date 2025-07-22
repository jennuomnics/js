const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist/assets'),
        filename: 'bundle.js'
    },
    mode: 'development',
    devServer: {
        port: 3000,
        static: {
            directory: path.join(__dirname, 'dist'), // where index.html lives
        },
        devMiddleware: {
            publicPath: '/dist/',
        }
    },


};