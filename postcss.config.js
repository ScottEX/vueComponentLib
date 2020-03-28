module.exports = {
  plugins: {
    autoprefixer: {
      overrideBrowserslist: ['Android >= 4.0', 'iOS >= 7']
    },
    "postcss-pxtorem": {
      rootValue: 75,
      unitPrecision: 5,
      propList: ['*dd'],
      selectorBlackList: ['van','ryt'],
      replace: true,
      mediaQuery: false,
      minPixelValue: 0,
    }
  }
};
