import { Immutable } from 'immutable';
import { createStore, applyMiddleware } from 'redux';
import createHistory from 'history/createBrowserHistory';
import { routerMiddleware } from 'react-router-redux';
import { createSagaMiddleware } from 'redux-saga';

import rootReducer from './rootReducer';

// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory();

// Create the store with two middlewares
// 1. sagaMiddleware: Makes redux-sagas work
// 2. routerMiddleware: Syncs the location/URL path to the state
const middlewares = [createSagaMiddleware(), routerMiddleware(history)];

const initialState = Immutable.Map();
const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(...middlewares),
);

export { store, history };
