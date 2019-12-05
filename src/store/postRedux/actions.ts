import axios from 'axios';

import { API_BASE_URL } from 'config/constant';
import { Post } from './types';
import { PostThunk, FETCH_POSTS, PostActionTypes } from './actionTypes';

function fetchPost(status: number, data: Array<Post>): PostActionTypes {
  return {
    type: FETCH_POSTS,
    status,
    data
  };
}

export function fetchPostsThunk(): PostThunk {
  return async dispatch => {
    try {
      const response = await axios.get(API_BASE_URL + 'posts');
      if (response.status === 200) {
        dispatch(fetchPost(response.status, response.data));
      } else {
        throw new Error(
          `${response.status} ${response.statusText}: ${response.data}`
        );
      }
    } catch (error) {
      console.log(error);
    }
  };
}
