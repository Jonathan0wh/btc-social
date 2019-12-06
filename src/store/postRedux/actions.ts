import { PostState } from './types';
import { FETCH_POSTS, PostActionTypes } from './actionTypes';

/**
 * Action Creators
 */
export function fetchPosts(data: PostState): PostActionTypes {
  return {
    type: FETCH_POSTS,
    data
  };
}
