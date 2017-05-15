var webpack = require('webpack');

module.exports = {
    entry: './src/index.js', //나중에 배열로 정의할수있다

    output: {
        path: __dirname + '/public/', // __dirname 은 바로 현재 위치를 가리키는 Node.js의 전역 변수
        filename: 'bundle.js'
    },

    devServer: {
        hot: true, //파일수정시 리로딩
        inline: true,
        host: '0.0.0.0',
        port: 4000,
        contentBase: __dirname + '/public/', //인덱스 파일의 위치
    },

    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: ['react-hot','babel?'+JSON.stringify({
                    cacheDirectory: true,
                    presets: ['es2015', 'react']
                })],
                exclude: /node_modules/,

            }
        ]
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
};