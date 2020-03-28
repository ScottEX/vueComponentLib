const path = require('path');
const merge = require('webpack-merge');
const config = require('../config');
const webpackBaseConf = require('./webpack.base.conf.js');
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const webpackProdConf = {
  mode: process.env.NODE_ENV,
  devtool: config.build.devtool,
  entry: {
    bobvux: './src/index.js',
  },
  output: {
    path: path.join(__dirname, '../dist/components/bobvux'),
    filename: '[name].js',
    library: '[name]',
    libraryTarget: 'umd',
    globalObject: 'this',
    umdNamedDefine: true,
  },
  externals: {
    vue: {
      root: 'Vue',
      commonjs: 'vue',
      commonjs2: 'vue',
      amd: 'vue',
    },
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        cache: true,
        parallel: true,
        sourceMap: config.build.productionSourceMap,
      }),
      new OptimizeCssAssetsPlugin({
        assetNameRegExp: /\.css$/g,
        cssProcessor: require('cssnano'),
        cssProcessorPluginOptions: {
          preset: ['default', {
            discardComments: {
              removeAll: true,
            },
            normalizeUnicode: false,
          }],
        },
        canPrint: true,
      }),
    ],
  },
  // 性能警告
  performance: false,
};
// 压缩
if (config.build.productionGzip) {
  // Prepare compressed versions of assets to serve them with Content-Encoding.
  const CompressionWebpackPlugin = require('compression-webpack-plugin');
  webpackProdConf.optimization.minimizer.push(
    new CompressionWebpackPlugin({
      filename: '[path].gz[query]',
      algorithm: 'gzip',
      test: new RegExp(
        '\\.(' +
        config.build.productionGzipExtensions.join('|') +
        ')$'
      ),
      threshold: 10240,
      minRatio: 0.8,
    })
  );
}
// 打包分析
if (config.build.bundleAnalyzerReport) {
  // Visualize size of webpack output files with an interactive zoomable treemap
  const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
  webpackBaseConf.plugins.push(new BundleAnalyzerPlugin());
}

module.exports = merge(webpackBaseConf, webpackProdConf);
