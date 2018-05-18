import React from 'react';
import { shallow } from 'enzyme';
import Transaction from '../../components/Transaction';

test('should render Transaction correctly', () => {
  const wrapper = shallow(<Transaction />);
  expect(wrapper).toMatchSnapshot();
})


