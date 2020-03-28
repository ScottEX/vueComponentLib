module.exports = {
  postcss: [
    require('autoprefixer')({
      overrideBrowserslist: [
        'iOS >= 7',
        'Android >= 4.1',
        'last 20 Chrome versions',
        'Safari >= 6',
      ],
    }),
  ],
};
