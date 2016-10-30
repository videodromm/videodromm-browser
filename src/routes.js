'use strict';

import React from 'react'
import { Route, IndexRoute } from 'react-router'
import Layout from './components/Layout';
import IndexPage from './components/IndexPage';
import ShaderPage from './components/ShaderPage';
import NotFoundPage from './components/NotFoundPage';

const routes = (
  <Route path="/" component={Layout}>
    <IndexRoute component={IndexPage}/>
    <Route path="shader/:id" component={ShaderPage}/>
    <Route path="*" component={NotFoundPage}/>
  </Route>
);

export default routes;
