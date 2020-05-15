// const path = require('path')
// function resolve (dir) {
//   return path.join(__dirname, dir)
// }
// module.exports = {
//   lintOnSave: true,
//   chainWebpack: (config) => {
//     config.resolve.alias
//       .set('@$', resolve('src'))
//       .set('assets', resolve('src/assets'))
//       .set('components', resolve('src/components'))
//       .set('layout', resolve('src/layout'))
//       .set('base', resolve('src/base'))
//       .set('static', resolve('src/static'))
//   },
//   publicPath: './'
// }

module.exports = {
  chainWebpack: config => {
    // 发布模式
    config.when(process.env.NODE_ENV === 'production', config => {
      config
        .entry('app')
        .clear()
        .add('./src/main-prod.js')

      config.set('externals', {
        vue: 'Vue',
        'vue-router': 'VueRouter',
        axios: 'axios',
        lodash: '_',
        echarts: 'echarts',
        nprogress: 'NProgress',
        'vue-quill-editor': 'VueQuillEditor'
      })

      config.plugin('html').tap(args => {
        args[0].isProd = true
        return args
      })
    })

    // 开发模式
    config.when(process.env.NODE_ENV === 'development', config => {
      config
        .entry('app')
        .clear()
        .add('./src/main-dev.js')

      config.plugin('html').tap(args => {
        args[0].isProd = false
        return args
      })
    })
  }
}
