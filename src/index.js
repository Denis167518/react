import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import store from './redux';
import * as serviceWorker from './serviceWorker';
import App from './App';
import './index.css';

const rootStore = createStore(store, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={rootStore}>
    <App />
  </Provider>, document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
