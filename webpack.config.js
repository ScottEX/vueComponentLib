const merge = require('webpack-merge');
const webpackDevConf = require('./build/webpack.dev.conf');

module.exports = merge(webpackDevConf);
