import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
// import ErrorBoundary from './components/ErrorBoundary';

import HomePage from '../pages/home';

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

        </Switch>
      </Router>
    // </ErrorBoundary>
  );
};
