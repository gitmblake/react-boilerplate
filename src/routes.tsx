import React from "react";
import { Route, IndexRoute } from "react-router";

import { App } from "./components/App";
import { HomePage } from "./components/home/HomePage";
import { NotFoundPage } from "./components/common/NotFoundPage";
import { AboutPage } from "./components/about/AboutPage";

import Login from "./containers/Login";

import { requireAuthentication } from "./containers/Authentication";

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage}/>
    <Route path="login" component={Login}/>
    <Route path="about" component={requireAuthentication(AboutPage)}/>
    <Route path="*" component={NotFoundPage}/>
  </Route>
)