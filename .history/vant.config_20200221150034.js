const imgConfig = require('./config/img');

module.exports = {
  name: 'bobvux',
  build: {
    skipInstall: ['lazyload'],
    css: {
      preprocessor: 'scss',
    },
    site: {
      publicPath: '/vueComponentLib/',
    },
  },
  site: {
    title: 'VUE移动组件库',
    description: '轻量、可靠的移动端 Vue 组件库',
    versions: [],
    links: [
      {
        logo: imgConfig.img.componentDemo,
        url: 'mobile.html',
      },
      {
        logo: imgConfig.img.download,
        url: 'http://localhost:9000/dist/download/bobvux.zip',
      },
    ],
    logo: imgConfig.img.indexLogo,
    nav: [
      {
        title: '开发指南',
        items: [
          {
            path: 'home',
            title: '介绍',
          },
          {
            path: 'html',
            title: 'HTML规范',
          },
          {
            path: 'css',
            title: 'CSS规范',
          },
          {
            path: 'standard',
            title: 'STANDARD规范',
          },
          {
            path: 'quickstart',
            title: '快速上手',
          },
        ],
      },
      {
        title: 'UI规范',
        items: [
          {
            path: 'color-ui',
            title: 'ColorUI 颜色规范',
          },
          {
            path: 'font-ui',
            title: 'FontUI 字体规范',
          },
        ],
      },
      {
        title: '基础组件',
        items: [
          {
            path: 'button',
            title: 'Button 按钮',
          },
          {
            path: 'action-sheet',
            title: 'ActionSheet 上拉菜单',
          },
        ],
      },
    ],
  },
};
