var path = require('path');

module.exports = {
    mode: 'production',
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'chargify-rest',
        libraryTarget: 'umd',
        globalObject: 'this',
        library: 'chargify'
    },
    externals: {
        'axios': {
            commonjs: 'axios',
            commonjs2: 'axios',
            amd: 'axios',
            root: '_'
        }
    },
    module: {
        rules: [
            {
                test: /\.(js)$/,
                exclude: /(node_modules|bower_components)/,
                use: 'babel-loader'
            }
        ]
    }
}