import React from 'react';
import { shallow } from 'enzyme';
import { Panel } from './Panel';

test('renders with title', () => {
  const wrapper = shallow(<Panel title="Title" />);
  const textElement = 'Title';
  expect(wrapper.contains(textElement)).toEqual(true);
});

test('renders even without title', () => {
  const wrapper = shallow(<Panel />);
  expect(wrapper.find('Header')).toHaveLength(1);
  expect(wrapper.find('WithTheme(Collapsible)')).toHaveLength(0);
});
