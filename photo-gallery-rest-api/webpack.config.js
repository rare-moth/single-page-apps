module.exports = {
    entry: './src/js/main.js',
    output: {
        path: __dirname + '/build/assets',
        filename: 'prod-main.js',
        publicPath: 'index.html'
    },
    resolve: {
        alias: {
            'rxjs': 'rxjs-es'
        }
    },
    devServer: {
        inline: true,
        port: 3000
    },
    module: {
         loaders: [
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015', 'react']
            }
          }
        ]
    }
 };