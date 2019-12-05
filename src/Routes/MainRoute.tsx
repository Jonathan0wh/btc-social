import React from 'react';
import { Switch, Route } from 'react-router-dom';

import PostsRoute from './PostsRoute';

import PostList from 'Components/Views/PostList';

const MainRoute = () => {
  return (
    <Switch>
      <Route path="/post/">
        <PostsRoute />
      </Route>

      <Route path="/">
        <PostList />
      </Route>
    </Switch>
  );
};

export default MainRoute;
