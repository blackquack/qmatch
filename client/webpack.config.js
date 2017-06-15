// https://scotch.io/tutorials/setup-a-react-environment-using-webpack-and-babel

const path = require('path');

//plugin that generates html with script included
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: './src/index.html',
    filename: 'index.html',
    inject: 'body'
})

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve('dist'),
        filename: 'dist.js'
    },
    module: {
        loaders: [
            { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
            { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
            { test: /\.css$/, loader: ['style-loader', 'css-loader'] },
            { test: /\.jsx?$/, loader: "class-to-classname", exclude: /node_modules/ },
            { test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/, loader: 'file-loader' },
        ],
        noParse: [/.*(xlsjs\.js).*/],
    },
    plugins: [HtmlWebpackPluginConfig],
    // required for xlsx to work with webpack
    node: {
        fs: 'empty'
    },
    externals: [
        {
            './cptable': 'var cptable',
            './dist/cpexcel': "import './dist/cpexcel'"
        }
    ]
}