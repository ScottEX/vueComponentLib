const config = require('../config');

const { HOST } = process.env;
const PORT = process.env.PORT && Number(process.env.PORT);

module.exports = {
  mode: process.env.NODE_ENV,
  // cheap-module-eval-source-map is faster for development
  devtool: config.dev.devtool,
  // these devServer options should be customized in /config/index.js
  devServer: {
    host: HOST || config.dev.host,
    port: PORT || config.dev.port,
    open: config.dev.autoOpenBrowser,
  },
};
