import { PostState } from './types';

/**
 * Action types
 */
export const FETCH_POSTS = 'POSTS/FETCH';

interface GetPostsAction {
  type: typeof FETCH_POSTS;
  data: PostState;
}

export type PostActionTypes = GetPostsAction;
