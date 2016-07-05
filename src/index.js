import { createStore } from 'redux'
import rootReducer from './reducers'
import { nextDay } from './actions'


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

store.dispatch(nextDay())
console.log(store.getState())
