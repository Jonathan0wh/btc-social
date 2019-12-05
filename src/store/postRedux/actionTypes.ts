import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';

import { PostState, Post } from './types';

export type PostThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  PostState,
  null,
  Action<string>
>;

export const FETCH_POSTS = 'POSTS/FETCH';

interface GetPostsAction {
  type: typeof FETCH_POSTS;
  status: number;
  data: Array<Post>;
}

export type PostActionTypes = GetPostsAction;
