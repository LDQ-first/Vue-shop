const webpack = require('webpack')
const path = require('path')

module.exports = {
    entry: {
        vendor: ['vue/dist/vue.esm.js', 'vue-router', 'vuex', 'axios', 
        'vue-lazyload', 'vue-infinite-scroll']
    },
    output: {
        path: path.join(__dirname, '../static/public/js'),
        filename: '[name].dll.js',  // 输出的文件，将会根据entry命名为vendor.dll.js
        library: '[name]_library'   // 暴露出的全局变量名
    },
    plugins: [
        new webpack.DllPlugin({
            //path 是 manifest.json 文件的输出路径，这个文件会用于后续的业务代码打包
            path: path.join(__dirname, '../static/public/js/', '[name]-mainfest.json'), // 描述依赖对应关系的json文件
            //是 dll 暴露的对象名，要跟 output.library 保持一致
            name: '[name]_library',
             //context 是解析包路径的上下文，这个要跟接下来配置的 webpack.config.js 一致, 对之后DllReferencePlugin有用
            context: __dirname
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ]
}

