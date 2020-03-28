import { mount } from '@vue/test-utils';
import ComButton from '..';

test('render demo color', () => {
  const wrapper = mount(ComButton);
  expect(wrapper).toMatchSnapshot();
});
