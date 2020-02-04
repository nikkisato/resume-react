import React from 'react';
import { shallow } from 'enzyme';
import Experience from './Experience';

describe('Experience component', () => {
  it('renders Experience', () => {
    const wrapper = shallow(<Experience />);
    expect(wrapper).toMatchSnapshot();
  });
});
