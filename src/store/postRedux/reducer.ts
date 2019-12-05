import { PostState } from './types';
import { PostActionTypes, FETCH_POSTS } from './actionTypes';

const initialState: PostState = [];

export function postReducer(
  state = initialState,
  action: PostActionTypes
): PostState {
  switch (action.type) {
    case FETCH_POSTS: {
      if (action.status === 200) {
        return action.data;
      } else {
        return state;
      }
    }

    default:
      return state;
  }
}
