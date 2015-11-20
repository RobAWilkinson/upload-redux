import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import uploadApp from './reducers';
import { startUpload, changeHeader, changeKey } from './actions';
const loggerMiddleware = createLogger();
const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware,
  loggerMiddleware
)(createStore);
function configureStore(initialState) {
  return createStoreWithMiddleware(uploadApp, initialState);
}

let store = configureStore();

import App from './containers/app';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import React from 'react';

ReactDOM.render(
    <Provider store={store} >
      <App />
    </Provider>,
    document.getElementById('main')
);
