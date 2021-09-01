const path = require("path");

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
    mode: 'none',
    optimization: {
        usedExports: true
    },
    devServer: {
        static: {
            directory: path.join(__dirname, ""),
        },
        compress: true,
        port: 9000,
    },
    module : {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resources',
            }
        ]
    }
}