import React from 'react';
import { shallow } from 'enzyme';
import { Sort } from './Sort';

test('renders with options props', () => {
  const options = ['roquefort'];
  const wrapper = shallow(<Sort options={options} />);
  expect(wrapper.find('Select')).toHaveLength(1);
});
