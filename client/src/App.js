import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// import ErrorBoundary from './components/ErrorBoundary';

import HomePage from './pages/home';
import RegisterPage from './pages/auth/register';
import RenderUser from './pages/user';

export default function routes() {
  return (
    // <ErrorBoundary>
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/"> LoginPage </Link>
          </li>
          <li>
            <Link to="/registration"> RegisterPage </Link>
          </li>
          <li>
            <Link to="/user"> User </Link>
          </li>
        </ul>

        <hr />

        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/registration">
            <RegisterPage />
          </Route>
          <Route path="/user">
            <RenderUser />
          </Route>
        </Switch>
      </div>
    </Router>
    // </ErrorBoundary>
  );
};
