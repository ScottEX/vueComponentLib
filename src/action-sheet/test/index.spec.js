import { mount } from '@vue/test-utils';
import ComActionSheetA from '../actionSheet01';
import ComActionSheetB from '../actionSheet02';

test('render demo color', () => {
  const wrapper = mount(ComActionSheetA);
  expect(wrapper).toMatchSnapshot();
});

test('render demo color', () => {
  const wrapper = mount(ComActionSheetB);
  expect(wrapper).toMatchSnapshot();
});
