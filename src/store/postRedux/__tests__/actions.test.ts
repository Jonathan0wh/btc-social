import { fetchPosts } from '../actions';
import { FETCH_POSTS } from '../actionTypes';

describe('actions', () => {
  it('should create an action to add list of posts', () => {
    const data = [{ id: 1, title: '', body: '', userId: 1 }];
    const expectedAction = {
      type: FETCH_POSTS,
      data
    };

    expect(fetchPosts(data)).toEqual(expectedAction);
  });
});
