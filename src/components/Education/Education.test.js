import React from 'react';
import { shallow } from 'enzyme';
import Education from './Education';

describe('Education component', () => {
  it('renders Education', () => {
    const wrapper = shallow(<Education />);
    expect(wrapper).toMatchSnapshot();
  });
});
