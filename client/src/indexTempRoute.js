import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, browserHistory, IndexRedirect } from 'react-router'
import ApolloClient, { createNetworkInterface } from 'apollo-client'
import { ApolloProvider } from 'react-apollo'
import injectTapEventPlugin from 'react-tap-event-plugin';
import 'tachyons'
import './index.css'

import EventsIndex from './components/EventDirectory'
import CreateEventFormTemplate from './components/CreateEventFormTemplate'
import EventPage from './components/EventPage'

const client = new ApolloClient({
  networkInterface: createNetworkInterface({ uri: 'https://api.graph.cool/simple/v1/cj5brkzuwwe2v01130hfc8sle'}),
  dataIdFromObject: o => o.id
})

// // Needed for Material-UI: onTouchTap
injectTapEventPlugin()

ReactDOM.render((
  <ApolloProvider client={client}>
    <Router history={browserHistory}>
      <Route path='/' component={EventsIndex}>
      </Route>
      <Route path='/view/event/:eventId' component={EventPage} />
      <Route path='/create/:hostID' component={CreateEventFormTemplate} />
    </Router>
  </ApolloProvider>
  ),
  document.getElementById('root')
)
