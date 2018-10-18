const modoDev = process.env.NODE_ENV !== 'production'
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')

// npm start
// npm run build
// npm start && node dist/main.js
// npm start && node public/principal.js

module.exports = {
    mode: modoDev ? 'development' : 'production',
    // mode: 'production',          // gera código minificado
    entry: './src/principal.js',
    output: {
        filename: 'principal.js',
        path: __dirname + '/public'
    },
    devServer: {
        contentBase: "./public", 
        port: 9000
    },
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true
            }),
            new OptimizeCSSAssetsPlugin({})
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "estilo.css"
        })
    ],
    module: {
        rules: [{
            // test: /\.css$/,
            test: /\.s?[ac]ss$/, // encontra teste.css teste.scss teste.sass
                                 // \.s? começa com ponto e um s opcional, dá escape no ponto
                                 // [ac] depois vem um 'a' ou um 'c'
                                 // ss$ e termina com 'ss'
                                 // https://regex101.com/
            use: [
                MiniCssExtractPlugin.loader,    // conflita com o plugin style-loader
                // 'style-loader', // adiciona CSS a DOM injetando a tag <style>
                'css-loader', // interpreta @import, url()...
                'sass-loader',
            ]
        }, {
            test: /\.(png|svg|jpg|gif)$/,   // .png ou .svg ou .jpg ou .gif
            use: ['file-loader']
        }]
    }
}
