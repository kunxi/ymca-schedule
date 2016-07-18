import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import App from './containers/App';


const store = createStore(rootReducer);
if (module.hot) {
  // Enable Webpack hot module replacement for reducers
  module.hot.accept('./reducers', () => {
    /* eslint-disable global-require */
    const nextReducer = require('./reducers').default;
    /* eslint-enable global-require */
    store.replaceReducer(nextReducer);
  });
}

const rootEl = document.createElement('div');
document.body.appendChild(rootEl);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootEl
);
