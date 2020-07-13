const path = require('path')

module.exports = {
  pages: {
    index: {
      entry: './src/main.js',
      template: './public/index.html',
      title: '山西大学 新生手册',
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    }
  },
  chainWebpack: config => {
    if (process.env.NODE_ENV === 'development') {
      config.module
        .rule('eslint')
        .use('eslint-loader')
        .loader('eslint-loader')
        .tap(options => {
          options.fix = true
          return options
        })
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        assets: path.join(__dirname, 'src/assets'),
        components: path.join(__dirname, 'src/components')
      }
    }
  }
}
