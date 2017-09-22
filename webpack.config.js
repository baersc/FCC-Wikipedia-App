const path = require('path');

module.exports = {
    entry: './src/index.js',
    devServer: {
        contentBase: './dist',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: { presets: ['es2015'] },
                },
            },
            {
                test: /\.scss$/,
                use: [{
                    loader: 'style-loader',
                },
                {
                    loader: 'css-loader',
                },
                {
                    loader: 'sass-loader',
                    options: {
                        includePaths: ['./node_modules'],
                    },
                }],
            },
            {
                test: /\.ttf$/,
                use: ['file-loader'],
            },
            {
                test: /\.json$/,
                use: ['file-loader'],
            },
        ],
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
};
