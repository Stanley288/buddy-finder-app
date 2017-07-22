import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { ApolloClient, createNetworkInterface } from 'react-apollo'

import dashboard from './Dashboard/dashboard.module'
import user from './Account/account.module'

// Setup Apollo client
export const client = new ApolloClient({
  networkInterface: createNetworkInterface({
    // uri: 'http://ec2-13-59-155-68.us-east-2.compute.amazonaws.com:8080/graphql',
    uri: 'http://d3b86c64.ngrok.io/graphql',
  }),
})

export function configureStore(initialState = {}) {
  // Middleware and store enhancers
  const enhancers = [
    applyMiddleware(thunk, logger, client.middleware()),
  ]

  const reducers = combineReducers({
    dashboard,
    user,
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
