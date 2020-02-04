import React from 'react';
import { shallow } from 'enzyme';
import Projects from './Projects';

describe('Projects component', () => {
  it('renders Projects', () => {
    const wrapper = shallow(<Projects />);
    expect(wrapper).toMatchSnapshot();
  });
});
