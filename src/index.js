import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './reducers'
import { nextDay } from './actions'
import App from './containers/App'


const store = createStore(rootReducer)
if (module.hot) {
  // Enable Webpack hot module replacement for reducers
  module.hot.accept('./reducers', () => {
    const nextReducer = require('./reducers').default
    store.replaceReducer(nextReducer)
  })
}

const rootEl = document.createElement('div')
document.body.appendChild(rootEl)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootEl
)
