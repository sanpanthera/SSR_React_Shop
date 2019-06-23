const path = require('path');

module.exports = {
  target: 'node',
  entry: './src/client.js',
  mode: 'development',
  output: {
      filename: 'client_bundle.js',
      path: path.resolve(__dirname,'build/public'),
      publicPath: '/build/public'
  },
  module: {
      rules: [
        {
        test: /\.(js|jsx)$/,
          loader: 'babel-loader',
          exclude:'/node_modules/',
          options: {
              presets:[
                  'react',
                  'stage-0'
              ]
          },
      },
      {
        test: /\.(jpe?g|png|gif|svg|ttf|woff|eot)$/i, 
        loader: "file-loader?name=/public/icons/[name].[ext]"
    },
      
      {
        test: /\.(css|scss)$/,
        use: [{
          loader: 'style-loader',
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
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx"]
  }

}