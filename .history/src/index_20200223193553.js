import ComActionSheetA from './action-sheet/actionSheet01';
import ComActionSheetB from './action-sheet/actionSheet02';
import ComButton from './button';
import ComStepper from './stepper';

const version = '1.0.0';

function install(Vue) {
  const components = [
    ComActionSheetA,
    ComActionSheetB,
    ComButton,
    ComStepper,
  ];
  components.forEach((item) => {
    if (item.install) {
      Vue.use(item);
    } else if (item.name) {
      Vue.component(item.name, item);
    }
  });
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export {
  install,
  version,
  ComActionSheetA,
  ComActionSheetB,
  ComButton,
  ComStepper,
};
export default {
  install,
  version,
};
