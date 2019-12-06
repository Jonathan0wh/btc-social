import React from 'react';
import { shallow } from 'enzyme';
import PostCreate from '../PostCreate';

jest.mock('react-router-dom', () => ({
  useHistory: () => ({
    push: jest.fn()
  })
}));

describe('<PostCreate />', () => {
  it('should render by default', () => {
    const wrapper = shallow(<PostCreate />);
    expect(wrapper).toMatchSnapshot();
  });
});
