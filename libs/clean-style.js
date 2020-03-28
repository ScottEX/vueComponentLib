/* eslint-disable no-restricted-syntax */
export default (styles = {}) => {
  for (const i in styles) {
    if (typeof styles[i] === 'undefined') {
      delete styles[i];
    }
  }
  return styles;
};
