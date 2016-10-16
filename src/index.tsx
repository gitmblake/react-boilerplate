/* eslint-disable import/default */

import React from "react";
import {render} from "react-dom";
import { Provider } from "react-redux";
import { Router, browserHistory } from "react-router";
import routes from "./routes";
import configureStore from "./store/configureStore";
require("./favicon.ico"); // Tell webpack to load favicon.ico
import "./styles/styles.scss"; // Yep, that"s right. You can import SASS/CSS files too! Webpack will run the associated loader and plug this into the page.
import { syncHistoryWithStore } from "react-router-redux";
import { loginWithToken } from "./actions/authActions";
import injectTapEventPlugin from "react-tap-event-plugin";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

injectTapEventPlugin();

const store = configureStore();

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store);


// check if user is authenticated
const token = localStorage.getItem("token");
if(token) {
  store.dispatch(loginWithToken(token))
}

render(
  <MuiThemeProvider>
    <Provider store={store}>
      <Router history={history} routes={routes} />
    </Provider>
  </MuiThemeProvider>
  , document.getElementById("app")
);
