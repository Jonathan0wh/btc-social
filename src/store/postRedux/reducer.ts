import { PostState } from './types';
import { PostActionTypes, FETCH_POSTS } from './actionTypes';

const initialState: PostState = [];

export function postReducer(
  state = initialState,
  action: PostActionTypes
): PostState {
  switch (action.type) {
    case FETCH_POSTS:
      return action.data;

    default:
      return state;
  }
}
