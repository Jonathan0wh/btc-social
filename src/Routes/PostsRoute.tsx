import React from 'react';
import { Switch, Route, Redirect, useRouteMatch } from 'react-router-dom';

import PostDetail from 'Components/Views/PostDetail';
import PostCreate from 'Components/Views/PostCreate';

const PostsRoute = () => {
  let match = useRouteMatch();

  return (
    <Switch>
      <Route path={`${match.url}/:id(\\d+)`}>
        <PostDetail />
      </Route>

      <Route path={`${match.url}/create`}>
        <PostCreate />
      </Route>

      <Redirect to="/" />
    </Switch>
  );
};

export default PostsRoute;
