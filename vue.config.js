const HtmlWebpackPlugin = require('html-webpack-plugin')
const SkeletonWebpackPlugin = require('vue-skeleton-webpack-plugin')

const path = require('path')


module.exports = {
  lintOnSave: false,
  // assetsDir: '/book/',
  publicPath: '/',
  productionSourceMap: false,
  devServer: {
    port: 8086,
    open: true,
    disableHostCheck: true,
    proxy: {
      '/api': {
        target: 'http://www.api.zhuishushenqi.com',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      },
      '/content': {
        target: 'http://chapter2.zhuishushenqi.com',
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/content': ''
        }
      }
    }
  },
  
  // css: {
  //   extract: {
  //     filename: `css/[name].${buildDate}.css`,
  //     chunkFilename: `css/[name].${buildDate}.css`,
  //   },
  // },
  configureWebpack: (config)=>{
    // vue骨架屏插件配置
    config.plugins.push(new SkeletonWebpackPlugin({
      webpackConfig: {
        entry: {
          app: path.join(__dirname, './src/entry-skeleton.js'),
        },
      },
      minimize: true,
      quiet: true,
    }))
  },
  
  
  // {
  //   plugins: [
  //     new HtmlWebpackPlugin({
  //        // Your HtmlWebpackPlugin config
  //     }),
  //     // new SkeletonPlugin({
  //     //   pathname: path.resolve(__dirname, `./shell`),
  //     //   staticDir: path.resolve(__dirname, './dist'),
  //     //   routes: ['/'],
  //     //   port: '8086',
  //     //   loading: 'chiaroscuro',
  //     //   svg: {
  //     //     color: '#EFEFEF',
  //     //     shape: 'circle',
  //     //     shapeOpposite: ['.Rating-gray_1kpffd5_0 svg']
  //     //   },
  //     //   image: {
  //     //     shape: 'rect', // `rect` | `circle`
  //     //     color: '#EFEFEF',
  //     //     shapeOpposite: ['.mint-swipe-items-wrap img']
  //     //   },
  //     //   pseudo: {
  //     //     color: '#EFEFEF', // or transparent
  //     //     shape: 'circle', // circle | rect
  //     //     shapeOpposite: ['.delivery-icon-hollow_3q8_B5r_0', '.index-premium_39rl0v9']
  //     //   },
  //     //   button: {
  //     //     color: '#EFEFEF',
  //     //     excludes: ['.mint-swipe-items-wrap a']
  //     //   },
  //     //   defer: 5000,
  //     //   excludes: [],
  //     //   remove: [],
  //     //   hide: ['.index-dashedline_7B79b3W', '.Rating-actived_GBtiHkB_0'],
  //     //   grayBlock: ['#header'],
  //     //   cssUnit: 'rem',
  //     //   headless: true,
  //     //   // minify: false,
  //     //   // cookies: [{
  //     //   //   name: 'SID',
  //     //   //   value: 'a495vvmEPEE4DZi083dr8yR3EAPYqW40HaWA',
  //     //   //   url: 'https://h5.ele.me'
  //     //   // }, {
  //     //   //   name: 'USERID',
  //     //   //   value: '273745271',
  //     //   //   url: 'https://h5.ele.me'
  //     //   // }],
  //     //   // noInfo: false,
  //     //   // storagies: {
  //     //   //   test: '1234'
  //     //   // }
  //     // }),
  //   ]
  // //   output: {
  // //     filename: `js/[name].${buildDate}.js`,
  // //     chunkFilename: `js/[name].${buildDate}.js`,
  // //   },
  // },
  chainWebpack: () => {},
  // PWA 插件相关配置
  // see https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa
  pwa: {},
  // 第三方插件配置
  pluginOptions: {
    // ...
  },

  
}
