let passiveSupported = false;

try {
  const options = Object.defineProperty({}, 'passive', {
    get() {
      passiveSupported = true;
    },
  });
  window.addEventListener('test', null, options);
} catch (err) {}

module.exports = passiveSupported;
