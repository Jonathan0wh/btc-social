import React from 'react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import { shallow } from 'enzyme';
import PostDetail from '../PostDetail';

const mockStore = configureMockStore();
const store = mockStore({});

jest.mock('react-router-dom', () => ({
  useHistory: () => ({
    push: jest.fn()
  }),
  useParams: () => ({
    id: 1
  })
}));

describe('<PostDetail />', () => {
  it('should render by default', () => {
    const wrapper = shallow(
      <Provider store={store}>
        <PostDetail />
      </Provider>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
