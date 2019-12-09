import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import RenderSelectLang from "../components/selectLang"

// import ErrorBoundary from './components/ErrorBoundary';

import HomePage from '../pages/home';
import RegisterPage from '../pages/auth/register';
import RenderUser from '../pages/profile';
import EditUser from '../pages/profile/editUser';

const RoutesPage = () => {
  return (
    // <ErrorBoundary>
    <Router>
      <div>
        <nav>
          <ul className="navigation">
            <li>
              <Link to="/"> LoginPage </Link>
            </li>
            <li>
              <Link to="/registration"> RegisterPage </Link>
            </li>
            <li>
              <Link to="/user"> User </Link>
            </li>
            <li>
              <Link to="/editUser"> UserInfo </Link>
            </li>
          </ul>
          <RenderSelectLang />
        </nav>

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
          <Route path="/editUser">
            <EditUser />
          </Route>
        </Switch>
      </div>
    </Router>
    // </ErrorBoundary>
  );
};

export default RoutesPage;
