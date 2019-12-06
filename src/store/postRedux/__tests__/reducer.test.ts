import { postReducer } from '../reducer';
import { FETCH_POSTS } from '../actionTypes';

describe('post reducer', () => {
  it('should return the initial state', () => {
    expect(
      postReducer([], {
        type: FETCH_POSTS,
        data: []
      })
    ).toEqual([]);
  });

  it('should handle FETCH_POSTS', () => {
    expect(
      postReducer([{ id: 1, title: '', body: '', userId: 1 }], {
        type: FETCH_POSTS,
        data: [
          { id: 2, title: '', body: '', userId: 2 },
          { id: 3, title: '', body: '', userId: 3 }
        ]
      })
    ).toEqual([
      { id: 2, title: '', body: '', userId: 2 },
      { id: 3, title: '', body: '', userId: 3 }
    ]);
  });
});
