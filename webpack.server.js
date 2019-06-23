const path = require('path');
const webPackNodeExternals = require('webpack-node-externals');

module.exports = {
    target: 'node',
    entry: './server.js',
    mode: 'development',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build'),
        publicPath: '/build'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                exclude: '/node_modules/',
                options: {
                    presets: [
                        'react',
                        'stage-0'
                    ]
                }
            },{
    test: /\.(jpe?g|png|gif|svg|ttf|woff|eot)$/i, 
    loader: "file-loader?name=/public/icons/[name].[ext]"
}, {
                test: /\.(css|scss)$/,
                use: [{
                    loader: 'isomorphic-style-loader',
                },
                {
                    loader: 'css-loader?modules=true&camelCase=true',
                    options: {
                        importLoaders: 1,
                        modules: true,
                        localIdentName: '[name]__[local]___[hash:base64:5]'
                    }

                },
                {
                    loader: 'sass-loader'
                }],
            },
           
        ]
    },
    resolve: {
        extensions: [".js", ".jsx"]
    },
    externals: [webPackNodeExternals()]

}