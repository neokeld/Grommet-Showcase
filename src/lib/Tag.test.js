import React from 'react';
import { shallow } from 'enzyme';
import { Tag } from './Tag';

test('renders even without onRemove', () => {
  const wrapper = shallow(<Tag>Text</Tag>);
  const textElement = 'Text';
  expect(wrapper.contains(textElement)).toEqual(true);
});

test('renders a button with onRemove', () => {
  const wrapper = shallow(<Tag onRemove={() => {}}>Remove</Tag>);
  expect(wrapper.find('Button')).toHaveLength(1);
});
