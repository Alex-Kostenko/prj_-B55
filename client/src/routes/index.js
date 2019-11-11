import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import HomePage from '../pages/home';
import RenderUser from '../pages/user';

export default function routes() {
  return (
    // <ErrorBoundary>
      <Router>
        <Switch>

          <Route path="/">
            <HomePage />
          </Route>

          <Route path="/registration">
            <HomePage />
          </Route>

          <Route path="/user">
            <RenderUser />
          </Route>

        </Switch>
      </Router>
    // </ErrorBoundary>
  );
};
