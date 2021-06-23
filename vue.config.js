module.export = {
  configureWebpack:{
    resolve: {
      extensions: [],
      alias: {
        // '@': 'src',  cli3中已经默认配置
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@network',
        'views': '@views',
      }
    }
  }
}