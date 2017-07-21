import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { ApolloClient, createNetworkInterface } from 'react-apollo'

import dashboard from './Dashboard/dashboard.module'

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

  const reducers = combineReducers({
    dashboard,
    apollo: client.reducer(),
  })

  const store = createStore(
    reducers,
    initialState,
    compose(...enhancers),
  )

  return store
}

export default configureStore()
