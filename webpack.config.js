const webpack = require('webpack');
const path = require('path');

const config = {
    entry: ['./src/index.js', './src/scss/main.scss'],
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'static')
    },
    watch: true,
    watchOptions: {
        ignored: /woff/,
    },
    devtool: 'eval',
    mode: 'production',
    module: {
        rules: [{
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.scss$/,
                use: [{
                        loader: 'file-loader',
                        options: {
                            name: '[name].css',
                            outputPath: 'assets/css/'
                        }
                    },
                    {
                        loader: 'extract-loader'
                    },
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'postcss-loader'
                    },
                    {
                        loader: 'sass-loader'
                    }
                ]
            },
            {
                test: /.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'assets/fonts/', // where the fonts will go
                        // publicPath: '../'       // override the default path
                    }
                }]
            },
            {
                // Exposes jQuery for use outside Webpack build
                test: require.resolve('jquery'),
                use: [{
                    loader: 'expose-loader',
                    options: 'jQuery'
                }, {
                    loader: 'expose-loader',
                    options: '$'
                }]
            },
            {
                // Exposes jQuery for use outside Webpack build
                test: require.resolve('velocity-animate'),
                use: [{
                    loader: 'expose-loader',
                    options: 'velocity'
                }, {
                    loader: 'expose-loader',
                    options: 'Velocity'
                }]
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            'window.jQuery': 'jquery',
            Velocity: "velocity-animate"
        })
    ]
}
module.exports = config;