const path = require('path');
const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.base.js');
module.exports = merge(baseConfig, {
  mode: 'production', // 生产模式,会开启tree-shaking和压缩代码,以及其他优化
  output: {
    path: path.join(__dirname, '../desktop/dist'), // 打包结果输出路径
    clean: true, // webpack4需要配置clean-webpack-plugin来删除dist文件,webpack5内置了
    publicPath: '/' // 打包后文件的公共前缀路径
  },
})