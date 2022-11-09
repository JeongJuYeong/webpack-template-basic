
// import
const path = require('path');   // Node.js 
const HtmlPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

// export : 결과물 경로 및 설정
module.exports = {

    entry:'./js/main.js',        // 파일을 읽어들이기 시작하는 진입점 설정

     // 결과물(번들)을 반환하는 설정
    output:
    {    
       // 기본적으로 dist 폴더에 만들어준다.
       // path: path.resolve(__dirname, 'dist'),  // resolve() :  1,2번 경로를 합쳐준다.
       // filename: 'main.js',
        clean : true                              // 기존 데이터 삭제
    },

    // /.css$ : ..css 로 끝나는 
    // 순서 중요, css-loader 먼저 실행, 
    // 자바스크립트에서 css를 해석하는 용도로 css-loader 사용
    // 해석된 내용을 삽입하는 기능 style-loader
    // s?css : s가 있을수도 없을수도 있다는 의미
    module:{
        rules : [
            {
                test : /\.s?css$/,
                use:[
                    'style-loader',
                    'css-loader',
                    'postcss-loader',
                    'sass-loader'
                ]
            },
            {
                test:   /\.js$/,
                use:[
                    'babel-loader'
                ]
            }
        ]

    },
    
    plugins: [
        new HtmlPlugin({
            template:'./index.html'
         }),
        new CopyPlugin({
            patterns: [
              { from : 'static' }
            ]
        })

    ],

    // 강의 내용과 다르게 이거 넣으면 이상한 듯..
    devServer:{
         host:'localhost'
    }
    
}