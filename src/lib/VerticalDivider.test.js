import React from 'react';
import { shallow } from 'enzyme';
import { VerticalDivider } from './VerticalDivider';

test('renders without props', () => {
    const wrapper = shallow(<VerticalDivider />);
    expect(wrapper.find('div')).toHaveLength(1);
});
  
test('renders with height props', () => {
    const wrapper = shallow(<VerticalDivider height="128px" />);
    expect(wrapper.find('div')).toHaveLength(1);
});
  
test('renders with background.color props', () => {
    const wrapper = shallow(<VerticalDivider background={{color: "blue"}} />);
    expect(wrapper.find('div')).toHaveLength(1);
});
  
test('renders with background.doted props', () => {
    const wrapper = shallow(<VerticalDivider background={{doted: true}} />);
    expect(wrapper.find('div')).toHaveLength(1);
});
