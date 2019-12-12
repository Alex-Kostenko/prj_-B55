import React, { Suspense } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Layout } from 'antd';

import Header from "../components/header";
import RenderFooter from "../components/footer";
import routs from "./routs";
import Loader from '../components/loader'

const { Content } = Layout;

const RoutesPage = () => {

  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Header />
        <Content> 
          <Switch>
            {routs.map((rout, i)=> 
              <Route path={rout.path} key={i} exact={rout.exact}>
                <rout.component />
              </Route>
            )}
          </Switch>
        </Content>
        <RenderFooter/>
      </Suspense>
    </Router>
  );
};

export default RoutesPage;
