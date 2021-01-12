import React from 'react';
import { shallow } from 'enzyme';
import { TriStateCheckbox } from './TriStateCheckbox';

test('renders without props', () => {
  const wrapper = shallow(<TriStateCheckbox />);
  expect(wrapper.find('CheckBox')).toHaveLength(1);
});

test('renders with label props', () => {
  const wrapper = shallow(<TriStateCheckbox label="Choice" />);
  expect(wrapper.find('CheckBox')).toHaveLength(1);
});

test('renders with initialValue props', () => {
  const wrapper = shallow(<TriStateCheckbox initialValue={true} />);
  expect(wrapper.find('CheckBox')).toHaveLength(1);
});
