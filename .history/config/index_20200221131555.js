
// Template version: 1.3.1
// see http://vuejs-templates.github.io/webpack for documentation.

const path = require('path');

module.exports = {
  dev: {

    // Various Dev Server settings
    host: 'localhost', // can be overwritten by process.env.HOST
    port: 9000, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
    autoOpenBrowser: false,
    errorOverlay: true,
    notifyOnErrors: true,
    poll: false, // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-

    // Use Eslint Loader?
    // If true, your code will be linted during bundling and
    // linting errors and warnings will be shown in the console.
    useEslint: true,
    // If true, eslint errors and warnings will also be shown in the error overlay
    // in the browser.
    showEslintErrorsInOverlay: true,

    /**
     * Source Maps
     */

    // https://webpack.js.org/configuration/devtool/#development
    devtool: 'cheap-module-eval-source-map',

    // If you have problems debugging vue-files in devtools,
    // set this to false - it *may* help
    // https://vue-loader.vuejs.org/en/options.html#cachebusting
    cacheBusting: true,

    cssSourceMap: true,
  },

  build: {

    // 打包文件Paths
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'components',

    /**
     * Source Maps
     */

    productionSourceMap: false,
    // https://webpack.js.org/configuration/devtool/#production
    devtool: 'cheap-module-source-map',

    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: true,
    productionGzipExtensions: ['js', 'css'],

    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report,
  },

  img: {
    indexLogo: 'data:image/png;base64,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',
    componentDemo: '',
    download: '',
  },
};