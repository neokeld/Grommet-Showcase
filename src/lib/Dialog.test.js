import React from 'react';
import { shallow } from 'enzyme';
import { Dialog } from './Dialog';

test('renders without onClose props', () => {
  const wrapper = shallow(<Dialog />);
  expect(wrapper.find('Layer')).toHaveLength(1);
});

test('renders with onClose props', () => {
  const wrapper = shallow(<Dialog onClose={() => {}} />);
  expect(wrapper.find('Layer')).toHaveLength(1);
});
