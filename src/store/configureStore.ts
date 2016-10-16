import {
  createStore,
  applyMiddleware,
  compose,
  Middleware,
} from 'redux';
import { fromJS } from 'immutable';
import { browserHistory } from 'react-router';
import { routerMiddleware } from 'react-router-redux';

import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';

import thunk from 'redux-thunk';
import promiseMiddleware from "redux-promise";
import createLogger from 'redux-logger';
import rootReducer from '../reducers';

declare const __DEV__: boolean; // from webpack

const logger = createLogger({collapsed:true});
const environment: any = window || this;

function configureStore() {
  const store = createStore(
    rootReducer,
    compose(
      applyMiddleware(...getMiddleware()),
      __DEV__ && environment.devToolsExtension ?
        environment.devToolsExtension() :
        f => f));

  _enableHotLoader(store);
  return store;
}


const getMiddleware = () : Middleware[] => {
  let middleware = [
    routerMiddleware(browserHistory),
    promiseMiddleware,
    thunk,
  ];

  if (__DEV__) {
    middleware = [...middleware, logger, reduxImmutableStateInvariant()];
  }

  return middleware;
}


function _enableHotLoader(store) {
  if (!__DEV__) {
    return;
  }

  const { hot } = module as any;
  if (hot) {
    hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers');
      store.replaceReducer(nextRootReducer);
    });
  }
}

export default configureStore;