import React from 'react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import { shallow } from 'enzyme';
import PostList from '../PostList';

const mockStore = configureMockStore();
const store = mockStore({});

describe('<PostList />', () => {
  it('should render by default', () => {
    const wrapper = shallow(
      <Provider store={store}>
        <PostList />
      </Provider>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
