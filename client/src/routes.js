import React from 'react'
import { BrowserRouter as Router, browserHistory, Route, Redirect } from 'react-router-dom'

import Auth from 'utils/auth'

import Welcome from './Welcome'
import Loading from './Welcome/Loading'
import Dashboard from './Dashboard'
import Account from './Account'

const styles = {
  height: '100vh',
}

export default () => (
  <Router history={browserHistory}>
    <div style={styles}>
      <Route
        exact
        path="/"
        render={props => <Welcome {...props} auth={Auth} />}
      />
      <Route
        exact
        path="/loading"
        render={(props) => {
          Auth.handleAuthentication(props)
          return <Loading {...props} />
        }}
      />
      <Route
        path="/dashboard"
        render={props => (
          Auth.isAuthenticated() ?
            <Dashboard {...props} auth={Auth} /> :
            <Redirect to="/" />
        )}
      />
      <Route
        path="/account"
        render={props => (
          Auth.isAuthenticated() ?
            <Account {...props} auth={Auth} /> :
            <Redirect to="/" />
        )}
      />
    </div>
  </Router>
)
