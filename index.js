/**
 * @format
 */
import React from 'react'
import {AppRegistry} from 'react-native';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './src/Redux/index';
const store = createStore(rootReducer, applyMiddleware(thunk));
import App from './App';
import {name as appName} from './app.json';

const RNRedux = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

AppRegistry.registerComponent(appName, () => RNRedux);
