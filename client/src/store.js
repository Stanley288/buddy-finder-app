import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { ApolloClient, createNetworkInterface } from 'react-apollo'

import rootReducer from './reducers'

// Setup Apollo client
export const client = new ApolloClient({
  networkInterface: createNetworkInterface({
    uri: 'ADD_CONNECTION_HERE',
  }),
})

export function configureStore(initialState = {}) {
  // Middleware and store enhancers
  const enhancers = [
    applyMiddleware(thunk, logger, client.middleware()),
  ]

  const store = createStore(
    combineReducers({
      rootReducer,
      apollo: client.reducer(),
    }),
    initialState,
    compose(...enhancers),
  )

  // For hot reloading reducers
  if (module.hot) {
    module.hot.accept('./reducers', () => {
      const nextReducer = require('./reducers').default // eslint-disable-line

      store.replaceReducer(nextReducer)
    })
  }

  return store
}

export default configureStore()
