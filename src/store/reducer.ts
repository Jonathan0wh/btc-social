import { combineReducers } from 'redux';

import { postReducer } from './postRedux/reducer';

export const rootReducer = combineReducers({
  posts: postReducer
});
