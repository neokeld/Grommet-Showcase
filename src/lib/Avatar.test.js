import React from 'react';
import { shallow } from 'enzyme';
import { Avatar } from './Avatar';

test('renders', () => {
  const wrapper = shallow(<Avatar />);
  expect(wrapper.find('Box')).toHaveLength(1);
});

