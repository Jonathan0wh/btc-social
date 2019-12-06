import React from 'react';
import { shallow } from 'enzyme';
import PostCard from '../PostCard';

describe('<PostCard />', () => {
  it('should render without comment button', () => {
    const wrapper = shallow(<PostCard title="test" body="" userId={0} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with comment button', () => {
    const wrapper = shallow(
      <PostCard title="test" body="" userId={0} showCommentButton />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
