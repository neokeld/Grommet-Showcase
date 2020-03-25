import React from 'react';
import { shallow } from 'enzyme';
import { Growl } from './Growl';

test('renders without onClose, position props', () => {
  const wrapper = shallow(<Growl />);
  expect(wrapper.find('Layer')).toHaveLength(1);
});

test('renders with onClose props', () => {
  const wrapper = shallow(<Growl onClose={() => {}} />);
  expect(wrapper.find('Layer')).toHaveLength(1);
});

test('renders with position props', () => {
  const wrapper = shallow(<Growl position='bottom' />);
  expect(wrapper.find('Layer')).toHaveLength(1);
});
