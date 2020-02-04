import React from 'react';
import { shallow } from 'enzyme';
import Skills from './Skills';

describe('Skills component', () => {
  it('renders Skills', () => {
    const wrapper = shallow(<Skills />);
    expect(wrapper).toMatchSnapshot();
  });
});
