const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

const styleRules = {
    test: /\.css$/i,
    use: ['style-loader', 'css-loader'],
}

const rules = [styleRules]

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'built')
    },
    mode: 'none',
    plugins: [
        new HtmlWebpackPlugin({ template: "index.html" })
    ],
    devServer: {
        open: true, // open webpage with correct port page
        // compress: true,
        port: 9000,
    },
    module : {
        rules: rules,
    }
}