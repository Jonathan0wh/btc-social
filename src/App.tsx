import React, { Fragment } from 'react';

import Header from 'Components/Views/Header';
import MainRoute from 'Routes/MainRoute';

import './App.scss';

const App = () => (
  <Fragment>
    <Header />
    <MainRoute />
  </Fragment>
);

export default App;
