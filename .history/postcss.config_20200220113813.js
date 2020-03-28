module.exports = {
  plugins: {
    autoprefixer: {
      overrideBrowserslist: ['Android >= 4.0', 'iOS >= 7']
    },
    // 此处为添加部分
    "postcss-pxtorem": {
      rootValue: 75, // 适配移动端750px宽度
      unitPrecision: 5,
      propList: ['*'],
      selectorBlackList: ['van','ryt'],
      replace: true,
      mediaQuery: false,
      minPixelValue: 0,
    }
  }
};
